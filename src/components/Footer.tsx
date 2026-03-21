"use client";

import Link from "next/link";
import { CONTRACTS, BASESCAN_URL } from "@/lib/constants";

function Logo({ size = 24, className }: { size?: number; className?: string }) {
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

const COLUMNS = [
  {
    title: "Token",
    links: [
      { label: "Tokenomics", href: "/tokenomics" },
      { label: "Staking", href: "/staking" },
      { label: "Roadmap", href: "/roadmap" },
      { label: "Whitepaper", href: "/whitepaper" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "Beomz Build", href: "https://beomz.com", external: true },
      { label: "Beomz Lens", href: "https://crypto.beomz.com", external: true },
    ],
  },
  {
    title: "Contracts",
    links: Object.entries(CONTRACTS).map(([name, addr]) => ({
      label: name,
      href: `${BASESCAN_URL}/${addr}`,
      external: true,
    })),
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "https://beomz.com/privacy", external: true },
      { label: "Terms", href: "https://beomz.com/terms", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-5 py-14">
        {/* Top: Logo + tagline */}
        <div className="mb-10 flex items-center gap-3">
          <Logo size={24} className="text-white" />
          <div>
            <p className="text-lg font-bold text-white">Beomz</p>
            <p className="text-sm text-white/50">Own a piece of everything Beomz builds</p>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                {column.title}
              </p>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/40 no-underline transition-colors hover:text-white/80 truncate block"
                        title={link.href}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/40 no-underline transition-colors hover:text-white/80"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Audit disclaimer */}
        <p className="mt-10 text-center text-[11px] leading-relaxed text-white/30">
          Contracts unaudited — community audit in progress. Interact at your own risk. Audit results will be published on{" "}
          <a href="https://github.com/beomz" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white/50">
            GitHub
          </a>.
        </p>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-6 sm:flex-row">
          <p className="text-xs text-white/30">
            Base Sepolia Testnet &mdash; Mainnet addresses coming April 15, 2026
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-white/30">
              &copy; {new Date().getFullYear()} Beomz. All rights reserved.
            </p>
            <a href="https://x.com/beomz" target="_blank" rel="noopener noreferrer" className="text-white/30 transition-colors hover:text-white/50" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://github.com/beomz" target="_blank" rel="noopener noreferrer" className="text-white/30 transition-colors hover:text-white/50" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
