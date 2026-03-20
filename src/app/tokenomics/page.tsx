"use client";

import FadeIn from "@/components/FadeIn";
import { CONTRACTS, BASESCAN_URL, DISTRIBUTION } from "@/lib/constants";

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
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            <span className="bg-gradient-to-r from-[#F97316] to-[#534AB7] bg-clip-text text-transparent">
              Tokenomics
            </span>
          </h1>
          <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
            Everything you need to know about $BEOMZ token economics, distribution, and vesting.
          </p>
        </FadeIn>
      </section>

      {/* Token Specs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Token Specifications</h2>
          <div className="bg-[#111] border border-[#222] rounded-2xl overflow-hidden">
            {tokenSpecs.map((spec, i) => (
              <div
                key={spec.label}
                className={`flex justify-between items-center px-6 py-4 ${i < tokenSpecs.length - 1 ? "border-b border-[#222]" : ""}`}
              >
                <span className="text-gray-400 text-sm">{spec.label}</span>
                <span className="text-white font-semibold text-sm">{spec.value}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Distribution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Token Distribution</h2>
          <div className="space-y-4">
            {DISTRIBUTION.map((d) => (
              <div key={d.label} className="bg-[#111] border border-[#222] rounded-2xl p-6">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <span className="text-white font-semibold">{d.label}</span>
                    <span className="text-gray-500 text-sm ml-3">{d.amount} tokens</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#F97316] to-[#534AB7] bg-clip-text text-transparent">
                    {d.pct}%
                  </span>
                </div>
                <div className="h-3 bg-[#0a0a0a] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#F97316] to-[#534AB7]"
                    style={{ width: `${d.pct * 2.5}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">{d.detail}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Vesting Schedule */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Founder Vesting Schedule</h2>
          <p className="text-gray-400 text-sm mb-8">
            100M tokens vested over 4 years with a 1-year cliff. Broken into time-based, milestone-based, and linear tranches.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Time tranches */}
            <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#F97316] mb-4">Time-Based Tranches</h3>
              <div className="space-y-3">
                {timeTranches.map((t) => (
                  <div key={t.milestone} className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{t.milestone}</span>
                    <span className="text-white font-semibold text-sm">{t.amount} $BEOMZ</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#222] mt-4 pt-4 flex justify-between">
                <span className="text-gray-500 text-sm">Total</span>
                <span className="text-white font-bold">25M $BEOMZ</span>
              </div>
            </div>

            {/* Milestone tranches */}
            <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#534AB7] mb-4">Milestone-Based Tranches</h3>
              <div className="space-y-3">
                {milestoneTranches.map((t) => (
                  <div key={t.milestone} className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{t.milestone}</span>
                    <span className="text-white font-semibold text-sm">{t.amount} $BEOMZ</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[#222] mt-4 pt-4 flex justify-between">
                <span className="text-gray-500 text-sm">Total</span>
                <span className="text-white font-bold">40M $BEOMZ</span>
              </div>
            </div>
          </div>

          {/* Linear */}
          <div className="bg-[#111] border border-[#222] rounded-2xl p-6 mt-6">
            <h3 className="text-lg font-semibold text-white mb-2">Linear Vesting</h3>
            <p className="text-gray-400 text-sm">
              35M $BEOMZ vested linearly over months 13 through 48. Approximately 972K tokens released per month.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Burn Mechanism */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Buyback + Burn Mechanism</h2>
          <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#534AB7]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#534AB7] text-sm font-bold">1</span>
                </div>
                <p className="text-gray-400 text-sm">
                  25% of all revenue that exceeds the treasury threshold is allocated to buyback and burn.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#534AB7]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#534AB7] text-sm font-bold">2</span>
                </div>
                <p className="text-gray-400 text-sm">
                  $BEOMZ tokens are bought on Aerodrome DEX at market price.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#534AB7]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#534AB7] text-sm font-bold">3</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Purchased tokens are sent to a burn address — removed from circulation forever.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-[#534AB7]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#534AB7] text-sm font-bold">4</span>
                </div>
                <p className="text-gray-400 text-sm">
                  This creates continuous deflationary pressure, increasing the value of remaining tokens over time.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Contract Addresses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-4">Contract Addresses</h2>
          <p className="text-gray-500 text-sm mb-8">Base Sepolia Testnet — Mainnet addresses coming April 15</p>
          <div className="space-y-3">
            {Object.entries(CONTRACTS).map(([name, addr]) => (
              <a
                key={name}
                href={`${BASESCAN_URL}/${addr}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[#111] border border-[#222] rounded-2xl p-4 hover:border-[#333] transition-colors group"
              >
                <span className="text-sm font-semibold text-white">{name}</span>
                <span className="text-xs text-gray-500 font-mono group-hover:text-gray-300 transition-colors truncate ml-4">
                  {addr}
                </span>
              </a>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
