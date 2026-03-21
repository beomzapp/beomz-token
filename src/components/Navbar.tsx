"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { href: "/#tokenomics-preview", label: "Tokenomics" },
  { href: "/#staking-preview", label: "Staking" },
  { href: "/#roadmap-preview", label: "Roadmap" },
  { href: "/whitepaper", label: "Whitepaper" },
];

function Logo({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 690 768"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M580.46 370.68C597.69 379.32 613.12 390.73 626.88 405.64C669.02 446.95 689.56 496.37 689.56 553.44C689.56 610.51 669.26 661.26 626.88 704.16C585.23 746.36 530.94 767.48 463.93 767.48H0.00994873L580.47 370.68H580.46ZM0 246.14V0H423.23C487.78 0 540 20.25 580.78 60.83C621.37 101.18 641.62 149.06 641.62 204.9C641.62 219.2 640.34 232.94 637.77 246.13H0V246.14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2.5 no-underline">
          <Logo size={28} className="text-white" />
          <span className="text-[17px] font-bold tracking-tight text-white">
            Beomz
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="rounded-lg px-3 py-1.5 text-sm text-white/60 no-underline transition-all hover:text-white hover:bg-white/10"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/#waitlist"
            className="inline-flex items-center rounded-full bg-[#F97316] px-4 py-2 text-sm font-semibold text-white no-underline transition-colors hover:bg-[#EA580C]"
          >
            Buy $BEOMZ
          </Link>
          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg text-white/70 hover:bg-white/10 md:hidden transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="border-t border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl px-5 py-4 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 no-underline hover:bg-white/10"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
