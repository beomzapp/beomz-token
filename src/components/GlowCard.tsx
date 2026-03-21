"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

export default function GlowCard({
  children,
  className = "",
  glowColor = "amber",
}: {
  children: ReactNode;
  className?: string;
  glowColor?: "amber" | "green";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const colorMap = {
    amber: "rgba(249,115,22,0.08)",
    green: "rgba(34,197,94,0.08)",
  };

  const borderColorMap = {
    amber: "rgba(249,115,22,0.2)",
    green: "rgba(34,197,94,0.2)",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={ref}
      className={`relative bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden transition-colors duration-300 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor: isHovered ? borderColorMap[glowColor] : undefined,
      }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      {/* Spotlight follow cursor */}
      {isHovered && (
        <div
          className="absolute pointer-events-none z-0"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            width: 300,
            height: 300,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, ${colorMap[glowColor]} 0%, transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
