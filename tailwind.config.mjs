/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		// Define custom utilities
		// Use the "::-webkit-scrollbar" selector to target the webkit scrollbar
		// Set "display: none" to hide the scrollbar
		// Note: This class may not hide the scrollbar in all cases, depending on the browser and scrollbar styling
		scrollbar: {
		  hide: {
			'::-webkit-scrollbar': {
			  display: 'none',
			},
		  },
		},
	  },
	},
	plugins: [],
  };
  