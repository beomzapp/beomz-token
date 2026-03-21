"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DISTRIBUTION } from "@/lib/constants";

const COLORS = ["#F97316", "#EA580C", "#FB923C", "#FDBA74", "#FED7AA"];

export default function TokenDistributionChart() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const total = DISTRIBUTION.reduce((sum, d) => sum + d.pct, 0);
  let cumulativePercent = 0;

  const segments = DISTRIBUTION.map((d, i) => {
    const startPct = cumulativePercent;
    cumulativePercent += d.pct;
    const startAngle = (startPct / total) * 360;
    const endAngle = (cumulativePercent / total) * 360;
    return { ...d, startAngle, endAngle, color: COLORS[i] };
  });

  const radius = 80;
  const center = 100;
  const innerRadius = 50;

  const describeDonutSegment = (start: number, end: number) => {
    const startRad = ((start - 90) * Math.PI) / 180;
    const endRad = ((end - 90) * Math.PI) / 180;
    const x1 = center + radius * Math.cos(startRad);
    const y1 = center + radius * Math.sin(startRad);
    const x2 = center + radius * Math.cos(endRad);
    const y2 = center + radius * Math.sin(endRad);
    const x3 = center + innerRadius * Math.cos(endRad);
    const y3 = center + innerRadius * Math.sin(endRad);
    const x4 = center + innerRadius * Math.cos(startRad);
    const y4 = center + innerRadius * Math.sin(startRad);
    const largeArc = end - start > 180 ? 1 : 0;
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`;
  };

  return (
    <div ref={ref} className="flex flex-col md:flex-row items-center gap-8">
      {/* Donut chart */}
      <div className="relative shrink-0">
        <svg width="200" height="200" viewBox="0 0 200 200">
          {segments.map((seg, i) => (
            <motion.path
              key={seg.label}
              d={describeDonutSegment(seg.startAngle, seg.endAngle)}
              fill={seg.color}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            />
          ))}
          {/* Center text */}
          <text
            x={center}
            y={center - 5}
            textAnchor="middle"
            fill="white"
            fontSize="14"
            fontWeight="bold"
          >
            500M
          </text>
          <text
            x={center}
            y={center + 12}
            textAnchor="middle"
            fill="#666"
            fontSize="10"
          >
            Total Supply
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div className="space-y-3 flex-1">
        {segments.map((seg, i) => (
          <motion.div
            key={seg.label}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
          >
            <div
              className="w-3 h-3 rounded-sm shrink-0"
              style={{ backgroundColor: seg.color }}
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <span className="text-sm text-white font-medium">{seg.label}</span>
                <span className="text-sm text-gray-400 font-semibold">{seg.pct}%</span>
              </div>
              <p className="text-xs text-gray-600">{seg.amount} &mdash; {seg.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
