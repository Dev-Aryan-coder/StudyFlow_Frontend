import React, { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

export function CanvasRevealEffect({
  animationSpeed = 3,
  opacities = [0.3, 0.3, 0.3, 0.5, 0.5, 0.5, 0.8, 0.8, 0.8, 1],
  colors = [[125, 211, 252]],
  containerClassName,
  dotSize = 2,
  showGradient = true,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let time = 0;

    const render = () => {
      time += 0.016 * animationSpeed;

      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.round(rect.width);
      const height = Math.round(rect.height);

      if (width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const spacing = 12; // grid dot spacing
      const cols = Math.ceil(width / spacing);
      const rows = Math.ceil(height / spacing);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing + spacing / 2;
          const y = j * spacing + spacing / 2;

          // Multi-frequency wave formula for organic fluid shimmer
          const wave1 = Math.sin(x * 0.035 + time * 0.8);
          const wave2 = Math.cos(y * 0.035 - time * 0.6);
          const wave3 = Math.sin((x + y) * 0.02 + time * 0.5);
          const combined = (wave1 + wave2 + wave3) / 3;

          // Normalized wave threshold
          const intensity = Math.max(0, (combined + 1) / 2);

          if (intensity > 0.35) {
            // Pick color from palette based on position
            const colorIdx = (i + j) % colors.length;
            const [r, g, b] = colors[colorIdx];

            // Opacity modulation
            const alpha = Math.min(0.9, Math.pow(intensity, 1.8) * 0.85);
            const currentSize = dotSize * (0.6 + intensity * 0.6);

            ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(2)})`;
            ctx.beginPath();
            ctx.arc(x, y, currentSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [animationSpeed, colors, dotSize]);

  return (
    <div className={cn("h-full relative bg-white w-full overflow-hidden", containerClassName)}>
      <canvas
        ref={canvasRef}
        className="h-full w-full absolute inset-0 block pointer-events-none"
      />
      {showGradient && (
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)] bg-white/40 dark:bg-black/40 pointer-events-none" />
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
