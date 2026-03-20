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
        purple: {
          500: "#534AB7",
          600: "#4338A8",
        },
        card: "#111111",
        border: "#222222",
      },
    },
  },
  plugins: [],
};
export default config;
