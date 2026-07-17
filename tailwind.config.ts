import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"], theme: { extend: { colors: { graphite: "#111315", panel: "#191d20", line: "#2a3035", shift: "#35d06f" }, boxShadow: { glow: "0 0 40px rgba(53,208,111,.18)" } } }, plugins: [] };
export default config;
