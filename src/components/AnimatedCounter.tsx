"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
}: {
  value: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("—");

  useEffect(() => {
    if (!isInView) return;

    // If it's a dash placeholder, just show it
    if (value === "—") {
      setDisplay("—");
      return;
    }

    // Parse numeric value
    const numericStr = value.replace(/[^0-9.]/g, "");
    const target = parseFloat(numericStr);
    if (isNaN(target)) {
      setDisplay(value);
      return;
    }

    const startTime = Date.now();
    const durationMs = duration * 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (target >= 1000) {
        setDisplay(Math.round(current).toLocaleString());
      } else if (target >= 1) {
        setDisplay(current.toFixed(2));
      } else {
        setDisplay(current.toFixed(4));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplay(value);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {prefix}{display}{suffix}
    </motion.span>
  );
}
