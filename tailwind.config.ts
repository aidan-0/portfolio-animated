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
				"bg-blue": "#0b345a",
				"bg-green": "#086a38",
				"bg-red": "#7c1e24",
				"bg-orange": "#aa562c",
				"text-light": "#E1EAF1",
				"text-dark": "#151B20",
				"portfolio-border": "#313D4A",
				"portfolio-accent": "#2877D3"
			},
			fontFamily: {
				spaceGrotesk: ["Space Grotesk", "sans-serif"],
				Montserrat: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [],
};
export default config;
