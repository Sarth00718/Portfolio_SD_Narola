import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Trail dots
  const trailCount = 5;
  const trailRefs = useRef(
    Array.from({ length: trailCount }, () => ({
      x: useMotionValue(-100),
      y: useMotionValue(-100),
    }))
  );

  const trailSprings = trailRefs.current.map((trail, i) => ({
    x: useSpring(trail.x, { damping: 30 + i * 5, stiffness: 200 - i * 20, mass: 0.3 + i * 0.1 }),
    y: useSpring(trail.y, { damping: 30 + i * 5, stiffness: 200 - i * 20, mass: 0.3 + i * 0.1 }),
  }));

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailRefs.current.forEach((trail) => {
        trail.x.set(e.clientX);
        trail.y.set(e.clientY);
      });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]');
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (typeof window !== "undefined" && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Trail dots */}
      {trailSprings.map((trail, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 pointer-events-none z-[9998]"
          style={{
            x: trail.x,
            y: trail.y,
            width: `${4 - i * 0.5}px`,
            height: `${4 - i * 0.5}px`,
            borderRadius: "50%",
            background: `rgba(96, 165, 250, ${0.3 - i * 0.05})`,
            boxShadow: `0 0 ${6 - i}px rgba(96,165,250,${0.2 - i * 0.03})`,
            translateX: "-50%",
            translateY: "-50%",
            opacity: isVisible ? 1 : 0,
          }}
        />
      ))}

      {/* Main cursor ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isPointer ? 40 : 20,
            height: isPointer ? 40 : 20,
            opacity: isVisible ? 1 : 0,
            borderWidth: isPointer ? "1px" : "1.5px",
          }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: "50%",
            borderColor: isPointer ? "rgba(96,165,250,0.6)" : "rgba(96,165,250,0.35)",
            borderStyle: "solid",
            background: isPointer ? "rgba(59,130,246,0.08)" : "transparent",
            boxShadow: isPointer
              ? "0 0 20px rgba(59,130,246,0.2), inset 0 0 10px rgba(59,130,246,0.05)"
              : "0 0 8px rgba(59,130,246,0.1)",
            mixBlendMode: "normal",
          }}
        />
      </motion.div>

      {/* Center dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isPointer ? 4 : 3,
            height: isPointer ? 4 : 3,
            opacity: isVisible ? 1 : 0,
          }}
          style={{
            borderRadius: "50%",
            background: "#60a5fa",
            boxShadow: "0 0 6px #60a5fa, 0 0 12px rgba(96,165,250,0.3)",
          }}
        />
      </motion.div>

      <style>{`
        * { cursor: none !important; }
        @media (pointer: coarse) {
          * { cursor: auto !important; }
        }
      `}</style>
    </>
  );
}
