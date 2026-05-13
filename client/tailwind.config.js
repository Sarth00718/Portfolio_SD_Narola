/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050810",
          900: "#0c1120",
          800: "#111827",
          700: "#1a2744",
          600: "#253659",
        },
        brand: {
          indigo: "#6366f1",
          violet: "#8b5cf6",
          cyan: "#22d3ee",
          blue: "#3b82f6",
          emerald: "#10b981",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.04)",
          border: "rgba(255,255,255,0.07)",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        display: ["Syne", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(160deg, #050810 0%, #0c1120 50%, #050810 100%)",
        "brand-gradient": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #22d3ee 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(34,211,238,0.04) 100%)",
        "glow-gradient": "radial-gradient(ellipse at center, rgba(99,102,241,0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 24px rgba(99, 102, 241, 0.35)",
        "glow-lg": "0 0 48px rgba(99, 102, 241, 0.45)",
        "glow-cyan": "0 0 24px rgba(34, 211, 238, 0.35)",
        glass: "0 8px 40px rgba(0,0,0,0.5)",
        card: "0 4px 28px rgba(0,0,0,0.35)",
        "card-light": "0 4px 28px rgba(99,102,241,0.08)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "spin-slow": "spin 8s linear infinite",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99,102,241,0.3)" },
          "50%": { boxShadow: "0 0 48px rgba(99,102,241,0.7)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      backdropBlur: { xs: "2px" },
    },
  },
  plugins: [typography],
};
