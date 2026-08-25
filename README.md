# 🐰 KANIN Blog

> 创造 · 分享 · 折腾 —— 我的个人博客

一个简洁、轻量的个人博客，纯手工打造，无框架依赖。

## ✨ 特性

- **零依赖构建** —— 用 `build.js` 将 Markdown 一键转为静态 HTML 页面
- **自定义光标交互** —— 鼠标悬浮卡片时的吸附框效果
- **动态背景** —— Canvas 粒子 + 渐变 blob + 网格叠加
- **文章系统** —— 在 `文章/` 目录写 Markdown，构建后自动生成文章页并刷新首页卡片
- **中文优先** —— 使用 Google Fonts（Sora / Space Grotesk / Noto Sans SC）

## 📁 项目结构

```
kanin-blog/
├── index.html          # 首页
├── styles.css          # 全局样式
├── script.js           # 交互脚本（光标、滚动、动画）
├── build.js            # Markdown → HTML 构建脚本
├── 文章/               # Markdown 源文件
│   ├── 负基础 Claude Code 安装使用教程.md
│   ├── javaWeb教程.md
│   ├── SpringBoot初始化.md
│   ├── MySQL安装教程.md
│   └── maven安装教程.md
└── posts/              # 构建生成的 HTML 文章页
```

## 🚀 使用

### 写文章

在 `文章/` 目录下新建 `.md` 文件，用 Markdown 语法写作。

### 构建

```bash
node build.js
```

自动完成：
1. 将 `文章/` 下所有 `.md` 转为 HTML，输出到 `posts/`
2. 更新 `index.html` 中的文章卡片列表

### 预览

直接用浏览器打开 `index.html`，或启动任意静态服务器：

```bash
npx serve .
```

## 📬 联系

- **GitHub**: [@kaninmeow](https://github.com/kaninmeow)
- **Bilibili**: [个人空间](https://space.bilibili.com/326698881)
- **Email**: sunqingdong0318@foxmail.com

---

© 2026 KANIN · 用心折腾，用力生活
