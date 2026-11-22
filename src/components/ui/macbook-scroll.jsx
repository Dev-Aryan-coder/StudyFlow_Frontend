import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { cn } from "../../lib/utils";
import "./macbook-scroll.css";

export function MacbookScroll({
  src,
  title,
  children,
  topSlot,
  onFlatChange,
  className
}) {
  const containerRef = useRef(null);

  // Track scroll progress as the IDE enters the screen and centers
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"]
  });

  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });
  const [isFlat, setIsFlat] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // 1. Rotate to completely flat (0deg) as user scrolls the IDE into view (gentle -8deg on mobile to prevent clipping)
  const initialTilt = isMobile ? -8 : -18;
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.7, 1],
    [initialTilt, initialTilt, 0, 0]
  );

  // 2. Shrink smoothly via CSS max-width instead of transform:scale.
  // This eliminates GPU bitmap downsampling and ensures 100% crystal-clear, razor-sharp vector text and borders.
  const targetMaxWidth = isMobile ? "96vw" : "89vw";
  const startMaxWidth = isMobile ? "98vw" : "95vw";
  const containerMaxWidth = useTransform(
    scrollYProgress,
    [0, 0.45, 0.75, 1],
    [startMaxWidth, startMaxWidth, targetMaxWidth, targetMaxWidth]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1, 0]
  );

  const textTransform = useTransform(
    scrollYProgress,
    [0, 0.35],
    [0, 30]
  );

  // Trigger FADE IN DOWN for option navbar once it rotates flat and settles
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const flatThreshold = 0.65;
    if (latest >= flatThreshold && !isFlat) {
      setIsFlat(true);
      if (onFlatChange) onFlatChange(true);
    } else if (latest < flatThreshold && isFlat) {
      setIsFlat(false);
      if (onFlatChange) onFlatChange(false);
    }
  });

  return (
    <div
      ref={containerRef}
      className={cn(
        "macbook-scroll-wrapper relative w-full flex flex-col items-center justify-start py-2 sm:py-6 select-none",
        className
      )}
    >
      {/* Optional Title Section */}
      {title && (
        <motion.div
          style={{
            translateY: textTransform,
            opacity: textOpacity,
          }}
          className="mb-4 sm:mb-8 text-center px-4 z-10"
        >
          {typeof title === "string" ? (
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
              {title}
            </h2>
          ) : (
            title
          )}
        </motion.div>
      )}

      {/* Clean Centered Stage: Perspective only while rotating, release to native 2D when flat */}
      <div
        className={cn(
          "w-full flex flex-col items-center justify-center",
          !isFlat && "[perspective:1400px]"
        )}
      >

        {/* Animated Top Slot: Options Navbar with FADE IN DOWN */}
        {topSlot && (
          <div className="w-full flex justify-center z-40 mb-3 sm:mb-4 flex-shrink-0">
            {typeof topSlot === "function" ? topSlot({ isFlat }) : topSlot}
          </div>
        )}

        {/* 3D Animated Visual IDE Container with zero text blurriness */}
        <motion.div
          style={{
            rotateX: rotateX,
            maxWidth: containerMaxWidth,
            transformOrigin: "center top",
            transformStyle: isFlat ? "flat" : "preserve-3d",
          }}
          className="macbook-lid relative w-full transition-all duration-300 flex-shrink-0"
        >
              {children ? (
                children
              ) : src ? (
                <div className="w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                  <img
                    src={src}
                    alt="Display"
                    className="w-full h-full object-cover"
                  />
                </div>
                ) : (
                <div className="w-full h-96 flex items-center justify-center text-gray-400">
                  Visual IDE Viewport
                </div>
          )}
            </motion.div>

          </div>
      </div>
      );
}

      // Standalone Demo Export
      export function MacbookScrollDemo() {
  return (
      <div className="w-full overflow-hidden bg-white">
        <MacbookScroll
          title={
            <span>
              Visual IDE Interactive Showcase. <br /> Scroll down to inspect.
            </span>
          }
          src={`/linear.webp`}
        />
      </div>
      );
}

      export default MacbookScroll;
