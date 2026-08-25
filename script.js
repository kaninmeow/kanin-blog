/* ===================================================================
   KANIN · 个人博客  —  script.js
   =================================================================== */
(() => {
  'use strict';

  /* ---------- 1. 磁吸光标（核心特效） ---------- */
  const dot   = document.getElementById('cursorDot');
  const box   = document.getElementById('cursorBox');
  const label = document.getElementById('cursorLabel');
  const fine  = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

  if (fine && dot && box) {
    // 目标值 / 当前值（用 lerp 做平滑插值）
    let mx = innerWidth / 2, my = innerHeight / 2;   // 鼠标真实坐标
    const free = { w: 34, h: 34, r: 12 };            // 自由游走时的方框尺寸
    let tX = mx, tY = my, tW = free.w, tH = free.h, tR = free.r;
    let cX = tX, cY = tY, cW = tW, cH = tH, cR = tR; // 当前渲染值
    let hovered = null;

    addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
    addEventListener('mousedown', () => box.classList.add('clicking'));
    addEventListener('mouseup',   () => box.classList.remove('clicking'));
    addEventListener('mouseleave', () => { dot.style.opacity = box.style.opacity = '0'; });
    addEventListener('mouseenter', () => { dot.style.opacity = box.style.opacity = '1'; });

    // 为所有可吸附元素绑定进入 / 离开
    const bind = el => {
      el.addEventListener('mouseenter', () => {
        hovered = el;
        box.classList.add('snapped');
        label.textContent = el.dataset.label || '';
      });
      el.addEventListener('mouseleave', () => {
        if (hovered === el) { hovered = null; box.classList.remove('snapped'); }
      });
    };
    document.querySelectorAll('[data-magnetic]').forEach(bind);

    const lerp = (a, b, n) => a + (b - a) * n;

    function frame() {
      // 点：总是紧跟鼠标
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;

      if (hovered && document.body.contains(hovered)) {
        const pad = 8;
        const r = hovered.getBoundingClientRect();
        tX = r.left + r.width / 2;
        tY = r.top + r.height / 2;
        tW = r.width + pad * 2;
        tH = r.height + pad * 2;
        // 吸附时圆角贴合元素本身
        tR = parseFloat(getComputedStyle(hovered).borderRadius) + pad || 14;
      } else {
        tX = mx; tY = my; tW = free.w; tH = free.h; tR = free.r;
      }

      // 吸附时插值更快（贴合），自由时更跟手
      const snap = hovered ? 0.22 : 0.18;
      cX = lerp(cX, tX, snap); cY = lerp(cY, tY, snap);
      cW = lerp(cW, tW, snap); cH = lerp(cH, tH, snap);
      cR = lerp(cR, tR, snap);

      box.style.width  = cW + 'px';
      box.style.height = cH + 'px';
      box.style.borderRadius = cR + 'px';
      box.style.transform = `translate(${cX}px, ${cY}px) translate(-50%,-50%)`;

      requestAnimationFrame(frame);
    }
    frame();
  }
  /* ---------- 2. 磁吸按钮（轻微拉扯） ---------- */
  if (fine) {
    document.querySelectorAll('.btn, .logo').forEach(el => {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });
  }

  /* ---------- 3. 粒子网络背景 ---------- */
  const canvas = document.getElementById('bg');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let w, h, particles, mouse = { x: -999, y: -999 };
    const DENSITY = 0.00009; // 每像素粒子数

    function resize() {
      w = canvas.width = innerWidth;
      h = canvas.height = innerHeight;
      const count = Math.min(140, Math.floor(w * h * DENSITY));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      }));
    }
    resize();
    addEventListener('resize', resize);
    addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34,211,238,.55)';
        ctx.fill();
      }
      // 连线
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(124,58,237,${(1 - d / 130) * 0.35})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        // 与鼠标连线
        const dm = Math.hypot(particles[i].x - mouse.x, particles[i].y - mouse.y);
        if (dm < 180) {
          ctx.strokeStyle = `rgba(244,114,182,${(1 - dm / 180) * 0.5})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      requestAnimationFrame(draw);
    }
    if (!matchMedia('(prefers-reduced-motion:reduce)').matches) draw();
  }
  /* ---------- 4. 打字机 ---------- */
  const typedEl = document.getElementById('typed');
  if (typedEl) {
    const words = ['写代码', '写博客', '做产品', '爱折腾', '永远好奇'];
    let wi = 0, ci = 0, deleting = false;
    (function type() {
      const word = words[wi];
      typedEl.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length) { ci++; }
      else if (deleting && ci > 0) { ci--; }
      else if (!deleting && ci === word.length) { deleting = true; setTimeout(type, 1400); return; }
      else { deleting = false; wi = (wi + 1) % words.length; }
      setTimeout(type, deleting ? 55 : 120);
    })();
  }

  /* ---------- 5. 滚动驱动 · 切换动画（Apple 风） ----------
     内容随滚动位置连续变化：进入时从下方带模糊 + 3D 微翻转“浮入”，
     离开顶部时轻微放大 + 淡出，产生纵深与切换感。 */
  const reduceMotion = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const animEls = [...document.querySelectorAll('[data-reveal]')];
  const grid    = document.querySelector('.grid-overlay');
  const progress = document.getElementById('progress');

  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  if (reduceMotion || !animEls.length) {
    animEls.forEach(el => { el.style.opacity = 1; });
  } else {
    document.documentElement.classList.add('js-anim');

    function tick() {
      const vh = innerHeight;
      // 先统一读取（一次回流），再统一写入，避免布局抖动
      const rects = animEls.map(el => el.getBoundingClientRect());
      animEls.forEach((el, i) => {
        const r = rects[i];
        const center = r.top + r.height / 2;
        const n = 1 - center / vh;                 // 0=中心在底部, 1=中心在顶部
        const inP  = easeOut(clamp(n / 0.55, 0, 1));        // 浮入进度
        const outP = easeOut(clamp((n - 0.82) / 0.32, 0, 1)); // 离场进度

        const opacity = inP * (1 - outP * 0.9);
        const y = (1 - inP) * 62 - outP * 46;
        const scale = (0.9 + 0.1 * inP) * (1 + outP * 0.07);
        const rotX = (1 - inP) * 11 - outP * 5;
        const blur = (1 - inP) * 7 + outP * 3.5;

        el.style.opacity = opacity.toFixed(3);
        el.style.transform =
          `translate3d(0,${y.toFixed(1)}px,0) scale(${scale.toFixed(3)}) rotateX(${rotX.toFixed(1)}deg)`;
        el.style.filter = blur > 0.2 ? `blur(${blur.toFixed(1)}px)` : 'none';
      });

      // 背景网格视差（不动 blob，保留其 CSS 漂浮动画）
      const sy = scrollY;
      if (grid) grid.style.backgroundPosition = `0 ${sy * 0.35}px, 0 ${sy * 0.35}px`;

      // 顶部进度条
      if (progress) {
        const max = document.documentElement.scrollHeight - vh;
        progress.style.width = (max > 0 ? (sy / max) * 100 : 0) + '%';
      }

      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- 6. 数字滚动 ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.count;
      let n = 0; const step = Math.max(1, target / 40);
      const tick = () => {
        n = Math.min(target, n + step);
        el.textContent = Math.floor(n);
        if (n < target) requestAnimationFrame(tick);
      };
      tick(); cio.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(c => cio.observe(c));

  /* ---------- 7. 导航栏滚动态 ---------- */
  const nav = document.getElementById('nav');
  addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', scrollY > 40);
  }, { passive: true });

  /* ---------- 8. 微信公众号 → 复制 ---------- */
  const wechat = document.getElementById('wechatCard');
  const toast = document.getElementById('toast');
  const showToast = (msg) => {
    toast.textContent = msg; toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1800);
  };
  if (wechat) {
    wechat.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('KANIN');
        showToast('公众号「KANIN」已复制 ✓');
      } catch { showToast('请手动搜索公众号：KANIN'); }
    });
  }
})();
