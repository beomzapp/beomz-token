import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        amber: {
          500: "#F97316",
          600: "#EA580C",
        },
        card: "rgba(255,255,255,0.04)",
        border: "rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
