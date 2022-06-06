const colors = require('tailwindcss/colors');
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			height: {
				128: '50rem',
			},
			minHeight: {
				'1/2': '50%',
				'1*2': '120%',
			},
			colors: {
				lime: colors.lime,
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out  infinite',
			},
			keyframes: {
				wiggle: {
					'0%, 100%': {transform: 'scale(0);opacity: 0'},
					'50%': {transform: 'scale(0.5);opacity: 1'},
				},
			},
		},
	},
	plugins: [],
};
