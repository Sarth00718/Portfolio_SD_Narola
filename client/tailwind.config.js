/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#05080f",
          900: "#0a0e1a",
          800: "#0f1525",
          700: "#172033",
          600: "#1e2b45",
        },
        brand: {
          indigo: "#6366f1",
          violet: "#8b5cf6",
          blue: "#3b82f6",
          cyan: "#22d3ee",
          emerald: "#10b981",
        },
        surface: {
          DEFAULT: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          card: "var(--bg-card)",
          "card-hover": "var(--bg-card-hover)",
        },
        border: {
          glass: "var(--border-glass)",
          glow: "var(--border-glow)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
        display: ["Outfit", "system-ui", "sans-serif"],
      },
      fontSize: {
        "fluid-xs": "clamp(0.75rem, 1.5vw, 0.875rem)",
        "fluid-sm": "clamp(0.875rem, 2vw, 1rem)",
        "fluid-base": "clamp(1rem, 2.5vw, 1.125rem)",
        "fluid-h2": "clamp(1.75rem, 4.5vw, 3.25rem)",
        "fluid-h1": "clamp(2.25rem, 6vw, 5rem)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(160deg, #05080f 0%, #0a0e1a 50%, #05080f 100%)",
        "brand-gradient": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #22d3ee 100%)",
        "accent-gradient": "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(34,211,238,0.04) 100%)",
        "glow-gradient": "radial-gradient(ellipse at center, rgba(99,102,241,0.12) 0%, transparent 70%)",
      },
      boxShadow: {
        glow: "0 0 24px rgba(99, 102, 241, 0.3)",
        "glow-lg": "0 0 48px rgba(99, 102, 241, 0.4)",
        "glow-cyan": "0 0 24px rgba(34, 211, 238, 0.3)",
        glass: "0 8px 40px rgba(0,0,0,0.5)",
        card: "0 4px 28px rgba(0,0,0,0.35)",
        "card-light": "0 4px 28px rgba(99,102,241,0.06)",
        soft: "0 2px 16px rgba(0,0,0,0.15)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-back": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
        "spring": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        float: "float 6s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "spin-slow": "spin 12s linear infinite",
        "ping-slow": "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(99,102,241,0.25)" },
          "50%": { boxShadow: "0 0 40px rgba(99,102,241,0.5)" },
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
