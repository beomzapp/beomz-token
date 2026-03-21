"use client";

import FadeIn from "@/components/FadeIn";
import GlowCard from "@/components/GlowCard";
import HeroBlobs from "@/components/HeroBlobs";
import SectionDivider from "@/components/SectionDivider";
import { motion } from "framer-motion";

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
    icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
  },
  {
    title: "TradeAgent",
    desc: "Autonomous trading agent on Base. AI-powered portfolio management.",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    title: "YieldBot",
    desc: "Idle USDC deployed to safe yield protocols automatically.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "Beomz Vault",
    desc: "DeFi yield with insurance. Higher returns, protected capital.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "RugRadar Public API",
    desc: "Free safety infrastructure for the entire Base ecosystem.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Beomz Studio",
    desc: "Anyone can launch community-owned AI products under the Beomz umbrella.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
];

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-grid">
      {/* Header */}
      <section className="relative overflow-hidden">
        <HeroBlobs />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-center">
              <span className="text-[#F97316]">
                Roadmap
              </span>
            </h1>
            <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
              From testnet to mainnet. From beta to public launch.
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <div className="relative">
            {/* Animated vertical line */}
            <motion.div
              className="absolute left-6 top-0 bottom-0 w-px"
              style={{
                background: "linear-gradient(to bottom, #F97316, #EA580C, transparent)",
              }}
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  className="relative flex gap-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* Dot */}
                  <motion.div
                    className={`w-12 h-12 rounded-xl shrink-0 flex items-center justify-center z-10 ${
                      item.highlight
                        ? "bg-[#F97316]"
                        : item.done
                          ? "bg-green-500/20 border border-green-500/30"
                          : "bg-white/[0.04] border border-white/[0.08]"
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {item.done ? (
                      <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : item.highlight ? (
                      <motion.svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </motion.svg>
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-gray-600" />
                    )}
                  </motion.div>

                  {/* Content */}
                  <GlowCard
                    className={`p-6 flex-1 ${item.highlight ? "!border-[#F97316]/30" : ""}`}
                    glowColor={item.highlight ? "amber" : item.done ? "green" : "amber"}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-mono px-2 py-1 rounded-lg ${
                        item.done
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : item.highlight
                            ? "bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/20"
                            : "bg-[#0a0a0a] text-gray-500 border border-white/[0.08]"
                      }`}>
                        {item.date}
                      </span>
                      {item.done && (
                        <span className="text-xs text-green-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                          Completed
                        </span>
                      )}
                    </div>
                    <h3 className={`font-semibold ${item.highlight ? "text-[#F97316] text-lg" : "text-white"}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <SectionDivider />

      {/* Future Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-4">Future Vision</h2>
          <p className="text-gray-400 text-sm mb-8">
            What we are building after launch. All generating revenue that flows to $BEOMZ stakers.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureVision.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlowCard className="p-6" glowColor="amber">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-[#F97316]/10 border border-white/[0.08] flex items-center justify-center mb-3"
                    whileHover={{ rotate: 10 }}
                  >
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </motion.div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400 mt-2">{item.desc}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
