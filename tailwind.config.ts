import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"], theme: { extend: { colors: { graphite: "#111515", panel: "#171c1b", line: "#2a3035", shift: "#acb78d" }, boxShadow: { glow: "0 0 40px rgba(172,183,141,.18)" } } }, plugins: [] };
export default config;
