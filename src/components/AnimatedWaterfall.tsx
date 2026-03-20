"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedWaterfall() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="max-w-2xl mx-auto">
      <div className="flex flex-col items-center gap-0">
        {/* Revenue source */}
        <motion.div
          className="bg-[#111] border border-[#222] rounded-2xl p-6 w-full text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/5 to-[#534AB7]/5" />
          <div className="relative">
            <p className="text-sm text-gray-500">All Product Revenue</p>
            <p className="text-lg font-bold text-white mt-1">Beomz Build + Beomz Crypto</p>
          </div>
        </motion.div>

        {/* Animated flow line */}
        <motion.div
          className="w-px h-12 relative"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 w-px bg-gradient-to-b from-[#F97316]/50 to-transparent"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          {/* Flowing dot */}
          <motion.div
            className="absolute left-1/2 w-2 h-2 -ml-1 rounded-full bg-[#F97316]"
            animate={isInView ? {
              top: ["-10%", "110%"],
              opacity: [0, 1, 1, 0],
            } : {}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.5,
              ease: "easeIn",
            }}
          />
        </motion.div>

        {/* Treasury */}
        <motion.div
          className="bg-[#111] border border-[#F97316]/20 rounded-2xl p-6 w-full text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/5 to-transparent" />
          <div className="relative">
            <p className="text-sm text-gray-500">BeomzTreasury Contract</p>
            <p className="text-lg font-bold text-white mt-1">Threshold Check</p>
            <div className="flex items-center justify-center gap-1 mt-2">
              <motion.div
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs text-green-400">Automated</span>
            </div>
          </div>
        </motion.div>

        {/* Animated split lines */}
        <div className="relative w-full h-16">
          {/* Left line */}
          <motion.div
            className="absolute left-[16.5%] top-0 bottom-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <svg className="w-full h-full absolute" style={{ left: 0, top: 0, width: "100%", height: "100%" }}>
              <motion.line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100%"
                stroke="rgba(249,115,22,0.3)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={isInView ? { pathLength: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
              />
            </svg>
          </motion.div>
          {/* Center line */}
          <motion.div
            className="absolute left-1/2 w-px h-full"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <motion.div
              className="w-px bg-[#333] mx-auto"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
          </motion.div>
          {/* Right line */}
          <motion.div
            className="absolute right-[16.5%] top-0 bottom-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            <motion.div
              className="w-px bg-[#534AB7]/30 mx-auto"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            />
          </motion.div>
        </div>

        {/* Three-way split */}
        <div className="grid grid-cols-3 gap-4 w-full">
          {[
            {
              pct: "50%",
              label: "Stakers",
              sub: "USDC weekly, pro-rata",
              color: "#F97316",
              borderColor: "rgba(249,115,22,0.3)",
              delay: 1,
            },
            {
              pct: "25%",
              label: "Founder",
              sub: "USDC",
              color: "#fff",
              borderColor: "rgba(255,255,255,0.1)",
              delay: 1.1,
            },
            {
              pct: "25%",
              label: "Buyback + Burn",
              sub: "Aerodrome DEX",
              color: "#534AB7",
              borderColor: "rgba(83,74,183,0.3)",
              delay: 1.2,
            },
          ].map((item) => (
            <motion.div
              key={item.label}
              className="bg-[#111] rounded-2xl p-5 text-center relative overflow-hidden"
              style={{ border: `1px solid ${item.borderColor}` }}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: item.delay }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.p
                className="text-3xl font-bold"
                style={{ color: item.color }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: item.delay + 0.2, type: "spring" }}
              >
                {item.pct}
              </motion.p>
              <p className="text-sm text-gray-400 mt-1">{item.label}</p>
              <p className="text-xs text-gray-600 mt-1">{item.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
