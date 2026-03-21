export const CONTRACTS = {
  BeomzToken: "0x78c48CcA4A9f2831909B66De421d3Cd3D79d82bE",
  BeomzStaking: "0x9C98B1f8abF02Ca1427B917A16f3BEc96a1C85cd",
  BeomzTreasury: "0xDf6700012ea2Ce472D36C061572B1c093BE3b2ba",
  BeomzRewards: "0x94d19E5E2E5aBc4E3D012f8343b4Cb90bCB49425",
  BeomzVesting: "0x4c4ec4B9b98cF92C04912A65aacF07A893616Ec3",
} as const;

export const CHAIN_ID = 84532;
export const BASESCAN_URL = "https://sepolia.basescan.org/address";

export const TIERS = [
  {
    name: "Mate",
    tokens: "1,000",
    buildDiscount: "10%",
    cryptoDiscount: "10%",
    apy: "0%",
    apyNote: null,
    affiliate: "2.5%",
    color: "#F97316",
  },
  {
    name: "Guardian",
    tokens: "5,000",
    buildDiscount: "20%",
    cryptoDiscount: "25%",
    apy: "8%",
    apyNote: null,
    affiliate: "5%",
    color: "#F97316",
  },
  {
    name: "Sentinel",
    tokens: "20,000",
    buildDiscount: "40%",
    cryptoDiscount: "50%",
    apy: "12%",
    apyNote: "+ USDC weekly",
    affiliate: "10%",
    color: "#F97316",
  },
  {
    name: "Whale",
    tokens: "100,000",
    buildDiscount: "60%",
    cryptoDiscount: "FREE",
    apy: "15%",
    apyNote: "+ 25% revenue share",
    affiliate: "15%",
    color: "#F97316",
  },
] as const;

export const DISTRIBUTION = [
  { label: "Community Rewards", amount: "200M", pct: 40, detail: "5-year linear vesting" },
  { label: "Public Sale", amount: "100M", pct: 20, detail: "Fair launch — no presale" },
  { label: "Founder", amount: "100M", pct: 20, detail: "4-year vest / 1-year cliff" },
  { label: "Treasury", amount: "75M", pct: 15, detail: "DAO governed" },
  { label: "Liquidity", amount: "25M", pct: 5, detail: "Locked 2 years on Aerodrome" },
] as const;

export const PHASES = [
  { phase: 1, days: "0-90", threshold: "$1,000" },
  { phase: 2, days: "90-180", threshold: "$2,500" },
  { phase: 3, days: "180-270", threshold: "$5,000" },
  { phase: 4, days: "270+", threshold: "$10,000" },
] as const;

export const LOCK_BONUSES = [
  { period: "No lock", bonus: "+0%" },
  { period: "30 days", bonus: "+10%" },
  { period: "90 days", bonus: "+20%" },
  { period: "180 days", bonus: "+35%" },
] as const;
