/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			
			colors: {
				orange: {
					900: 'hsl(26, 100%, 55%)',
					1000: 'hsl(25, 100%, 94%)',
				},
				neutral: {
					100: 'hsl(223, 64%, 98%)',
					200: 'hsl(220, 14%, 75%)',
					300: 'hsl(219, 9%, 45%)',
					400: 'hsl(220, 13%, 13%)',
				},
			},
		},
	},
	plugins: [],
};
