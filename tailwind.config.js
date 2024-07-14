/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				repeatAutoFill: 'repeat(auto-fill,minmax(400px, 1fr))',
			},
			keyframes: {
				'spin-slow': {
					from: { transform: 'rotate(360deg)' },
				},
			},
			animation: {
				'spin-slow': 'spin-slow 5s linear infinite',
			},
		},
	},
	plugins: [],
};
