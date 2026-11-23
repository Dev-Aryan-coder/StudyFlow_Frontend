import React, { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

export function CanvasRevealEffect({
  animationSpeed = 2.5,
  colors = [[245, 158, 11], [251, 191, 36]],
  containerClassName,
  dotSize = 2,
  showGradient = true,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId;
    let time = 0;
    let width = 0;
    let height = 0;

    // Measure dimensions via ResizeObserver instead of calling getBoundingClientRect in RAF loop
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        width = Math.round(w);
        height = Math.round(h);
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        if (width > 0 && height > 0) {
          canvas.width = width * dpr;
          canvas.height = height * dpr;
        }
      }
    });

    resizeObserver.observe(canvas);

    // Initial sizing
    width = canvas.clientWidth || 300;
    height = canvas.clientHeight || 450;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    const spacing = 18; // optimal dot spacing for buttery-smooth 60fps
    const numColors = colors.length;

    let lastTime = performance.now();

    const render = (now) => {
      const dt = Math.min(0.05, (now - lastTime) / 1000);
      lastTime = now;
      time += dt * animationSpeed;

      if (width > 0 && height > 0) {
        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, width, height);

        const cols = Math.ceil(width / spacing);
        const rows = Math.ceil(height / spacing);

        // Batch dots by color into Path2D to minimize GPU draw calls from hundreds to just numColors
        const paths = Array.from({ length: numColors }, () => new Path2D());
        const hasDots = Array.from({ length: numColors }, () => false);

        for (let i = 0; i < cols; i++) {
          const x = i * spacing + spacing / 2;
          for (let j = 0; j < rows; j++) {
            const y = j * spacing + spacing / 2;

            // Fluid wave phase calculation
            const wave = (Math.sin(x * 0.03 + time * 0.9) + Math.cos(y * 0.03 - time * 0.7)) * 0.5;

            if (wave > 0.05) {
              const colorIdx = (i + j) % numColors;
              const radius = dotSize * (0.8 + wave * 0.5);
              const path = paths[colorIdx];
              path.moveTo(x + radius, y);
              path.arc(x, y, radius, 0, Math.PI * 2);
              hasDots[colorIdx] = true;
            }
          }
        }

        // Draw batched paths
        for (let c = 0; c < numColors; c++) {
          if (hasDots[c]) {
            const [r, g, b] = colors[c];
            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.65)`;
            ctx.fill(paths[c]);
          }
        }

        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
    };
  }, [animationSpeed, colors, dotSize]);

  return (
    <div className={cn("h-full relative bg-white w-full overflow-hidden pointer-events-none", containerClassName)}>
      <canvas
        ref={canvasRef}
        className="h-full w-full absolute inset-0 block pointer-events-none"
      />
      {showGradient && (
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] bg-white/70 dark:bg-black/60 pointer-events-none" />
      )}
    </div>
  );
}

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default CanvasRevealEffect;
