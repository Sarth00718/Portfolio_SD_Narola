import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const springX = useSpring(cursorX, { stiffness: 200, damping: 25, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 200, damping: 25, mass: 0.5 });

  useEffect(() => {
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setVisible(true);

    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const onHover = (e) => {
      const target = e.target;
      const isHoverable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]');

      setHovered(!!isHoverable);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onHover);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onHover);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          width: hovered ? 32 : 8,
          height: hovered ? 32 : 8,
          borderRadius: "50%",
          background: hovered
            ? "rgba(59,130,246,0.08)"
            : "rgba(59,130,246,0.6)",
          border: hovered ? "1px solid rgba(59,130,246,0.3)" : "none",
          transition: "width 0.2s, height 0.2s, background 0.2s",
        }}
      />
      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999]"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          width: hovered ? 48 : 28,
          height: hovered ? 48 : 28,
          borderRadius: "50%",
          border: "1px solid rgba(59,130,246,0.15)",
          transition: "width 0.3s, height 0.3s",
        }}
      />
    </>
  );
}
