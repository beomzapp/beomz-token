"use client";

import FadeIn from "@/components/FadeIn";
import GlowCard from "@/components/GlowCard";
import HeroBlobs from "@/components/HeroBlobs";
import SectionDivider from "@/components/SectionDivider";
import { TIERS, DISTRIBUTION, PHASES } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen bg-grid">
      {/* Header */}
      <section className="relative overflow-hidden">
        <HeroBlobs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              <span className="text-[#F97316]">
                Whitepaper
              </span>
            </h1>
            <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
              The complete technical and economic specification for the $BEOMZ token.
            </p>
            <div className="flex justify-center mt-8">
              <motion.button
                className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors btn-glow"
                onClick={() => alert("PDF coming soon — full whitepaper will be available before launch.")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Download PDF
              </motion.button>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Executive Summary */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <GlowCard className="p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-4">Executive Summary</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              $BEOMZ is the utility and governance token for the Beomz ecosystem — two AI-powered SaaS products
              (Beomz Build and Beomz Crypto) that share 75% of all revenue with token stakers. Revenue is distributed
              weekly in USDC on-chain with full transparency. The token launches May 1, 2026 via fair launch on Base
              with no presale, no VC allocation, and a hard cap of 500 million tokens. On-chain protections ensure
              staker priority in any acquisition or wind-down scenario.
            </p>
          </GlowCard>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* Token Specs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <h2 className="text-xl font-bold text-white mb-6">Token Specifications</h2>
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden backdrop-blur-sm">
            {[
              ["Ticker", "$BEOMZ"],
              ["Network", "Base (Ethereum L2)"],
              ["Total Supply", "500,000,000 (hard cap)"],
              ["Launch Type", "Fair launch — no presale, no VC"],
              ["Launch Date", "May 1, 2026"],
            ].map(([k, v], i, arr) => (
              <motion.div
                key={k}
                className={`flex justify-between px-6 py-4 ${i < arr.length - 1 ? "border-b border-white/[0.08]" : ""} hover:bg-white/[0.02] transition-colors`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="text-gray-400 text-sm">{k}</span>
                <span className="text-white font-semibold text-sm">{v}</span>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* Tier Table */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <h2 className="text-xl font-bold text-white mb-6">Holder Tiers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TIERS.map((t) => (
              <GlowCard key={t.name} className="p-5 text-center" glowColor="amber">
                <p className="text-sm font-bold" style={{ color: t.color }}>{t.name}</p>
                <p className="text-lg font-bold text-white mt-1">{t.tokens}</p>
                <p className="text-xs text-gray-600 mt-1">$BEOMZ required</p>
                <div className="border-t border-white/[0.08] mt-3 pt-3 space-y-1">
                  <p className="text-xs text-gray-400">APY: <span className="text-white font-semibold">{t.apy}</span></p>
                  <p className="text-xs text-gray-400">Affiliate: <span className="text-white font-semibold">{t.affiliate}</span></p>
                </div>
              </GlowCard>
            ))}
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* Revenue Model */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <h2 className="text-xl font-bold text-white mb-6">Revenue Model</h2>
          <div className="space-y-4">
            <GlowCard className="p-6">
              <h3 className="font-semibold text-white mb-4">Revenue Split</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { pct: "50%", label: "Stakers", sub: "USDC weekly", color: "#F97316" },
                  { pct: "25%", label: "Founder", sub: "USDC", color: "#fff" },
                  { pct: "25%", label: "Buyback + Burn", sub: "Aerodrome DEX", color: "#EA580C" },
                ].map((item, i) => (
                  <div key={item.label} className="text-center">
                    <motion.p
                      className="text-3xl font-bold"
                      style={{ color: item.color }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, type: "spring" }}
                    >
                      {item.pct}
                    </motion.p>
                    <p className="text-sm text-gray-400 mt-1">{item.label}</p>
                    <p className="text-xs text-gray-600">{item.sub}</p>
                  </div>
                ))}
              </div>
            </GlowCard>

            <GlowCard className="p-6">
              <h3 className="font-semibold text-white mb-4">Phased Thresholds</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {PHASES.map((p, i) => (
                  <motion.div
                    key={p.phase}
                    className="text-center"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <p className="text-xs text-gray-500">Phase {p.phase}</p>
                    <p className="text-lg font-bold text-white">{p.threshold}</p>
                    <p className="text-xs text-gray-600">Days {p.days}</p>
                  </motion.div>
                ))}
              </div>
            </GlowCard>
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* Distribution */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <h2 className="text-xl font-bold text-white mb-6">Token Distribution</h2>
          <GlowCard className="p-6">
            {DISTRIBUTION.map((d, i) => (
              <motion.div
                key={d.label}
                className={`flex justify-between items-center py-3 ${i < DISTRIBUTION.length - 1 ? "border-b border-white/[0.08]" : ""}`}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div>
                  <span className="text-white text-sm font-semibold">{d.label}</span>
                  <span className="text-gray-600 text-xs ml-2">({d.amount})</span>
                </div>
                <div className="text-right">
                  <span className="text-[#F97316] font-bold">{d.pct}%</span>
                  <p className="text-xs text-gray-500">{d.detail}</p>
                </div>
              </motion.div>
            ))}
          </GlowCard>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* Acquisition Protection */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <h2 className="text-xl font-bold text-white mb-6">Acquisition + Wind-Down Protection</h2>
          <GlowCard className="p-6" glowColor="green">
            <div className="space-y-4">
              {[
                "14-day public notice on-chain before any acquisition can proceed",
                "Sentinel+ holders vote on any acquisition or wind-down",
                "100% of treasury USDC goes to stakers before founder in any wind-down",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <motion.span
                    className="text-green-400 mt-0.5 text-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                  >
                    &#10003;
                  </motion.span>
                  <p className="text-gray-400 text-sm">{text}</p>
                </motion.div>
              ))}
            </div>
          </GlowCard>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* Roadmap link */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <FadeIn>
          <h2 className="text-xl font-bold text-white mb-6">Roadmap</h2>
          <p className="text-gray-400 text-sm mb-4">
            See the full development timeline from testnet deployment through public launch and beyond.
          </p>
          <motion.div className="inline-block" whileHover={{ x: 5 }}>
            <Link
              href="/roadmap"
              className="text-[#F97316] hover:text-[#EA580C] font-semibold text-sm transition-colors inline-flex items-center gap-1"
            >
              View full roadmap
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </FadeIn>
      </section>
    </div>
  );
}
