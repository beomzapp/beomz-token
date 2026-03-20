"use client";

import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        required
        className="flex-1 px-4 py-3 rounded-lg bg-[#111] border border-[#333] text-white placeholder-gray-500 focus:outline-none focus:border-[#F97316] transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-[#F97316] hover:bg-[#EA580C] text-black font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Joining..." : "Notify Me"}
      </button>
      {status !== "idle" && status !== "loading" && (
        <p className={`text-sm mt-2 sm:mt-0 sm:self-center ${status === "success" ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
