export const navItems = [
	{ label: 'Leistungen', href: '#leistungen' },
	{ label: 'Anfahrt', href: '#anfahrt' },
	{ label: 'Kontakt', href: '#kontakt' },
	{ label: 'Anfrage', href: '#anfrage' }
]

export const services = [
	'Kfz-Reparaturen',
	'Inspektion & Ölwechsel',
	'TÜV / Hauptuntersuchung',
	'Kaufberatung',
	'Reifen & Einlagerung',
	'Kaufvermittlung',
	'Unfallinstandsetzung',
	'Stellplätze'
]

export const contactLinks = [
	{
		label: 'Festnetz',
		value: '0208 / 385 479 60',
		help: 'Mo-Do <strong class="font-semibold text-current">ca. 09:30 - 13:00</strong> und nach Absprache.',
		href: 'tel:+4920838547960',
		type: 'phone',
		primary: true
	},
	{
		label: 'Mobil',
		value: '0172 / 217 88 78',
		help: 'Auch außerhalb der Öffnungszeiten für Termine.',
		href: 'tel:+491722178878',
		type: 'mobile',
		primary: false
	},
	{
		label: 'E-Mail',
		value: 'info@carmarkt.net',
		help: 'Für alles, was nicht eilt.',
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
	'Reifen / Einlagerung',
	'Kaufvermittlung',
	'Unfallinstandsetzung',
	'Stellplatz',
	'Sonstiges'
]

export const schedule = [
	{ day: 'Montag', open: '09:30', close: '13:00' },
	{ day: 'Dienstag', open: '09:30', close: '13:00' },
	{ day: 'Mittwoch', open: '09:30', close: '13:00' },
	{ day: 'Donnerstag', open: '09:30', close: '13:00' },
	{ day: 'Freitag', open: null, close: null, note: 'nach Absprache' },
	{ day: 'Samstag', open: null, close: null, note: 'nach Absprache' },
	{ day: 'Sonntag', open: null, close: null, note: 'nach Absprache' }
]
