import initBg from '@/lib/initBg';

export default function initBg(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = 420;
  let animationId;

  function resize() {
    width = window.innerWidth;
    height = 420;
    canvas.width = width;
    canvas.height = height;
  }

  function lerp(a, b, t) {
    return a + (b - a) * t;
  }

  function draw(t) {
    ctx.clearRect(0, 0, width, height);

    // Main radial gradient
    const grad = ctx.createRadialGradient(
      width / 2, 0, lerp(180, 260, Math.sin(t / 4000)),
      width / 2, 0, lerp(width * 0.7, width * 0.9, Math.cos(t / 3000))
    );
    grad.addColorStop(0, '#b6e0fe');
    grad.addColorStop(0.25, '#b8f2e6');
    grad.addColorStop(0.55, '#fbc2eb');
    grad.addColorStop(0.9, '#f6eac2');
    grad.addColorStop(1, '#f6eac2');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // Subtle moving highlight
    const highlight = ctx.createRadialGradient(
      lerp(width * 0.3, width * 0.7, (Math.sin(t / 2000) + 1) / 2),
      lerp(40, 120, (Math.cos(t / 2500) + 1) / 2),
      0,
      lerp(width * 0.3, width * 0.7, (Math.sin(t / 2000) + 1) / 2),
      lerp(40, 120, (Math.cos(t / 2500) + 1) / 2),
      220
    );
    highlight.addColorStop(0, 'rgba(255,255,255,0.18)');
    highlight.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.globalAlpha = 0.7;
    ctx.fillStyle = highlight;
    ctx.fillRect(0, 0, width, height);
    ctx.globalAlpha = 1;

    animationId = requestAnimationFrame(draw);
  }

  function start() {
    resize();
    window.addEventListener('resize', resize);
    let startTime = performance.now();
    function loop(now) {
      draw(now - startTime);
      animationId = requestAnimationFrame(loop);
    }
    animationId = requestAnimationFrame(loop);
  }

  function cleanup() {
    window.removeEventListener('resize', resize);
    cancelAnimationFrame(animationId);
  }

  start();
  return cleanup;
}