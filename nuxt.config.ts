export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss'],
	runtimeConfig: {
		resendApiKey: process.env.RESEND_API_KEY,
		contactSenderEmail: process.env.CONTACT_SENDER_EMAIL,
		contactSenderName: process.env.CONTACT_SENDER_NAME || 'CarMarkt Website',
		contactRecipientEmail: process.env.CONTACT_RECIPIENT_EMAIL
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'de'
			},
			title: 'CarMarkt - Kfz-Werkstatt Mülheim an der Ruhr',
			meta: [
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{
					name: 'description',
					content: 'CarMarkt - freie Kfz-Werkstatt von Mark Purushotham, direkt an der A40 in Mülheim an der Ruhr. Reparatur, Inspektion, TÜV vor Ort. Termin nach Absprache.'
				}
			],
			link: [
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
