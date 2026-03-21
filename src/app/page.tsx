"use client";

import FadeIn from "@/components/FadeIn";
import WaitlistForm from "@/components/WaitlistForm";
import HeroBlobs from "@/components/HeroBlobs";
import FloatingParticles from "@/components/FloatingParticles";
import GlowCard from "@/components/GlowCard";
import AnimatedCounter from "@/components/AnimatedCounter";
import AnimatedWaterfall from "@/components/AnimatedWaterfall";
import TokenDistributionChart from "@/components/TokenDistributionChart";
import SectionDivider from "@/components/SectionDivider";
import { CONTRACTS, BASESCAN_URL, TIERS, PHASES, LOCK_BONUSES } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";

const stats = [
  { label: "Total Staked", value: "—", prefix: "" },
  { label: "Weekly USDC Distributed", value: "—", prefix: "$" },
  { label: "Holders", value: "—", prefix: "" },
  { label: "Token Price", value: "—", prefix: "$" },
];

const competitors = [
  { name: "Vertical AI", share: "20%", freq: "Monthly", acq: false, wind: false },
  { name: "Magic Eden", share: "15%", freq: "Monthly", acq: false, wind: false },
  { name: "PAAL AI", share: "~5%", freq: "Buyback", acq: false, wind: false },
  { name: "$BEOMZ", share: "75%", freq: "Weekly", acq: true, wind: true },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-grid relative">
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center" style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%)" }}>
        <HeroBlobs />
        <FloatingParticles count={40} />

        {/* Radial orange glow behind heading */}
        <div className="absolute inset-0 pointer-events-none z-10" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(249,115,22,0.08) 0%, transparent 60%)" }} />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-20 w-full">
          <FadeIn>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-balance leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Own a piece of everything{" "}
              <span className="text-[#F97316]">
                Beomz builds.
              </span>
            </motion.h1>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="text-lg md:text-xl text-gray-400 text-center mt-6 max-w-3xl mx-auto text-balance leading-relaxed">
              75% of all revenue from both products flows to $BEOMZ stakers.
              <br className="hidden sm:block" />
              Weekly. In USDC. On-chain. Automatically.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <motion.a
                href="#waitlist"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-8 py-3.5 rounded-xl text-lg transition-colors btn-glow"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Buy $BEOMZ
              </motion.a>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/whitepaper"
                  className="border border-[#333] hover:border-[#F97316]/30 text-white font-semibold px-8 py-3.5 rounded-xl text-lg transition-all duration-300 block"
                >
                  Read Whitepaper
                </Link>
              </motion.div>
            </div>
          </FadeIn>

          {/* Stat cards */}
          <FadeIn delay={0.35}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {stats.map((s) => (
                <GlowCard key={s.label} className="p-6 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white">
                    <AnimatedCounter value={s.value} prefix={s.prefix} />
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                </GlowCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* ==================== COMPETITIVE COMPARISON ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <FloatingParticles count={15} />
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center relative z-10">
            The most generous revenue share in AI crypto.{" "}
            <span className="text-[#F97316]">
              By far.
            </span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-12 overflow-x-auto relative z-10">
            <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl overflow-hidden backdrop-blur-sm">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="text-left py-4 px-6 text-sm text-gray-500 font-medium">Project</th>
                    <th className="text-left py-4 px-6 text-sm text-gray-500 font-medium">Revenue Share</th>
                    <th className="text-left py-4 px-6 text-sm text-gray-500 font-medium">Frequency</th>
                    <th className="text-left py-4 px-6 text-sm text-gray-500 font-medium">Acq. Protection</th>
                    <th className="text-left py-4 px-6 text-sm text-gray-500 font-medium">Wind-Down Protection</th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((c, i) => (
                    <motion.tr
                      key={c.name}
                      className={`border-b border-white/[0.08] last:border-0 ${c.name === "$BEOMZ" ? "bg-[#F97316]/5" : "hover:bg-white/[0.02]"}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <td className={`py-4 px-6 font-semibold ${c.name === "$BEOMZ" ? "text-[#F97316]" : "text-white"}`}>
                        {c.name}
                      </td>
                      <td className={`py-4 px-6 ${c.name === "$BEOMZ" ? "text-[#F97316] font-bold text-xl" : "text-gray-300"}`}>
                        {c.share}
                      </td>
                      <td className="py-4 px-6 text-gray-300">{c.freq}</td>
                      <td className="py-4 px-6">
                        {c.acq ? (
                          <span className="inline-flex items-center gap-1.5 text-green-400 text-sm">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            On-chain
                          </span>
                        ) : (
                          <span className="text-red-400/60 text-sm">None</span>
                        )}
                      </td>
                      <td className="py-4 px-6">
                        {c.wind ? (
                          <span className="inline-flex items-center gap-1.5 text-green-400 text-sm">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            Stakers first
                          </span>
                        ) : (
                          <span className="text-red-400/60 text-sm">None</span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/3 to-transparent" />
            <p className="text-gray-400 text-sm leading-relaxed relative z-10">
              This is not a marketing promise. It is code on Basescan.
              Anyone can verify every distribution, every protection, every clause.
            </p>
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* ==================== PRODUCTS ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Two Products. One Token.</h2>
          <p className="text-gray-500 text-center mb-12 text-sm">Both generating revenue that flows to you.</p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn delay={0.1}>
            <motion.a
              href="https://beomz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 relative overflow-hidden group"
              whileHover={{ y: -4, borderColor: "rgba(249,115,22,0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#F97316]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-4 border border-[#F97316]/20">
                  <div className="w-5 h-5 rounded bg-[#F97316]" />
                </div>
                <h3 className="text-xl font-bold text-[#F97316]">Beomz Build</h3>
                <p className="text-gray-400 mt-2">AI App Builder</p>
                <p className="text-sm text-gray-600 mt-4 group-hover:text-[#F97316]/60 transition-colors">beomz.com &rarr;</p>
              </div>
            </motion.a>
          </FadeIn>
          <FadeIn delay={0.2}>
            <motion.a
              href="https://crypto.beomz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 relative overflow-hidden group"
              whileHover={{ y: -4, borderColor: "rgba(249,115,22,0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#F97316]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-4 border border-[#F97316]/20">
                  <div className="w-5 h-5 rounded bg-[#F97316]" />
                </div>
                <h3 className="text-xl font-bold text-[#F97316]">Beomz Crypto</h3>
                <p className="text-gray-400 mt-2">AI Crypto Companion</p>
                <p className="text-sm text-gray-600 mt-4 group-hover:text-[#F97316]/60 transition-colors">crypto.beomz.com &rarr;</p>
              </div>
            </motion.a>
          </FadeIn>
        </div>
        <FadeIn delay={0.3}>
          <p className="text-center text-gray-500 mt-8 text-sm">
            Both products. One token. 75% of all revenue shared with holders.
          </p>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* ==================== REVENUE WATERFALL ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How Revenue Flows</h2>
          <p className="text-gray-500 text-center mb-12 text-sm">Fully automated. Fully transparent. On-chain.</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <AnimatedWaterfall />
        </FadeIn>
      </section>

      <SectionDivider />

      {/* ==================== PHASED THRESHOLDS ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Early stakers benefit from Phase 1 distributions.
          </h2>
          <p className="text-gray-400 text-center mt-4 max-w-xl mx-auto">
            Distributions start the moment monthly revenue exceeds $1,000
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {PHASES.map((p, i) => (
              <GlowCard key={p.phase} className="p-6 text-center" glowColor="amber">
                <p className="text-sm text-gray-500">Phase {p.phase}</p>
                <motion.p
                  className="text-2xl font-bold text-white mt-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                >
                  {p.threshold}
                </motion.p>
                <p className="text-xs text-gray-600 mt-2">Days {p.days}</p>
                {i === 0 && (
                  <span className="inline-block mt-3 text-xs bg-[#F97316]/10 text-[#F97316] px-2 py-0.5 rounded-full">
                    Active now
                  </span>
                )}
              </GlowCard>
            ))}
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* ==================== TIER TABLE ==================== */}
      <section id="tokenomics-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Holder Tiers</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-4 gap-4">
            {TIERS.map((tier) => (
              <GlowCard
                key={tier.name}
                className="p-6"
                glowColor="amber"
              >
                <div className="text-center mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${tier.color}15`, border: `1px solid ${tier.color}30` }}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <span className="font-bold text-sm" style={{ color: tier.color }}>
                      {tier.name[0]}
                    </span>
                  </motion.div>
                  <h3 className="font-bold text-lg" style={{ color: tier.color }}>{tier.name}</h3>
                  <p className="text-2xl font-bold text-white mt-1">{tier.tokens}</p>
                  <p className="text-xs text-gray-600">$BEOMZ required</p>
                </div>

                <div className="space-y-3 border-t border-white/[0.08] pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Build</span>
                    <span className="text-gray-300">{tier.buildDiscount} off</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Crypto</span>
                    <span className={tier.cryptoDiscount === "FREE" ? "text-green-400 font-semibold" : "text-gray-300"}>
                      {tier.cryptoDiscount === "FREE" ? "FREE" : `${tier.cryptoDiscount} off`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">APY</span>
                    <span className="text-white font-semibold">
                      {tier.apy}
                      {tier.apyNote && <span className="text-gray-500 text-xs ml-1">{tier.apyNote}</span>}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Affiliate</span>
                    <span className="text-gray-300">{tier.affiliate}</span>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* ==================== AFFILIATE COMMISSIONS ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Refer friends. Earn USDC monthly.
          </h2>
          <p className="text-gray-400 text-center mt-4 max-w-xl mx-auto">
            Every user you refer earns you a % of their subscription, paid in USDC.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {TIERS.map((tier, i) => (
              <GlowCard key={tier.name} className="p-6 text-center" glowColor="amber">
                <p className="text-sm font-semibold" style={{ color: tier.color }}>
                  {tier.name}
                </p>
                <motion.p
                  className="text-3xl font-bold text-white mt-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                >
                  {tier.affiliate}
                </motion.p>
                <p className="text-xs text-gray-600 mt-1">of referral revenue</p>
              </GlowCard>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 max-w-2xl mx-auto backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/3 to-transparent" />
            <p className="text-sm text-gray-400 relative z-10">
              <span className="text-white font-semibold">Example:</span> A Whale with 10 referrals on Pro ($49/mo) earns{" "}
              <span className="text-[#F97316] font-semibold">$73.50/month</span> in affiliate USDC — on top of staking APY
              and revenue share.
            </p>
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* ==================== ACQUISITION PROTECTION ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center max-w-3xl mx-auto">
            We cannot sell out from under you. It is in the contract.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: "14-Day Public Notice",
                desc: "On-chain notice before any acquisition can proceed. No backroom deals.",
                color: "amber" as const,
                iconColor: "#F97316",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                ),
                title: "Sentinel+ Voting",
                desc: "Sentinel and above holders vote on any acquisition or wind-down.",
                color: "amber" as const,
                iconColor: "#F97316",
              },
              {
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                ),
                title: "Stakers First",
                desc: "100% of treasury USDC goes to stakers before founder in any wind-down.",
                color: "green" as const,
                iconColor: "#22C55E",
              },
            ].map((item) => (
              <GlowCard key={item.title} className="p-6" glowColor={item.color}>
                <motion.div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.iconColor}15`, border: `1px solid ${item.iconColor}25` }}
                  whileHover={{ rotate: 10 }}
                >
                  <svg className="w-5 h-5" style={{ color: item.iconColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {item.icon}
                  </svg>
                </motion.div>
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
              </GlowCard>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 max-w-2xl mx-auto backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/3 to-transparent" />
            <p className="text-gray-400 text-sm relative z-10">
              No other AI token has these protections. Check our contract. Then check theirs.
            </p>
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* ==================== STAKING APY ==================== */}
      <section id="staking-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Staking APY + Lock Bonuses</h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto">
            Lock your tokens longer for higher yields.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {LOCK_BONUSES.map((lb, i) => (
              <GlowCard key={lb.period} className="p-6 text-center">
                <p className="text-sm text-gray-500">{lb.period}</p>
                <motion.p
                  className="text-3xl font-bold text-[#F97316] mt-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                >
                  {lb.bonus}
                </motion.p>
                <p className="text-xs text-gray-600 mt-1">APY bonus</p>
              </GlowCard>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="text-center mt-8">
            <motion.div className="inline-block" whileHover={{ x: 5 }}>
              <Link
                href="/staking"
                className="text-[#F97316] hover:text-[#EA580C] font-semibold text-sm transition-colors inline-flex items-center gap-1"
              >
                See full staking guide + APY calculator
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* ==================== TOKEN DISTRIBUTION ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Token Distribution</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto bg-white/[0.04] border border-white/[0.08] rounded-2xl p-8 backdrop-blur-sm">
            <TokenDistributionChart />
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Total supply: 500,000,000 $BEOMZ (hard cap, no additional minting)
          </p>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* ==================== CONTRACT ADDRESSES ==================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Verified Contracts</h2>
          <p className="text-gray-500 text-center text-sm mb-12">
            Base Sepolia Testnet — Mainnet addresses coming April 15
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="max-w-2xl mx-auto space-y-3">
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

      <SectionDivider />

      {/* ==================== ROADMAP PREVIEW ==================== */}
      <section id="roadmap-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Roadmap</h2>
          <p className="text-center mt-2">
            <motion.div className="inline-block" whileHover={{ x: 5 }}>
              <Link href="/roadmap" className="text-[#F97316] hover:text-[#EA580C] font-semibold text-sm transition-colors inline-flex items-center gap-1">
                View full roadmap
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </p>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* ==================== WAITLIST ==================== */}
      <section id="waitlist" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <FloatingParticles count={20} />
        <FadeIn>
          <div className="bg-gradient-to-br from-[#F97316]/5 via-white/[0.04] to-[#EA580C]/5 border border-white/[0.08] rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#F97316]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#F97316]/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <motion.h2
                className="text-3xl md:text-4xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Get notified when{" "}
                <span className="text-[#F97316]">
                  $BEOMZ
                </span>{" "}
                launches
              </motion.h2>
              <p className="text-gray-400 mt-2 mb-8">May 1, 2026</p>
              <WaitlistForm />
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
