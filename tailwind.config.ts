import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F2F6FA", 100: "#DDE8F1", 200: "#BDD2E2", 300: "#91B5D0",
          400: "#6496BA", 500: "#467BA2", 600: "#356284", 700: "#2B4F6B",
          800: "#234158", 900: "#103456", 950: "#081A2B"
        },
        accent: {
          50: "#FFF5F1", 100: "#FFE8DF", 200: "#FFD0BF", 300: "#FBAE91",
          400: "#F1815E", 500: "#C7603E", 600: "#A94B30", 700: "#893B29",
          800: "#713227", 900: "#5E2B23", 950: "#32150F"
        },
        concrete: {
          50: "#F7F7F5", 100: "#EEEEEB", 200: "#DDDDD8", 300: "#CAC9C3",
          400: "#A8AAA7", 500: "#8D908C", 600: "#71746F", 700: "#5C5E5A",
          800: "#484A47", 900: "#353735", 950: "#1B1C1B"
        },
        "neutral-dark": "#101214",
        "neutral-light": "#F5F2EA",
        "brand-blue": "#103456",
        "brand-orange": "#C7603E"
      },
      fontFamily: {
        sans: ["var(--font-manrope)"],
        serif: ["var(--font-instrument-serif)"]
      }
    }
  }
};

export default config;
