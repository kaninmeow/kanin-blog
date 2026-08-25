/* ===================================================================
   build.js — 把 “文章/” 里的 Markdown 转成真实可读的 HTML 文章页，
   并自动刷新首页文章卡片。用法： node build.js
   =================================================================== */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SRC  = path.join(ROOT, '文章');
const OUT  = path.join(ROOT, 'posts');

// 已知文章的 slug / 标题 / 标签 / 排序（新增文章会自动兜底）
const META = {
  '负基础 Claude Code 安装使用教程': { slug: 'claude-code', title: '负基础 Claude Code 安装使用教程', tag: 'AI 工具',  order: 1 },
  'javaWeb教程':                     { slug: 'javaweb',      title: 'JavaWeb 全栈教程',              tag: '全栈开发', order: 2 },
  'SpringBoot初始化':                { slug: 'springboot',   title: 'SpringBoot 项目初始化',         tag: '后端',    order: 3 },
  'MySQL安装教程':                   { slug: 'mysql',        title: 'MySQL 安装教程',                tag: '数据库',  order: 4 },
  'maven安装教程':                   { slug: 'maven',        title: 'Maven 安装教程',                tag: '环境搭建', order: 5 },
};

/* ---------- 工具函数 ---------- */
const escapeHtml = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const stripTags  = s => s.replace(/<[^>]+>/g, '');
// 去掉从语雀导出的 <font> 内联样式与 HTML 注释（保留内部文字）
const clean = s => s.replace(/<!--[\s\S]*?-->/g, '').replace(/<\/?font[^>]*>/gi, '');

