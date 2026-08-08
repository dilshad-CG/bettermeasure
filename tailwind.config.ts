import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Better Measure brand palette — an all-blue corporate system taken from
        // the logo (navy + blue). The "coral" token name is retained for
        // backwards-compatible class names but now resolves to a professional
        // brand blue used for conversion CTAs and accents.
        ink: "#1A1A1A",
        cream: "#F7F9FC",
        coral: {
          DEFAULT: "#1C6DBB", // primary CTA / accent blue (AA white text)
          dark: "#145392",
        },
        navy: {
          DEFAULT: "#1E2A5E", // logo navy — primary brand
          dark: "#141C42",
        },
        blue: {
          DEFAULT: "#1C8FD1", // logo blue — accent / links
          dark: "#1577AE",
          light: "#7FC4E8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
