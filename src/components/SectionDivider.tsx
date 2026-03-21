"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionDivider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(249,115,22,0.3), rgba(234,88,12,0.3), transparent)",
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}
