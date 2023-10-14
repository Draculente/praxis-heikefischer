/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'baby-blue': '#D9D9D9',
			'not-white': "#EEE6DF",
			"grey": "#535353",
			'not-black': "#292929",
			...defaultTheme.colors
		},
		fontFamily: {
			serif: ['"Merriweather"', 'serif'],
		},
		extend: {
			backgroundImage: {
				'bg-pattern': "url('/images/background-graphic.svg')",
			}
		},
	},
	plugins: [],
}
