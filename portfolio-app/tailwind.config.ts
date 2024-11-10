import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors"; // Import the colors module from Tailwind CSS

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: colors.red, // Dark red
        secondary:colors.red, // Dark red
        ...colors, // Include Tailwind's default colors
      },
    },
  },
  plugins: [],
};



export default config;
