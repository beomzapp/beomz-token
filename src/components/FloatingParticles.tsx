"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function FloatingParticles({ count = 30 }: { count?: number }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 15,
      delay: Math.random() * 5,
      isAmber: Math.random() > 0.5,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.isAmber
              ? "rgba(249,115,22,0.3)"
              : "rgba(234,88,12,0.3)",
          }}
          animate={{
            y: [0, -30, 10, -20, 0],
            x: [0, 10, -15, 5, 0],
            opacity: [0, 0.6, 0.3, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
