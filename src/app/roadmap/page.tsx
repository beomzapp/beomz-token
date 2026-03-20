"use client";

import FadeIn from "@/components/FadeIn";

const timeline = [
  {
    date: "Now - Mar 27",
    title: "Foundation",
    desc: "Stabilise Beomz Builder. Deploy contracts to Sepolia.",
    done: true,
  },
  {
    date: "Mar 28",
    title: "Crypto Build Begins",
    desc: "Beomz Crypto app build begins. token.beomz.com launches.",
    done: false,
  },
  {
    date: "Apr 1",
    title: "Builder Beta",
    desc: "Beomz Builder beta opens to first community members.",
    done: false,
  },
  {
    date: "Apr 8-15",
    title: "Wallet Tier Integration",
    desc: "Wallet tier system integrated. Contracts deployed to Base Mainnet.",
    done: false,
  },
  {
    date: "Apr 15",
    title: "Crypto MVP",
    desc: "Beomz Crypto MVP feature-complete.",
    done: false,
  },
  {
    date: "Apr 19-30",
    title: "Pre-Launch Campaign",
    desc: "Daily updates. Countdown begins. Community activation.",
    done: false,
  },
  {
    date: "May 1",
    title: "PUBLIC LAUNCH",
    desc: "Both apps + $BEOMZ fair launch on Base.",
    done: false,
    highlight: true,
  },
];

const futureVision = [
  {
    title: "Embedded Wallet",
    desc: "Email/social login, buy $BEOMZ with card. No MetaMask required.",
  },
  {
    title: "TradeAgent",
    desc: "Autonomous trading agent on Base. AI-powered portfolio management.",
  },
  {
    title: "YieldBot",
    desc: "Idle USDC deployed to safe yield protocols automatically.",
  },
  {
    title: "Beomz Vault",
    desc: "DeFi yield with insurance. Higher returns, protected capital.",
  },
  {
    title: "RugRadar Public API",
    desc: "Free safety infrastructure for the entire Base ecosystem.",
  },
  {
    title: "Beomz Studio",
    desc: "Anyone can launch community-owned AI products under the Beomz umbrella.",
  },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            <span className="bg-gradient-to-r from-[#F97316] to-[#534AB7] bg-clip-text text-transparent">
              Roadmap
            </span>
          </h1>
          <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
            From testnet to mainnet. From beta to public launch.
          </p>
        </FadeIn>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#222]" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex gap-6">
                  {/* Dot */}
                  <div className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center z-10 ${
                    item.highlight
                      ? "bg-gradient-to-br from-[#F97316] to-[#534AB7]"
                      : item.done
                        ? "bg-green-500/20 border border-green-500/30"
                        : "bg-[#111] border border-[#222]"
                  }`}>
                    {item.done ? (
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : item.highlight ? (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-gray-600" />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`bg-[#111] border rounded-2xl p-6 flex-1 ${
                    item.highlight ? "border-[#F97316]/30" : "border-[#222]"
                  }`}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-mono px-2 py-1 rounded ${
                        item.done
                          ? "bg-green-500/10 text-green-400"
                          : item.highlight
                            ? "bg-[#F97316]/10 text-[#F97316]"
                            : "bg-[#0a0a0a] text-gray-500"
                      }`}>
                        {item.date}
                      </span>
                      {item.done && (
                        <span className="text-xs text-green-400">Completed</span>
                      )}
                    </div>
                    <h3 className={`font-semibold ${item.highlight ? "text-[#F97316] text-lg" : "text-white"}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Future Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-24">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-4">Future Vision</h2>
          <p className="text-gray-400 text-sm mb-8">
            What we are building after launch. All generating revenue that flows to $BEOMZ stakers.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureVision.map((item) => (
              <div key={item.title} className="bg-[#111] border border-[#222] rounded-2xl p-6">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
