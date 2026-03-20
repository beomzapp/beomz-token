import Link from "next/link";
import { CONTRACTS, BASESCAN_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[#222] bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-lg font-bold bg-gradient-to-r from-[#F97316] to-[#534AB7] bg-clip-text text-transparent">
              $BEOMZ
            </span>
            <p className="text-gray-500 text-sm mt-2">
              Own a piece of everything Beomz builds.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Product</h4>
            <div className="space-y-2">
              <Link href="/tokenomics" className="block text-sm text-gray-500 hover:text-gray-300">Tokenomics</Link>
              <Link href="/staking" className="block text-sm text-gray-500 hover:text-gray-300">Staking</Link>
              <Link href="/roadmap" className="block text-sm text-gray-500 hover:text-gray-300">Roadmap</Link>
              <Link href="/whitepaper" className="block text-sm text-gray-500 hover:text-gray-300">Whitepaper</Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Ecosystem</h4>
            <div className="space-y-2">
              <a href="https://beomz.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-500 hover:text-gray-300">Beomz Build</a>
              <a href="https://crypto.beomz.com" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-500 hover:text-gray-300">Beomz Crypto</a>
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
                  className="block text-sm text-gray-500 hover:text-gray-300 truncate"
                  title={addr}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#222] mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
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
