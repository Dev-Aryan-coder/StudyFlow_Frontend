import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Direct motion values for zero-latency position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Snappy, natural spring tracking
  const springConfig = { damping: 30, stiffness: 500, mass: 0.35 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only initialize on desktop/fine-pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const checkHover = (e) => {
      const target = e.target;
      if (!target) return;
      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-cursor-hover]'
      );
      setIsHovered(Boolean(isInteractive));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', checkHover);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', checkHover);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor-container"
      style={{
        x: smoothX,
        y: smoothY,
        opacity: isVisible ? 1 : 0,
      }}
      animate={{
        scale: isClicked ? 0.9 : isHovered ? 1.08 : 1,
      }}
      transition={{ type: 'spring', damping: 24, stiffness: 450 }}
    >
      {/* Exact Outlined Cursor Vector Matching Doodle/Pick Shape */}
      <svg
        className="custom-cursor-svg"
        width="21"
        height="21"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 5 2 C 2.2 1.7, 3.5 2.5, 3 3 C 2.5 3.5, 1.8 2.7, 2 5 C 2.2 7.3, 3.3 14.2, 4 17 C 4.7 19.8, 5.3 20.8, 6 22 C 6.7 23.2, 7.2 23.7, 8 24 C 8.8 24.3, 10.2 24.2, 11 24 C 11.8 23.8, 12.3 24.2, 13 23 C 13.7 21.8, 14.3 18.3, 15 17 C 15.7 15.7, 16.0 15.5, 17 15 C 18.0 14.5, 19.8 14.7, 21 14 C 22.2 13.3, 23.7 12.2, 24 11 C 24.3 9.8, 23.7 8.0, 23 7 C 22.3 6.0, 23.0 5.8, 20 5 C 17.0 4.2, 7.8 2.3, 5 2 Z"
          fill="#ffffff"
          stroke="#000000"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

export default CustomCursor;
