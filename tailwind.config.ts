import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
	content: [
		'./app.vue',
		'./components/**/*.{vue,js,ts}',
		'./composables/**/*.{js,ts}',
		'./data/**/*.{js,ts}'
	],
	theme: {
		extend: {
			colors: {
				bg: 'rgb(var(--color-bg) / <alpha-value>)',
				'warm': 'rgb(var(--color-warm) / <alpha-value>)',
				surface: 'rgb(var(--color-surface) / <alpha-value>)',
				ink: 'rgb(var(--color-ink) / <alpha-value>)',
				muted: 'rgb(var(--color-muted) / <alpha-value>)',
				line: 'rgb(var(--color-line) / <alpha-value>)',
				accent: 'rgb(var(--color-accent) / <alpha-value>)',
				'dark': 'rgb(var(--color-dark) / <alpha-value>)',
				'dark-2': 'rgb(var(--color-dark-2) / <alpha-value>)'
			},
			fontFamily: {
				display: ['Archivo', 'Helvetica Neue', 'system-ui', 'sans-serif'],
				body: ['Manrope', 'Helvetica Neue', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
			},
			maxWidth: {
				site: '1320px'
			},
			boxShadow: {
				soft: '0 1px 2px rgba(15, 12, 8, 0.05), 0 1px 3px rgba(15, 12, 8, 0.04)',
				lift: '0 4px 14px rgba(15, 12, 8, 0.06), 0 2px 4px rgba(15, 12, 8, 0.04)',
				deep: '0 24px 50px -16px rgba(15, 12, 8, 0.18), 0 4px 12px rgba(15, 12, 8, 0.06)'
			}
		}
	},
	plugins: []
}
