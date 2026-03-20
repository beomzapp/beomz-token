"use client";

import FadeIn from "@/components/FadeIn";
import { TIERS, DISTRIBUTION, PHASES } from "@/lib/constants";
import Link from "next/link";

export default function WhitepaperPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            <span className="bg-gradient-to-r from-[#F97316] to-[#534AB7] bg-clip-text text-transparent">
              Whitepaper
            </span>
          </h1>
          <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
            The complete technical and economic specification for the $BEOMZ token.
          </p>
          <div className="flex justify-center mt-8">
            <button
              className="bg-[#F97316] hover:bg-[#EA580C] text-black font-semibold px-8 py-3 rounded-lg transition-colors"
              onClick={() => alert("PDF coming soon — full whitepaper will be available before launch.")}
            >
              Download PDF
            </button>
          </div>
        </FadeIn>
      </section>

      {/* Executive Summary */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <div className="bg-[#111] border border-[#222] rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-white mb-4">Executive Summary</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              $BEOMZ is the utility and governance token for the Beomz ecosystem — two AI-powered SaaS products
              (Beomz Build and Beomz Crypto) that share 75% of all revenue with token stakers. Revenue is distributed
              weekly in USDC on-chain with full transparency. The token launches May 1, 2026 via fair launch on Base
              with no presale, no VC allocation, and a hard cap of 500 million tokens. On-chain protections ensure
              staker priority in any acquisition or wind-down scenario.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Token Specs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <h2 className="text-xl font-bold text-white mb-6">Token Specifications</h2>
          <div className="bg-[#111] border border-[#222] rounded-2xl overflow-hidden">
            {[
              ["Ticker", "$BEOMZ"],
              ["Network", "Base (Ethereum L2)"],
              ["Total Supply", "500,000,000 (hard cap)"],
              ["Launch Type", "Fair launch — no presale, no VC"],
              ["Launch Date", "May 1, 2026"],
            ].map(([k, v], i, arr) => (
              <div key={k} className={`flex justify-between px-6 py-4 ${i < arr.length - 1 ? "border-b border-[#222]" : ""}`}>
                <span className="text-gray-400 text-sm">{k}</span>
                <span className="text-white font-semibold text-sm">{v}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Tier Table */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <h2 className="text-xl font-bold text-white mb-6">Holder Tiers</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-[#222]">
                  <th className="text-left py-3 px-4 text-sm text-gray-500">Tier</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-500">Required</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-500">APY</th>
                  <th className="text-left py-3 px-4 text-sm text-gray-500">Affiliate</th>
                </tr>
              </thead>
              <tbody>
                {TIERS.map((t) => (
                  <tr key={t.name} className="border-b border-[#222]">
                    <td className="py-3 px-4 font-semibold" style={{ color: t.color }}>{t.name}</td>
                    <td className="py-3 px-4 text-gray-300 text-sm">{t.tokens}</td>
                    <td className="py-3 px-4 text-gray-300 text-sm">{t.apy}{t.apyNote ? ` ${t.apyNote}` : ""}</td>
                    <td className="py-3 px-4 text-gray-300 text-sm">{t.affiliate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </section>

      {/* Revenue Model */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <h2 className="text-xl font-bold text-white mb-6">Revenue Model</h2>
          <div className="space-y-4">
            <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-3">Revenue Split</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#F97316]">50%</p>
                  <p className="text-sm text-gray-400">Stakers (USDC weekly)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">25%</p>
                  <p className="text-sm text-gray-400">Founder (USDC)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#534AB7]">25%</p>
                  <p className="text-sm text-gray-400">Buyback + Burn</p>
                </div>
              </div>
            </div>

            <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
              <h3 className="font-semibold text-white mb-3">Phased Thresholds</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {PHASES.map((p) => (
                  <div key={p.phase} className="text-center">
                    <p className="text-xs text-gray-500">Phase {p.phase}</p>
                    <p className="text-lg font-bold text-white">{p.threshold}</p>
                    <p className="text-xs text-gray-600">Days {p.days}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Distribution */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <h2 className="text-xl font-bold text-white mb-6">Token Distribution</h2>
          <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
            {DISTRIBUTION.map((d, i) => (
              <div key={d.label} className={`flex justify-between items-center py-3 ${i < DISTRIBUTION.length - 1 ? "border-b border-[#1a1a1a]" : ""}`}>
                <div>
                  <span className="text-white text-sm font-semibold">{d.label}</span>
                  <span className="text-gray-600 text-xs ml-2">({d.amount})</span>
                </div>
                <div className="text-right">
                  <span className="text-[#F97316] font-bold">{d.pct}%</span>
                  <p className="text-xs text-gray-500">{d.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Acquisition Protection */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <h2 className="text-xl font-bold text-white mb-6">Acquisition + Wind-Down Protection</h2>
          <div className="bg-[#111] border border-[#222] rounded-2xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">&#10003;</span>
              <p className="text-gray-400 text-sm">14-day public notice on-chain before any acquisition can proceed</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">&#10003;</span>
              <p className="text-gray-400 text-sm">Sentinel+ holders vote on any acquisition or wind-down</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 mt-0.5">&#10003;</span>
              <p className="text-gray-400 text-sm">100% of treasury USDC goes to stakers before founder in any wind-down</p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Roadmap link */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <FadeIn>
          <h2 className="text-xl font-bold text-white mb-6">Roadmap</h2>
          <p className="text-gray-400 text-sm mb-4">
            See the full development timeline from testnet deployment through public launch and beyond.
          </p>
          <Link
            href="/roadmap"
            className="text-[#F97316] hover:text-[#EA580C] font-semibold text-sm transition-colors"
          >
            View full roadmap &rarr;
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
