export const navItems = [
	{ label: 'Leistungen', href: '/#leistungen' },
	{ label: 'Anfahrt', href: '/#anfahrt' },
	{ label: 'Kontakt', href: '/#kontakt' },
	{ label: 'Anfrage', href: '/#anfrage' }
]

export const business = {
	name: 'CarMarkt',
	legalName: 'CarMarkt - Fa. Purushotham',
	owner: 'Mark Purushotham',
	url: 'https://carmarkt.net',
	email: 'info@carmarkt.net',
	phone: '+4920838547960',
	mobile: '+491722178878',
	foundYear: 1999,
	priceRange: '€€',
	address: {
		streetAddress: 'Oberhausener Straße 213',
		postalCode: '45476',
		addressLocality: 'Mülheim an der Ruhr',
		addressRegion: 'Nordrhein-Westfalen',
		addressCountry: 'DE'
	},
	geo: {
		latitude: 51.45315697922975,
		longitude: 6.858428015286748
	},
	areasServed: [
		'Mülheim an der Ruhr',
		'Mülheim-Dümpten',
		'Mülheim-Styrum',
		'Oberhausen'
	]
}

export const services = [
	{
		name: 'Kfz-Reparaturen',
		description: 'Motor, Bremsen, Fahrwerk und Elektrik - für alle Marken.',
		icon: 'repair'
	},
	{
		name: 'Inspektion & Ölwechsel',
		description: 'Regelmäßige Wartung nach Herstellervorgaben.',
		icon: 'oil'
	},
	{
		name: 'TÜV / Hauptuntersuchung',
		description: 'Vorab-Check und Mängelbeseitigung vor der Prüfung.',
		icon: 'inspection'
	},
	{
		name: 'Kaufberatung',
		description: 'Gebrauchtwagen-Check, bevor Sie sich entscheiden.',
		icon: 'purchase'
	},
	{
		name: 'Unfallinstandsetzung',
		description: 'Schadensaufnahme und Reparatur nach einem Unfall.',
		icon: 'accident'
	}
]

export const contactLinks = [
	{
		label: 'Mobil',
		value: '0172 / 217 88 78',
		help: 'Am schnellsten erreichbar - auch für Terminabsprachen.',
		href: 'tel:+491722178878',
		type: 'mobile',
		primary: true
	},
	{
		label: 'Festnetz',
		value: '0208 / 385 479 60',
		help: 'Alternativ in der Werkstatt.',
		href: 'tel:+4920838547960',
		type: 'phone',
		primary: false
	},
	{
		label: 'E-Mail',
		value: 'info@carmarkt.net',
		help: 'Für Anfragen, die nicht eilen.',
		href: 'mailto:info@carmarkt.net',
		type: 'mail',
		primary: false
	}
]

export const requestReasons = [
	'Reparatur',
	'Inspektion / Ölwechsel',
	'TÜV / Hauptuntersuchung',
	'Kaufberatung',
	'Unfallinstandsetzung',
	'Sonstiges'
]
