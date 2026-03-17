import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // enable class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: "#ffffff", // Light theme background color
          text: "#1f2937", // Light theme text color
        },
        dark: {
          background: "#1f2937", // Dark theme background color
          text: "#f8fafc", // Dark theme text color
        },
      },
    },
  },
  plugins: [],
};

export default config;
