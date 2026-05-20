export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/turnstile'],
	turnstile: {
		siteKey: process.env.NUXT_PUBLIC_TURNSTILE_SITE_KEY
	},
	runtimeConfig: {
		resendApiKey: '',
		contactSenderEmail: '',
		contactSenderName: 'CarMarkt Website',
		contactRecipientEmail: '',
		turnstile: {
			secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY || process.env.TURNSTILE_SECRET_KEY
		},
		public: {
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://carmarkt.net'
		}
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'de'
			},
			title: 'CarMarkt | Freie Kfz-Werkstatt in Mülheim an der Ruhr',
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					name: 'description',
					content: 'CarMarkt ist die freie Kfz-Werkstatt von Mark Purushotham in Mülheim an der Ruhr. Reparatur, Inspektion, Ölwechsel, TÜV/HU vor Ort und Termine nach Absprache.'
				},
				{ name: 'robots', content: 'index, follow' },
				{ name: 'theme-color', content: '#15120e' },
				{
					name: 'keywords',
					content: 'CarMarkt, Mark Purushotham, freie Werkstatt Mülheim, Werkstatt Mülheim Dümpten, Kfz Werkstatt Mülheim, TÜV Mülheim, Inspektion Mülheim'
				},
				{ property: 'og:type', content: 'website' },
				{ property: 'og:locale', content: 'de_DE' },
				{ property: 'og:site_name', content: 'CarMarkt' },
				{ property: 'og:title', content: 'CarMarkt | Freie Kfz-Werkstatt in Mülheim an der Ruhr' },
				{
					property: 'og:description',
					content: 'Freie Kfz-Werkstatt von Mark Purushotham in Mülheim an der Ruhr - Reparatur, Inspektion, Ölwechsel und TÜV/HU vor Ort.'
				},
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:title', content: 'CarMarkt | Freie Kfz-Werkstatt in Mülheim an der Ruhr' },
				{
					name: 'twitter:description',
					content: 'Freie Kfz-Werkstatt von Mark Purushotham in Mülheim an der Ruhr.'
				}
			],
			link: [
				{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
				{ rel: 'shortcut icon', href: '/favicon.svg' },
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Manrope:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap'
				}
			],
			script: [
				{
					src: 'https://cdn.visitors.now/v.js',
					'data-token': '8e5d3bed-08f2-452b-8a19-066afb9abe5a'
				}
			]
		}
	},
	css: ['~/assets/css/main.css']
})
