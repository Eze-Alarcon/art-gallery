/** @type {import('tailwindcss').Config} */
const { transparent, inherit, currentColor } = require("tailwindcss/colors")

module.exports = {
	content: ["./index.html", "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			orange: "#D5966C",
			black: "#151515",
			gray: "#444444",
			white: "#ffffff",
			transparent,
			inherit,
			current: currentColor,
		},
		fontFamily: {
			bigShoulder: ["Big Shoulders Display", "cursive"],
			outfit: ["Outfit", "sans-serif"],
		},
		extend: {
			gridTemplateColumns: {
				header: "50% 5% 5% 35% 5%",
				sec1: "2fr 3fr",
				sec2: "3fr 2fr",
				footer: "1fr 3fr 1fr",
			},
			gridTemplateRows: {
				sec2: "2fr 3fr",
			},
		},
	},
	plugins: [],
}
