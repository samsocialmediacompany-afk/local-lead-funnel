import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef6ff",
          100: "#d9ebff",
          700: "#0f3a67",
          800: "#0b2b4f",
          900: "#071d35",
          950: "#041326"
        },
        cta: {
          400: "#35e67a",
          500: "#18cf63",
          600: "#10a84f"
        }
      },
      boxShadow: {
        soft: "0 20px 60px rgba(7, 29, 53, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
