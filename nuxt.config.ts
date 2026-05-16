export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss'],
	runtimeConfig: {
		resendApiKey: '',
		contactSenderEmail: '',
		contactSenderName: 'CarMarkt Website',
		contactRecipientEmail: '',
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
				{ property: 'og:url', content: 'https://carmarkt.net/' },
				{ property: 'og:image', content: 'https://carmarkt.net/og-image.png' },
				{ property: 'og:image:type', content: 'image/png' },
				{ property: 'og:image:width', content: '1200' },
				{ property: 'og:image:height', content: '630' },
				{ property: 'og:image:alt', content: 'CarMarkt - Freie Werkstatt in Mülheim an der Ruhr' },
				{ name: 'twitter:card', content: 'summary_large_image' },
				{ name: 'twitter:title', content: 'CarMarkt | Freie Kfz-Werkstatt in Mülheim an der Ruhr' },
				{
					name: 'twitter:description',
					content: 'Freie Kfz-Werkstatt von Mark Purushotham in Mülheim an der Ruhr.'
				},
				{ name: 'twitter:image', content: 'https://carmarkt.net/og-image.png' }
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
			]
		}
	},
	css: ['~/assets/css/main.css']
})
