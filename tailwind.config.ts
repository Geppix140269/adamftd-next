import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base
        bg: "#05090e",
        s1: "#0c1520",
        s2: "#111e2e",
        s3: "#172538",
        b1: "#1e3048",
        b2: "#2a4060",

        // Accents
        gold: {
          DEFAULT: "#e8a424",
          light: "#ffc043",
          dark: "rgba(232, 164, 36, 0.12)",
        },
        green: {
          DEFAULT: "#00cc90",
          dark: "rgba(0, 204, 144, 0.1)",
        },
        red: {
          DEFAULT: "#f05060",
          dark: "rgba(240, 80, 96, 0.1)",
        },
        blue: {
          DEFAULT: "#4090ff",
          dark: "rgba(64, 144, 255, 0.1)",
        },
        amber: {
          DEFAULT: "#f0c030",
          dark: "rgba(240, 192, 48, 0.1)",
        },
        purple: {
          DEFAULT: "#a060ff",
          dark: "rgba(160, 96, 255, 0.1)",
        },

        // Text
        text: {
          primary: "#e8f2ff",
          secondary: "#9ab8d8",
          muted: "#506880",
          dim: "#2e4258",
        },

        // Border
        border: {
          DEFAULT: "#1e3048",
          light: "#2a4060",
        },
      },
      fontFamily: {
        heading: ["var(--font-plus-jakarta-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-outfit)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-fira-code)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