// 行内元素：图片 → 链接 → 行内代码 → 加粗
function inline(s) {
  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)[^)]*\)/g,
    (m, alt, src) => `<img src="${src.trim()}" alt="${escapeHtml(alt)}" loading="lazy" data-magnetic data-label="图片">`);
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)[^)]*\)/g,
    (m, t, h) => `<a href="${h.trim()}" target="_blank" rel="noopener" data-magnetic data-label="打开链接">${t}</a>`);
  s = s.replace(/`([^`]+)`/g, (m, c) => `<code>${escapeHtml(stripTags(c))}</code>`);
  s = s.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
  return s;
}

const isBlank  = l => l.trim() === '';
const reHead   = /^(#{1,6})\s+(.*)$/;
const reList   = /^([ \t]*)([-*+]|\d+[.)])\s+(.*)$/;
const reTableSep = /^\s*\|?[\s:|-]*-{3,}[\s:|-]*\|?\s*$/;
const reHr     = /^\s*([-*_])\1{2,}\s*$/;
const reQuote  = /^>\s?(.*)$/;
//BUILD_APPEND

/* ---------- 嵌套列表 ---------- */
function collectList(lines, start) {
  const items = [];
  let i = start;
  while (i < lines.length) {
    const raw = lines[i];
    if (isBlank(raw)) {
      // 空行后若仍是列表项则继续，否则结束
      const nxt = lines[i + 1] != null ? clean(lines[i + 1]) : '';
      if (reList.test(nxt)) { i++; continue; }
      break;
    }
    const cl = clean(raw);
    const m = cl.match(reList);
    if (!m) break;
    const indent = m[1].replace(/\t/g, '    ').length;
    items.push({ indent, ordered: /\d/.test(m[2]), content: m[3] });
    i++;
  }
  return { items, next: i };
}

function listToHtml(items) {
  let idx = 0;
  function build() {
    const base = items[idx].indent;
    const ordered = items[idx].ordered;
    let html = ordered ? '<ol>' : '<ul>';
    while (idx < items.length && items[idx].indent >= base) {
      if (items[idx].indent > base) { html += build(); continue; }
      html += '<li>' + inline(items[idx].content);
      idx++;
      if (idx < items.length && items[idx].indent > base) html += build();
      html += '</li>';
    }
    return html + (ordered ? '</ol>' : '</ul>');
  }
  return build();
}

/* ---------- 表格 ---------- */
function collectTable(lines, start) {
  const rows = [];
  let i = start;
  while (i < lines.length && /^\s*\|/.test(clean(lines[i]))) { rows.push(clean(lines[i])); i++; }
  const split = r => {
    let s = r.trim();
    if (s.startsWith('|')) s = s.slice(1);
    if (s.endsWith('|')) s = s.slice(0, -1);
    return s.split('|').map(c => c.trim());
  };
  const header = split(rows[0]);
  const aligns = split(rows[1]).map(c => {
    const l = c.startsWith(':'), r = c.endsWith(':');
    return l && r ? 'center' : r ? 'right' : l ? 'left' : '';
  });
  const cell = (tag, c, i) => `<${tag}${aligns[i] ? ` style="text-align:${aligns[i]}"` : ''}>${inline(c)}</${tag}>`;
  let html = '<div class="table-wrap"><table><thead><tr>';
  header.forEach((h, i) => html += cell('th', h, i));
  html += '</tr></thead><tbody>';
  for (let r = 2; r < rows.length; r++) {
    html += '<tr>' + split(rows[r]).map((c, i) => cell('td', c, i)).join('') + '</tr>';
  }
  return { html: html + '</tbody></table></div>', next: i };
}
//BUILD_APPEND2

/* ---------- Markdown → HTML 主流程 ---------- */
function mdToHtml(md) {
  const lines = md.split(/\r?\n/);
  let html = '';
  let i = 0;
  let para = [];
  const flush = () => {
    if (para.length) { html += `<p>${inline(para.join(' '))}</p>\n`; para = []; }
  };

  while (i < lines.length) {
    const raw = lines[i];

    // 代码块（原样保留、转义，不清洗 font）
    const fence = raw.match(/^```(.*)$/);
    if (fence) {
      flush();
      const lang = fence[1].trim();
      const code = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) { code.push(lines[i]); i++; }
      i++;
      html += `<pre data-lang="${escapeHtml(lang || 'code')}"><code>${escapeHtml(code.join('\n'))}</code></pre>\n`;
      continue;
    }

    const line = clean(raw);

    if (isBlank(line)) { flush(); i++; continue; }
    if (reHr.test(line)) { flush(); html += '<hr>\n'; i++; continue; }

    const h = line.match(reHead);
    if (h) { flush(); const lv = h[1].length; html += `<h${lv}>${inline(h[2].trim())}</h${lv}>\n`; i++; continue; }

    // 表格：当前行以 | 开头且下一行是分隔行
    if (/^\s*\|/.test(line) && lines[i + 1] != null && reTableSep.test(clean(lines[i + 1]))) {
      flush();
      const t = collectTable(lines, i);
      html += t.html + '\n'; i = t.next; continue;
    }

    if (reList.test(line)) {
      flush();
      const l = collectList(lines, i);
      html += listToHtml(l.items) + '\n'; i = l.next; continue;
    }

    const q = line.match(reQuote);
    if (q) {
      flush();
      const buf = [];
      let j = i;
      while (j < lines.length) { const m = clean(lines[j]).match(reQuote); if (!m) break; buf.push(m[1]); j++; }
      html += `<blockquote>${inline(buf.join(' '))}</blockquote>\n`; i = j; continue;
    }

    para.push(line);
    i++;
  }
  flush();
  return html;
}
//BUILD_APPEND3

