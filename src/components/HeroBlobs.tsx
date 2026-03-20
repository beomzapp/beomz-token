"use client";

import { motion } from "framer-motion";

export default function HeroBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main amber blob - top right */}
      <motion.div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle at center, #F97316, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -20, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Purple blob - bottom left */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.07]"
        style={{
          background: "radial-gradient(circle at center, #534AB7, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 20, -30, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small amber accent - center left */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle at center, #F97316, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small purple accent - center right */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-[250px] h-[250px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle at center, #534AB7, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 30, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
