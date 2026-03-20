"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { TIERS, LOCK_BONUSES } from "@/lib/constants";

const steps = [
  {
    step: 1,
    title: "Buy $BEOMZ",
    desc: "Purchase $BEOMZ on Aerodrome DEX (or in-app on Beomz Crypto).",
  },
  {
    step: 2,
    title: "Connect Wallet",
    desc: "Go to Beomz Crypto app and connect your wallet.",
  },
  {
    step: 3,
    title: "Navigate to Stake",
    desc: "Enter the amount you want to stake and choose your lock period.",
  },
  {
    step: 4,
    title: "Confirm Transaction",
    desc: "Confirm the transaction in your wallet. Your tier is assigned automatically based on your stake.",
  },
  {
    step: 5,
    title: "Earn Rewards",
    desc: "Earn APY plus USDC distributions weekly. Rewards compound over time.",
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
    <div className="bg-[#111] border border-[#222] rounded-2xl p-6 md:p-8">
      <h3 className="text-lg font-semibold text-white mb-6">APY Calculator</h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="text-sm text-gray-400 block mb-2">
            $BEOMZ to stake: <span className="text-white font-semibold">{amount.toLocaleString()}</span>
          </label>
          <input
            type="range"
            min={0}
            max={200000}
            step={1000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full accent-[#F97316]"
          />
          <div className="flex justify-between text-xs text-gray-600 mt-1">
            <span>0</span>
            <span>200,000</span>
          </div>
        </div>

        <div>
          <label className="text-sm text-gray-400 block mb-2">Lock Period</label>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "None", days: 0 },
              { label: "30d", days: 30 },
              { label: "90d", days: 90 },
              { label: "180d", days: 180 },
            ].map((opt) => (
              <button
                key={opt.days}
                onClick={() => setLockDays(opt.days)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  lockDays === opt.days
                    ? "bg-[#F97316] text-black"
                    : "bg-[#0a0a0a] border border-[#333] text-gray-400 hover:border-[#555]"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="text-center">
          <p className="text-sm text-gray-500">Tier</p>
          <p className="text-lg font-bold" style={{ color: tier?.color || "#666" }}>
            {tier?.name || "Below minimum"}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Base APY</p>
          <p className="text-lg font-bold text-white">{baseApy}%</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500">Total APY</p>
          <p className="text-lg font-bold text-[#F97316]">{totalApy}%</p>
        </div>
      </div>

      {/* USDC estimates */}
      {tier && (
        <div className="mt-8">
          <p className="text-sm text-gray-500 mb-4">
            Estimated monthly USDC from revenue share (assuming 50M staked total):
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {revenueScenarios.map((rev) => {
              const stakerShare = rev * 0.5;
              const userShare = (amount / totalStakedAssumption) * stakerShare;
              return (
                <div key={rev} className="bg-[#0a0a0a] border border-[#222] rounded-xl p-4 text-center">
                  <p className="text-xs text-gray-500">${(rev / 1000).toFixed(0)}K/mo revenue</p>
                  <p className="text-lg font-bold text-green-400 mt-1">
                    ${userShare.toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-600">per month</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default function StakingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            <span className="bg-gradient-to-r from-[#F97316] to-[#534AB7] bg-clip-text text-transparent">
              How to Stake
            </span>
          </h1>
          <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
            Stake $BEOMZ to earn APY and weekly USDC distributions from platform revenue.
          </p>
        </FadeIn>
      </section>

      {/* Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Step by Step</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="bg-[#111] border border-[#222] rounded-2xl p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F97316] to-[#534AB7] flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{s.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* APY Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">APY Calculator</h2>
          <APYCalculator />
        </FadeIn>
      </section>

      {/* Lock Bonuses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Lock Period Bonuses</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {LOCK_BONUSES.map((lb) => (
              <div key={lb.period} className="bg-[#111] border border-[#222] rounded-2xl p-6 text-center">
                <p className="text-sm text-gray-500">{lb.period}</p>
                <p className="text-3xl font-bold text-[#F97316] mt-2">{lb.bonus}</p>
                <p className="text-xs text-gray-600 mt-1">APY bonus</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Tier APY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Base APY by Tier</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TIERS.map((tier) => (
              <div key={tier.name} className="bg-[#111] border border-[#222] rounded-2xl p-6 text-center">
                <p className="text-sm font-semibold" style={{ color: tier.color }}>
                  {tier.name}
                </p>
                <p className="text-3xl font-bold text-white mt-2">{tier.apy}</p>
                {tier.apyNote && <p className="text-xs text-gray-500 mt-1">{tier.apyNote}</p>}
                <p className="text-xs text-gray-600 mt-2">{tier.tokens} $BEOMZ</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Anti-Sniping */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Anti-Sniping Protection</h2>
          <div className="bg-[#111] border border-[#222] rounded-2xl p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#F97316] mt-2 shrink-0" />
              <p className="text-gray-400 text-sm">
                Tokens must be staked <span className="text-white font-semibold">30+ days</span> before qualifying for USDC distributions.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#F97316] mt-2 shrink-0" />
              <p className="text-gray-400 text-sm">
                A snapshot is taken <span className="text-white font-semibold">7 days before</span> distribution day.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#F97316] mt-2 shrink-0" />
              <p className="text-gray-400 text-sm">
                You must <span className="text-white font-semibold">still be staking at claim time</span>.
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-[#F97316] mt-2 shrink-0" />
              <p className="text-gray-400 text-sm">
                No buy-and-dump. Only genuine long-term holders get paid.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
