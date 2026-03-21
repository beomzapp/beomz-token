"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import GlowCard from "@/components/GlowCard";
import HeroBlobs from "@/components/HeroBlobs";
import SectionDivider from "@/components/SectionDivider";
import { TIERS, LOCK_BONUSES } from "@/lib/constants";
import { motion } from "framer-motion";

const steps = [
  {
    step: 1,
    title: "Buy $BEOMZ",
    desc: "Purchase $BEOMZ on Aerodrome DEX (or in-app on Beomz Crypto).",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    step: 2,
    title: "Connect Wallet",
    desc: "Go to Beomz Crypto app and connect your wallet.",
    icon: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  },
  {
    step: 3,
    title: "Navigate to Stake",
    desc: "Enter the amount you want to stake and choose your lock period.",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    step: 4,
    title: "Confirm Transaction",
    desc: "Confirm the transaction in your wallet. Your tier is assigned automatically based on your stake.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    step: 5,
    title: "Earn Rewards",
    desc: "Earn APY plus USDC distributions weekly. Rewards compound over time.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
];

function APYCalculator() {
  const [amount, setAmount] = useState(5000);
  const [lockDays, setLockDays] = useState(0);

  const getTier = (a: number) => {
    if (a >= 100000) return TIERS[3];
    if (a >= 20000) return TIERS[2];
    if (a >= 5000) return TIERS[1];
    if (a >= 1000) return TIERS[0];
    return null;
  };

  const getLockBonus = (days: number) => {
    if (days >= 180) return 35;
    if (days >= 90) return 20;
    if (days >= 30) return 10;
    return 0;
  };

  const tier = getTier(amount);
  const baseApy = tier ? parseFloat(tier.apy) : 0;
  const lockBonus = getLockBonus(lockDays);
  const totalApy = baseApy + lockBonus;

  const revenueScenarios = [5000, 10000, 25000, 50000];
  const totalStakedAssumption = 50_000_000;

  return (
    <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#F97316]/3 rounded-full blur-3xl pointer-events-none" />

      <h3 className="text-lg font-semibold text-white mb-6 relative z-10">APY Calculator</h3>

      <div className="grid md:grid-cols-2 gap-6 relative z-10">
        <div>
          <label className="text-sm text-gray-400 block mb-3">
            $BEOMZ to stake: <span className="text-[#F97316] font-semibold">{amount.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min={0}
            max={200000}
            step={1000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full accent-[#F97316] h-2 rounded-full"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>0</span>
            <span>200,000</span>
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-400 block mb-3">Lock Period</label>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "None", days: 0 },
              { label: "30d", days: 30 },
              { label: "90d", days: 90 },
              { label: "180d", days: 180 },
            ].map((opt) => (
              <motion.button
                key={opt.days}
                onClick={() => setLockDays(opt.days)}
                className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  lockDays === opt.days
                    ? "bg-[#F97316] text-white btn-glow"
                    : "bg-[#0a0a0a] border border-[#333] text-gray-400 hover:border-[#555]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {opt.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 grid grid-cols-3 gap-4 relative z-10">
        <GlowCard className="p-4 text-center" glowColor="amber">
          <p className="text-xs text-gray-500">Tier</p>
          <p className="text-lg font-bold" style={{ color: tier?.color || "#666" }}>
            {tier?.name || "Below min"}
          </p>
        </GlowCard>
        <GlowCard className="p-4 text-center">
          <p className="text-xs text-gray-500">Base APY</p>
          <p className="text-lg font-bold text-white">{baseApy}%</p>
        </GlowCard>
        <GlowCard className="p-4 text-center" glowColor="amber">
          <p className="text-xs text-gray-500">Total APY</p>
          <motion.p
            className="text-lg font-bold text-[#F97316]"
            key={totalApy}
            initial={{ scale: 1.3 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
          >
            {totalApy}%
          </motion.p>
        </GlowCard>
      </div>

      {/* USDC estimates */}
      {tier && (
        <motion.div
          className="mt-8 relative z-10"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm text-gray-500 mb-4">
            Estimated monthly USDC from revenue share (assuming 50M staked total):
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {revenueScenarios.map((rev) => {
              const stakerShare = rev * 0.5;
              const userShare = (amount / totalStakedAssumption) * stakerShare;
              return (
                <GlowCard key={rev} className="p-4 text-center" glowColor="green">
                  <p className="text-xs text-gray-500">${(rev / 1000).toFixed(0)}K/mo revenue</p>
                  <p className="text-lg font-bold text-green-400 mt-1">
                    ${userShare.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-600">per month</p>
                </GlowCard>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default function StakingPage() {
  return (
    <div className="min-h-screen bg-grid">
      {/* Header */}
      <section className="relative overflow-hidden">
        <HeroBlobs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              <span className="text-[#F97316]">
                How to Stake
              </span>
            </h1>
            <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
              Stake $BEOMZ to earn APY and weekly USDC distributions from platform revenue.
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Step by Step</h2>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlowCard className="p-6 flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-[#F97316] flex items-center justify-center shrink-0"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                    </svg>
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-white">{s.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{s.desc}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* APY Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">APY Calculator</h2>
          <APYCalculator />
        </FadeIn>
      </section>

      <SectionDivider />

      {/* Lock Bonuses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Lock Period Bonuses</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
      </section>

      <SectionDivider />

      {/* Tier APY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Base APY by Tier</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                  {tier.apy}
                </motion.p>
                {tier.apyNote && <p className="text-xs text-gray-500 mt-1">{tier.apyNote}</p>}
                <p className="text-xs text-gray-600 mt-2">{tier.tokens} $BEOMZ</p>
              </GlowCard>
            ))}
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* Anti-Sniping */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Anti-Sniping Protection</h2>
          <GlowCard className="p-6" glowColor="amber">
            <div className="space-y-4">
              {[
                { text: "Tokens must be staked ", bold: "30+ days", after: " before qualifying for USDC distributions." },
                { text: "A snapshot is taken ", bold: "7 days before", after: " distribution day." },
                { text: "You must ", bold: "still be staking at claim time", after: "." },
                { text: "No buy-and-dump. Only genuine long-term holders get paid.", bold: "", after: "" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#F97316] mt-2 shrink-0"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                  />
                  <p className="text-gray-400 text-sm">
                    {item.text}
                    {item.bold && <span className="text-white font-semibold">{item.bold}</span>}
                    {item.after}
                  </p>
                </motion.div>
              ))}
            </div>
          </GlowCard>
        </FadeIn>
      </section>
    </div>
  );
}
