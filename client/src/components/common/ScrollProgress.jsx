import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[100] origin-left"
        style={{
          scaleX,
          height: "3px",
          background: "linear-gradient(90deg, #3b82f6, #22d3ee, #60a5fa, #2563eb)",
          backgroundSize: "200% 100%",
          animation: "text-shimmer 3s linear infinite",
          boxShadow: "0 0 12px rgba(59,130,246,0.5), 0 0 4px rgba(59,130,246,0.8)",
        }}
      />
      {/* Glowing leading edge particle */}
      <motion.div
        className="fixed top-0 z-[101] pointer-events-none"
        style={{
          left: scaleX.get ? undefined : "0%",
          width: "8px",
          height: "3px",
          background: "#fff",
          borderRadius: "50%",
          boxShadow: "0 0 8px #60a5fa, 0 0 16px rgba(96,165,250,0.6), 0 0 32px rgba(59,130,246,0.3)",
          x: scaleX,
        }}
      />
    </>
  );
}
