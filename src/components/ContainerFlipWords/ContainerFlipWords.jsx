import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ContainerFlipWords.css';

/**
 * ContainerFlipWords
 * Dynamic max-word-width container:
 * - Computes the maximum width among all words so the container NEVER resizes on flip
 * - Zero clipping: overflow is visible with generous horizontal padding
 * - Letter-by-letter spring & blur flip transitions (FlipWords)
 * - Pure solid black text — zero gradients
 */
export function ContainerFlipWords({
  words = ["institute", "academy", "tuition", "coaching", "classroom"],
  interval = 2800,
  className = ""
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxContainerWidth, setMaxContainerWidth] = useState(undefined);
  const measureContainerRef = useRef(null);

  // Measure all words to compute the exact maximum width needed across all words
  useEffect(() => {
    const measureWidth = () => {
      if (measureContainerRef.current) {
        const children = measureContainerRef.current.children;
        let maxWidth = 0;
        for (let i = 0; i < children.length; i++) {
          const w = children[i].offsetWidth;
          if (w > maxWidth) {
            maxWidth = w;
          }
        }
        if (maxWidth > 0) {
          // Responsive padding: generous on desktop, scaled on mobile
          const padding = window.innerWidth <= 640 ? 24 : 44;
          setMaxContainerWidth(maxWidth + padding);
        }
      }
    };

    measureWidth();
    window.addEventListener('resize', measureWidth);
    return () => window.removeEventListener('resize', measureWidth);
  }, [words]);

  // Cycle words on interval
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  const currentWord = words[currentIndex];

  return (
    <>
      {/* Hidden measuring container rendered in the same typographic context */}
      <span
        ref={measureContainerRef}
        className="absolute opacity-0 pointer-events-none -z-50 whitespace-nowrap"
        aria-hidden="true"
      >
        {words.map((w, idx) => (
          <span key={idx} className="inline-block px-1 font-bold">
            {w}
          </span>
        ))}
      </span>

      <span 
        className={`container-flip-words ${className}`}
        style={maxContainerWidth ? { width: `${maxContainerWidth}px` } : undefined}
      >
        {/* Visible Flipping Word with FlipWords letter-by-letter spring */}
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWord}
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -16, filter: "blur(6px)" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flip-word-wrapper text-black font-bold"
          >
            {currentWord.split("").map((char, charIndex) => (
              <motion.span
                key={`${currentWord}-${charIndex}`}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: charIndex * 0.025,
                  duration: 0.25,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="flip-letter text-black"
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}

export default ContainerFlipWords;