/* ---------- 摘要 & 阅读时长 ---------- */
function summarize(md) {
  for (const raw of md.split(/\r?\n/)) {
    const l = clean(raw).trim();
    if (!l) continue;
    if (/^(#{1,6}\s|```|\||>|!\[)/.test(l)) continue;
    const txt = stripTags(l).replace(/^([-*+]|\d+[.)])\s+/, '')
      .replace(/[`*_>#]/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').trim();
    if (txt) return txt.length > 58 ? txt.slice(0, 58) + '…' : txt;
  }
  return '点击阅读全文';
}
const readMin = md => Math.max(1, Math.round(clean(md).replace(/\s/g, '').length / 500));

/* ---------- 文章页模板 ---------- */
function pageHtml(p) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(p.title)} · KANIN</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=Space+Grotesk:wght@400;500;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../styles.css">
</head>
<body>
<div class="scroll-progress" id="progress"></div>
<div class="cursor-dot" id="cursorDot"></div>
<div class="cursor-box" id="cursorBox">
  <span class="corner tl"></span><span class="corner tr"></span>
  <span class="corner bl"></span><span class="corner br"></span>
  <span class="cursor-label" id="cursorLabel"></span>
</div>
<canvas id="bg"></canvas>
<div class="blob blob-1"></div><div class="blob blob-2"></div><div class="blob blob-3"></div>
<div class="grid-overlay"></div><div class="noise"></div>

<nav class="nav scrolled" id="nav">
  <a href="../index.html" class="logo" data-magnetic data-label="回首页">KA<span>N</span>IN</a>
  <div class="nav-links">
    <a href="../index.html#blog" data-magnetic data-label="文章">文章</a>
    <a href="../index.html#links" data-magnetic data-label="联系">联系</a>
  </div>
</nav>

<article class="article">
  <a href="../index.html#blog" class="back-link" data-magnetic data-label="返回列表">← 返回文章列表</a>
  <header class="article-header" data-reveal>
    <span class="post-tag">${escapeHtml(p.tag)}</span>
    <h1 class="article-title">${escapeHtml(p.title)}</h1>
    <div class="article-meta"><span>KANIN</span><span>· 约 ${p.readmin} 分钟</span><span>· 微信公众号首发</span></div>
  </header>
  <div class="prose">
${p.content}
  </div>
</article>

<footer class="footer">
  <p>© 2026 KANIN · 用心折腾，用力生活</p>
  <p class="footer-sub"><a href="../index.html#blog" style="color:var(--c2)">← 看看其他文章</a></p>
</footer>

<script src="../script.js"></script>
</body>
</html>`;
}
//BUILD_APPEND4

/* ---------- 主流程 ---------- */
function run() {
  if (!fs.existsSync(SRC)) { console.error('找不到 “文章” 文件夹'); process.exit(1); }
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT);

  const files = fs.readdirSync(SRC).filter(f => f.toLowerCase().endsWith('.md'));
  const posts = files.map((file, idx) => {
    const base = file.replace(/\.md$/i, '');
    const meta = META[base] || { slug: 'post-' + (idx + 1), title: base, tag: '教程', order: 100 + idx };
    const md = fs.readFileSync(path.join(SRC, file), 'utf8');
    return { ...meta, file, summary: summarize(md), readmin: readMin(md), content: mdToHtml(md) };
  }).sort((a, b) => a.order - b.order);

  // 生成每篇文章页
  posts.forEach(p => {
    fs.writeFileSync(path.join(OUT, p.slug + '.html'), pageHtml(p), 'utf8');
    console.log('  ✓ posts/' + p.slug + '.html');
  });

  // 刷新首页卡片
  const cards = posts.map((p, i) => `    <a class="post glass" href="posts/${p.slug}.html" data-magnetic data-label="阅读全文" data-reveal>
      <span class="post-tag">${escapeHtml(p.tag)}</span>
      <h3>${escapeHtml(p.title)}</h3>
      <p>${escapeHtml(p.summary)}</p>
      <div class="post-meta"><span>约 ${p.readmin} 分钟</span><span>· 教程</span></div>
    </a>`).join('\n');

  const indexPath = path.join(ROOT, 'index.html');
  let html = fs.readFileSync(indexPath, 'utf8');
  html = html.replace(/<!--POSTS_START-->[\s\S]*?<!--POSTS_END-->/,
    `<!--POSTS_START-->\n${cards}\n    <!--POSTS_END-->`);
  fs.writeFileSync(indexPath, html, 'utf8');

  console.log(`\n完成：${posts.length} 篇文章已生成，首页卡片已刷新。`);
}
run();
//BUILD_APPEND5
