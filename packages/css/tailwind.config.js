import forms from '@tailwindcss/forms'
import colors from 'tailwindcss/colors'

const withAlphaValue = (varName) => `hsl(var(--${varName}) / <alpha-value>)`

/** @type {import('tailwindcss').Config} */
const config = {
	content: [
		'./src/**/*.{html,js,ts,svelte,tsx,html}',
		'./node_modules/@repo/css/**/*',
	],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		fontFamily: {
			sans: 'var(--font-sans)',
		},
		extend: {
			colors: {
				primary: colors.emerald,
				secondary: colors.rose,
				foreground: {
					brand: withAlphaValue('foreground-brand-color'),
					accent: withAlphaValue('foreground-accent-color'),
				},
				surface: {
					brand: {
						1: withAlphaValue('surface-brand-1-color'),
						2: withAlphaValue('surface-brand-2-color'),
					},
					accent: {
						1: withAlphaValue('surface-accent-1-color'),
					},
				},
			},
			aspectRatio: {
				'game-box': '2 / 3',
			},
		},
	},
	plugins: [forms],
}

/** @type {import('tailwindcss').Config} */
export default config
