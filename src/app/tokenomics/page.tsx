"use client";

import FadeIn from "@/components/FadeIn";
import GlowCard from "@/components/GlowCard";
import HeroBlobs from "@/components/HeroBlobs";
import SectionDivider from "@/components/SectionDivider";
import TokenDistributionChart from "@/components/TokenDistributionChart";
import { CONTRACTS, BASESCAN_URL } from "@/lib/constants";
import { motion } from "framer-motion";

const tokenSpecs = [
  { label: "Ticker", value: "$BEOMZ" },
  { label: "Network", value: "Base (Ethereum L2)" },
  { label: "Total Supply", value: "500,000,000" },
  { label: "Supply Type", value: "Hard cap — no additional minting" },
  { label: "Launch", value: "May 1, 2026" },
  { label: "Launch Type", value: "Fair launch — no presale, no VC allocation" },
];

const timeTranches = [
  { milestone: "Month 3", amount: "5M" },
  { milestone: "Month 6", amount: "5M" },
  { milestone: "Month 9", amount: "5M" },
  { milestone: "Month 12", amount: "5M" },
  { milestone: "Month 18", amount: "5M" },
];

const milestoneTranches = [
  { milestone: "Product live", amount: "5M" },
  { milestone: "$10K MRR", amount: "10M" },
  { milestone: "First distribution", amount: "5M" },
  { milestone: "$50K MRR", amount: "10M" },
  { milestone: "$100K MRR", amount: "10M" },
];

export default function TokenomicsPage() {
  return (
    <div className="min-h-screen bg-grid">
      {/* Header */}
      <section className="relative overflow-hidden">
        <HeroBlobs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              <span className="text-[#F97316]">
                Tokenomics
              </span>
            </h1>
            <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
              Everything you need to know about $BEOMZ token economics, distribution, and vesting.
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Token Specs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Token Specifications</h2>
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden backdrop-blur-sm">
            {tokenSpecs.map((spec, i) => (
              <motion.div
                key={spec.label}
                className={`flex justify-between items-center px-6 py-4 ${i < tokenSpecs.length - 1 ? "border-b border-white/[0.08]" : ""} hover:bg-white/[0.02] transition-colors`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="text-gray-400 text-sm">{spec.label}</span>
                <span className="text-white font-semibold text-sm">{spec.value}</span>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* Distribution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Token Distribution</h2>
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 backdrop-blur-sm">
            <TokenDistributionChart />
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* Vesting Schedule */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-4">Founder Vesting Schedule</h2>
          <p className="text-gray-400 text-sm mb-8">
            100M tokens vested over 4 years with a 1-year cliff. Broken into time-based, milestone-based, and linear tranches.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <GlowCard className="p-6" glowColor="amber">
              <h3 className="text-lg font-semibold text-[#F97316] mb-4">Time-Based Tranches</h3>
              <div className="space-y-3">
                {timeTranches.map((t, i) => (
                  <motion.div
                    key={t.milestone}
                    className="flex justify-between items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <span className="text-gray-400 text-sm">{t.milestone}</span>
                    <span className="text-white font-semibold text-sm">{t.amount} $BEOMZ</span>
                  </motion.div>
                ))}
              </div>
              <div className="border-t border-white/[0.08] mt-4 pt-4 flex justify-between">
                <span className="text-gray-500 text-sm">Total</span>
                <span className="text-white font-bold">25M $BEOMZ</span>
              </div>
            </GlowCard>

            <GlowCard className="p-6" glowColor="amber">
              <h3 className="text-lg font-semibold text-[#F97316] mb-4">Milestone-Based Tranches</h3>
              <div className="space-y-3">
                {milestoneTranches.map((t, i) => (
                  <motion.div
                    key={t.milestone}
                    className="flex justify-between items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <span className="text-gray-400 text-sm">{t.milestone}</span>
                    <span className="text-white font-semibold text-sm">{t.amount} $BEOMZ</span>
                  </motion.div>
                ))}
              </div>
              <div className="border-t border-white/[0.08] mt-4 pt-4 flex justify-between">
                <span className="text-gray-500 text-sm">Total</span>
                <span className="text-white font-bold">40M $BEOMZ</span>
              </div>
            </GlowCard>
          </div>

          <GlowCard className="p-6 mt-6">
            <h3 className="text-lg font-semibold text-white mb-2">Linear Vesting</h3>
            <p className="text-gray-400 text-sm">
              35M $BEOMZ vested linearly over months 13 through 48. Approximately 972K tokens released per month.
            </p>
            <div className="mt-4 h-3 bg-[#0a0a0a] rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-[#F97316]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-gray-600">
              <span>Month 13</span>
              <span>Month 48</span>
            </div>
          </GlowCard>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* Burn Mechanism */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Buyback + Burn Mechanism</h2>
          <GlowCard className="p-6" glowColor="amber">
            <div className="space-y-4">
              {[
                "25% of all revenue that exceeds the treasury threshold is allocated to buyback and burn.",
                "$BEOMZ tokens are bought on Aerodrome DEX at market price.",
                "Purchased tokens are sent to a burn address — removed from circulation forever.",
                "This creates continuous deflationary pressure, increasing the value of remaining tokens over time.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#F97316] text-sm font-bold">{i + 1}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{text}</p>
                </motion.div>
              ))}
            </div>
          </GlowCard>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* Contract Addresses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-4">Contract Addresses</h2>
          <p className="text-gray-500 text-sm mb-8">Base Sepolia Testnet — Mainnet addresses coming April 15</p>
          <div className="space-y-3">
            {Object.entries(CONTRACTS).map(([name, addr], i) => (
              <motion.a
                key={name}
                href={`${BASESCAN_URL}/${addr}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white/[0.04] border border-white/[0.08] rounded-2xl p-4 hover:border-[#333] transition-all duration-300 group relative overflow-hidden"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-semibold text-white relative z-10">{name}</span>
                <span className="text-xs text-gray-500 font-mono group-hover:text-gray-300 transition-colors truncate ml-4 relative z-10">
                  {addr}
                </span>
              </motion.a>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
