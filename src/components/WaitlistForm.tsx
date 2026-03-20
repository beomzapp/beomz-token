"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error);
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <div className="flex-1 relative group">
          <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-[#F97316]/20 to-[#534AB7]/20 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 blur-sm" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            required
            className="relative w-full px-4 py-3.5 rounded-xl bg-[#0a0a0a] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:border-[#F97316]/50 transition-all duration-300"
          />
        </div>
        <motion.button
          type="submit"
          disabled={status === "loading"}
          className="bg-[#F97316] hover:bg-[#EA580C] text-black font-semibold px-6 py-3.5 rounded-xl transition-colors disabled:opacity-50 btn-glow"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <motion.span
                className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full inline-block"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              Joining...
            </span>
          ) : (
            "Notify Me"
          )}
        </motion.button>
      </form>

      <AnimatePresence>
        {status !== "idle" && status !== "loading" && (
          <motion.p
            className={`text-sm mt-4 text-center ${status === "success" ? "text-green-400" : "text-red-400"}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            {status === "success" && (
              <span className="inline-flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {message}
              </span>
            )}
            {status === "error" && message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
