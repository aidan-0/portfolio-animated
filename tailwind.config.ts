import { Montserrat } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'new-orange': '#123b62',
        'new-dark-purple': '#71548B',
        'new-grey-blue': '#415278',
        'new-dark-grey-blue': '#2F4858',
        'text-light': '#E1EAF1',
        'text-dark': '#0a1117',
        'new-text-light-purple': '#9297e2'
      },
    fontFamily: {
      spaceGrotesk: ['Space Grotesk', 'sans-serif'],
      Montserrat: ['Montserrat', 'sans-serif'],
      
    }
    },
  },
  plugins: [],
};
export default config;
