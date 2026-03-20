"use client";

import Link from "next/link";
import { CONTRACTS, BASESCAN_URL } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-[#222] bg-[#0a0a0a] relative">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <motion.span
              className="text-lg font-bold bg-gradient-to-r from-[#F97316] via-[#D98B4A] to-[#534AB7] bg-clip-text text-transparent bg-[length:200%_auto]"
              animate={{ backgroundPosition: ["0% center", "200% center"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              $BEOMZ
            </motion.span>
            <p className="text-gray-500 text-sm mt-2">
              Own a piece of everything Beomz builds.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Product</h4>
            <div className="space-y-2">
              {[
                { href: "/tokenomics", label: "Tokenomics" },
                { href: "/staking", label: "Staking" },
                { href: "/roadmap", label: "Roadmap" },
                { href: "/whitepaper", label: "Whitepaper" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Ecosystem</h4>
            <div className="space-y-2">
              <a href="https://beomz.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-500 hover:text-[#F97316] transition-colors">Beomz Build</a>
              <a href="https://crypto.beomz.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-500 hover:text-[#534AB7] transition-colors">Beomz Crypto</a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Contracts</h4>
            <div className="space-y-2">
              {Object.entries(CONTRACTS).map(([name, addr]) => (
                <a
                  key={name}
                  href={`${BASESCAN_URL}/${addr}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-500 hover:text-gray-300 transition-colors truncate"
                  title={addr}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#1a1a1a] mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            Base Sepolia Testnet &mdash; Mainnet addresses coming April 15, 2026
          </p>
          <p className="text-xs text-gray-600">
            &copy; 2026 Beomz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
