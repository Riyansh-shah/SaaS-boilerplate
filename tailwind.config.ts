import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#2563eb",
          light: "#60a5fa",
        },
        secondary: {
          DEFAULT: "#94a3b8",
          dark: "#64748b",
          light: "#cbd5e1",
        },
        accent: {
          DEFAULT: "#06b6d4",
          dark: "#0891b2",
          light: "#22d3ee",
        },
        dark: {
          DEFAULT: "#0f172a",
          light: "#1e293b",
        },
      },
      fontFamily: {
        heading: ["Outfit", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-in-left": "slideInLeft 0.6s ease forwards",
        "slide-in-right": "slideInRight 0.6s ease forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        shimmer: "shimmer 1.5s infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(59, 130, 246, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
