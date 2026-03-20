"use client";

import FadeIn from "@/components/FadeIn";
import WaitlistForm from "@/components/WaitlistForm";
import { CONTRACTS, BASESCAN_URL, TIERS, DISTRIBUTION, PHASES, LOCK_BONUSES } from "@/lib/constants";
import Link from "next/link";

const stats = [
  { label: "Total Staked", value: "—" },
  { label: "Weekly USDC Distributed", value: "—" },
  { label: "Holders", value: "—" },
  { label: "Token Price", value: "—" },
];

const competitors = [
  { name: "Vertical AI", share: "20%", freq: "Monthly", acq: false, wind: false },
  { name: "Magic Eden", share: "15%", freq: "Monthly", acq: false, wind: false },
  { name: "PAAL AI", share: "~5%", freq: "Buyback", acq: false, wind: false },
  { name: "$BEOMZ", share: "75%", freq: "Weekly", acq: true, wind: true },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F97316]/10 via-transparent to-[#534AB7]/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-balance leading-tight">
              Own a piece of everything{" "}
              <span className="bg-gradient-to-r from-[#F97316] to-[#534AB7] bg-clip-text text-transparent">
                Beomz builds.
              </span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg md:text-xl text-gray-400 text-center mt-6 max-w-3xl mx-auto text-balance">
              75% of all revenue from both products flows to $BEOMZ stakers.
              <br className="hidden sm:block" />
              Weekly. In USDC. On-chain. Automatically.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a
                href="#waitlist"
                className="bg-[#F97316] hover:bg-[#EA580C] text-black font-semibold px-8 py-3 rounded-lg text-lg transition-colors"
              >
                Buy $BEOMZ
              </a>
              <Link
                href="/whitepaper"
                className="border border-[#333] hover:border-[#555] text-white font-semibold px-8 py-3 rounded-lg text-lg transition-colors"
              >
                Read Whitepaper
              </Link>
            </div>
          </FadeIn>

          {/* Stat cards */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#111] border border-[#222] rounded-2xl p-6 text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white">{s.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            The most generous revenue share in AI crypto.{" "}
            <span className="bg-gradient-to-r from-[#F97316] to-[#534AB7] bg-clip-text text-transparent">By far.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-[#222]">
                  <th className="text-left py-4 px-4 text-sm text-gray-500 font-medium">Project</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-500 font-medium">Revenue Share</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-500 font-medium">Frequency</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-500 font-medium">Acq. Protection</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-500 font-medium">Wind-Down Protection</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((c) => (
                  <tr
                    key={c.name}
                    className={`border-b border-[#222] ${c.name === "$BEOMZ" ? "bg-[#F97316]/5" : ""}`}
                  >
                    <td className={`py-4 px-4 font-semibold ${c.name === "$BEOMZ" ? "text-[#F97316]" : "text-white"}`}>
                      {c.name}
                    </td>
                    <td className={`py-4 px-4 ${c.name === "$BEOMZ" ? "text-[#F97316] font-bold text-lg" : "text-gray-300"}`}>
                      {c.share}
                    </td>
                    <td className="py-4 px-4 text-gray-300">{c.freq}</td>
                    <td className="py-4 px-4">
                      {c.acq ? (
                        <span className="text-green-400">On-chain</span>
                      ) : (
                        <span className="text-red-400">None</span>
                      )}
                    </td>
                    <td className="py-4 px-4">
                      {c.wind ? (
                        <span className="text-green-400">Stakers first</span>
                      ) : (
                        <span className="text-red-400">None</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 bg-[#111] border border-[#222] rounded-2xl p-6">
            <p className="text-gray-400 text-sm leading-relaxed">
              This is not a marketing promise. It is code on Basescan.
              Anyone can verify every distribution, every protection, every clause.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Two Products. One Token.</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          <FadeIn delay={0.1}>
            <a
              href="https://beomz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#111] border border-[#222] rounded-2xl p-8 hover:border-[#F97316]/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F97316]/10 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded bg-[#F97316]" />
              </div>
              <h3 className="text-xl font-bold text-[#F97316]">Beomz Build</h3>
              <p className="text-gray-400 mt-2">AI App Builder</p>
              <p className="text-sm text-gray-600 mt-4 group-hover:text-gray-400 transition-colors">beomz.com &rarr;</p>
            </a>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href="https://crypto.beomz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#111] border border-[#222] rounded-2xl p-8 hover:border-[#534AB7]/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#534AB7]/10 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded bg-[#534AB7]" />
              </div>
              <h3 className="text-xl font-bold text-[#534AB7]">Beomz Crypto</h3>
              <p className="text-gray-400 mt-2">AI Crypto Companion</p>
              <p className="text-sm text-gray-600 mt-4 group-hover:text-gray-400 transition-colors">crypto.beomz.com &rarr;</p>
            </a>
          </FadeIn>
        </div>
        <FadeIn delay={0.3}>
          <p className="text-center text-gray-500 mt-8 text-sm">
            Both products. One token. 75% of all revenue shared with holders.
          </p>
        </FadeIn>
      </section>

      {/* Revenue Waterfall */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How Revenue Flows</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-[#111] border border-[#222] rounded-2xl p-6 w-full text-center">
                <p className="text-sm text-gray-500">All Product Revenue</p>
                <p className="text-lg font-bold text-white mt-1">Beomz Build + Beomz Crypto</p>
              </div>
              <div className="w-px h-8 bg-[#333]" />
              <div className="bg-[#111] border border-[#222] rounded-2xl p-6 w-full text-center">
                <p className="text-sm text-gray-500">BeomzTreasury Contract</p>
                <p className="text-lg font-bold text-white mt-1">Threshold Check</p>
              </div>
              <div className="w-px h-8 bg-[#333]" />
              <div className="grid grid-cols-3 gap-4 w-full">
                <div className="bg-[#111] border border-[#F97316]/30 rounded-2xl p-5 text-center">
                  <p className="text-2xl font-bold text-[#F97316]">50%</p>
                  <p className="text-sm text-gray-400 mt-1">Stakers</p>
                  <p className="text-xs text-gray-600 mt-1">USDC weekly</p>
                </div>
                <div className="bg-[#111] border border-[#222] rounded-2xl p-5 text-center">
                  <p className="text-2xl font-bold text-white">25%</p>
                  <p className="text-sm text-gray-400 mt-1">Founder</p>
                  <p className="text-xs text-gray-600 mt-1">USDC</p>
                </div>
                <div className="bg-[#111] border border-[#534AB7]/30 rounded-2xl p-5 text-center">
                  <p className="text-2xl font-bold text-[#534AB7]">25%</p>
                  <p className="text-sm text-gray-400 mt-1">Buyback + Burn</p>
                  <p className="text-xs text-gray-600 mt-1">Aerodrome DEX</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Phased Thresholds */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
            {PHASES.map((p) => (
              <div key={p.phase} className="bg-[#111] border border-[#222] rounded-2xl p-6 text-center">
                <p className="text-sm text-gray-500">Phase {p.phase}</p>
                <p className="text-2xl font-bold text-white mt-2">{p.threshold}</p>
                <p className="text-xs text-gray-600 mt-2">Days {p.days}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Tier Table */}
      <section id="tokenomics-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Holder Tiers</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-[#222]">
                  <th className="text-left py-4 px-4 text-sm text-gray-500 font-medium">Tier</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-500 font-medium">$BEOMZ Required</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-500 font-medium">Build Discount</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-500 font-medium">Crypto Discount</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-500 font-medium">Staking APY</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-500 font-medium">Affiliate</th>
                </tr>
              </thead>
              <tbody>
                {TIERS.map((tier) => (
                  <tr key={tier.name} className="border-b border-[#222] hover:bg-[#111]">
                    <td className="py-4 px-4 font-semibold" style={{ color: tier.color }}>
                      {tier.name}
                    </td>
                    <td className="py-4 px-4 text-gray-300">{tier.tokens}</td>
                    <td className="py-4 px-4 text-gray-300">{tier.buildDiscount} off</td>
                    <td className="py-4 px-4 text-gray-300">
                      {tier.cryptoDiscount === "FREE" ? (
                        <span className="text-green-400 font-semibold">FREE</span>
                      ) : (
                        `${tier.cryptoDiscount} off`
                      )}
                    </td>
                    <td className="py-4 px-4 text-gray-300">
                      {tier.apy}
                      {tier.apyNote && <span className="text-gray-500 text-xs ml-1">{tier.apyNote}</span>}
                    </td>
                    <td className="py-4 px-4 text-gray-300">{tier.affiliate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </section>

      {/* Affiliate Commissions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
            {TIERS.map((tier) => (
              <div key={tier.name} className="bg-[#111] border border-[#222] rounded-2xl p-6 text-center">
                <p className="text-sm font-semibold" style={{ color: tier.color }}>
                  {tier.name}
                </p>
                <p className="text-3xl font-bold text-white mt-2">{tier.affiliate}</p>
                <p className="text-xs text-gray-600 mt-1">of referral revenue</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 bg-[#111] border border-[#222] rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-sm text-gray-400">
              <span className="text-white font-semibold">Example:</span> A Whale with 10 referrals on Pro ($49/mo) earns{" "}
              <span className="text-[#F97316] font-semibold">$73.50/month</span> in affiliate USDC — on top of staking APY
              and revenue share.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Acquisition + Wind-Down Protection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center max-w-3xl mx-auto">
            We cannot sell out from under you. It is in the contract.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">14-Day Public Notice</h3>
              <p className="text-sm text-gray-400 mt-2">
                On-chain notice before any acquisition can proceed. No backroom deals.
              </p>
            </div>
            <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-[#534AB7]/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-[#534AB7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Sentinel+ Voting</h3>
              <p className="text-sm text-gray-400 mt-2">
                Sentinel and above holders vote on any acquisition or wind-down.
              </p>
            </div>
            <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Stakers First</h3>
              <p className="text-sm text-gray-400 mt-2">
                100% of treasury USDC goes to stakers before founder in any wind-down.
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 bg-[#111] border border-[#222] rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-gray-400 text-sm">
              No other AI token has these protections. Check our contract. Then check theirs.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Staking APY */}
      <section id="staking-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Staking APY + Lock Bonuses</h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto">
            Lock your tokens longer for higher yields.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {LOCK_BONUSES.map((lb) => (
              <div key={lb.period} className="bg-[#111] border border-[#222] rounded-2xl p-6 text-center">
                <p className="text-sm text-gray-500">{lb.period}</p>
                <p className="text-2xl font-bold text-[#F97316] mt-2">{lb.bonus}</p>
                <p className="text-xs text-gray-600 mt-1">APY bonus</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="text-center mt-8">
            <Link
              href="/staking"
              className="text-[#F97316] hover:text-[#EA580C] font-semibold text-sm transition-colors"
            >
              See full staking guide + APY calculator &rarr;
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Token Distribution */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Token Distribution</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="max-w-2xl mx-auto space-y-4">
            {DISTRIBUTION.map((d) => (
              <div key={d.label} className="flex items-center gap-4">
                <div className="w-16 text-right">
                  <span className="text-lg font-bold text-white">{d.pct}%</span>
                </div>
                <div className="flex-1">
                  <div className="h-8 bg-[#111] rounded-lg overflow-hidden border border-[#222]">
                    <div
                      className="h-full rounded-lg bg-gradient-to-r from-[#F97316] to-[#534AB7]"
                      style={{ width: `${d.pct * 2.5}%` }}
                    />
                  </div>
                </div>
                <div className="w-48">
                  <p className="text-sm font-semibold text-white">{d.label}</p>
                  <p className="text-xs text-gray-500">{d.amount} &mdash; {d.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Total supply: 500,000,000 $BEOMZ (hard cap, no additional minting)
          </p>
        </FadeIn>
      </section>

      {/* Contract Addresses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Verified Contracts</h2>
          <p className="text-gray-500 text-center text-sm mb-12">
            Base Sepolia Testnet — Mainnet addresses coming April 15
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="max-w-2xl mx-auto space-y-3">
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

      {/* Roadmap preview */}
      <section id="roadmap-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Roadmap</h2>
          <p className="text-center mt-2">
            <Link href="/roadmap" className="text-[#F97316] hover:text-[#EA580C] font-semibold text-sm transition-colors">
              View full roadmap &rarr;
            </Link>
          </p>
        </FadeIn>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeIn>
          <div className="bg-gradient-to-br from-[#F97316]/5 to-[#534AB7]/5 border border-[#222] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Get notified when $BEOMZ launches
            </h2>
            <p className="text-gray-400 mt-2 mb-8">May 1, 2026</p>
            <WaitlistForm />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
