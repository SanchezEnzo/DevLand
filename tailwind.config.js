/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				repeatAutoFill: 'repeat(auto-fill,minmax(300px, 1fr))',
				repeatAutoFillMobile: 'repeat(auto-fill,minmax(250px, 1fr))',
			},
			keyframes: {
				'spin-slow': {
					from: { transform: 'rotate(360deg)' },
				},
			},
			animation: {
				'spin-slow': 'spin-slow 5s linear infinite',
			},
			fontFamily: {
				'rubik-doodle-shadow': ['Rubik Doodle Shadow', 'system-ui'],
			},
		},
	},
	plugins: [],
};
