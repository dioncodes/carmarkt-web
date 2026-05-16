<template>
	<main>
		<HeroSection />
		<ServicesSection />
		<LocationSection />
		<ContactSection />
		<RequestFormSection />
	</main>
</template>

<script setup lang="ts">
import { business, schedule, services } from '~/data/site'

const siteUrl = String(useRuntimeConfig().public.siteUrl || business.url).replace(/\/$/, '')
const address = business.address
const description = 'CarMarkt ist die freie Kfz-Werkstatt von Mark Purushotham in Mülheim an der Ruhr. Reparatur, Inspektion, Ölwechsel, TÜV/HU vor Ort und Termine nach Absprache.'
const schemaDays: Record<string, string> = {
	Montag: 'https://schema.org/Monday',
	Dienstag: 'https://schema.org/Tuesday',
	Mittwoch: 'https://schema.org/Wednesday',
	Donnerstag: 'https://schema.org/Thursday',
	Freitag: 'https://schema.org/Friday',
	Samstag: 'https://schema.org/Saturday',
	Sonntag: 'https://schema.org/Sunday'
}

const localBusinessJsonLd = {
	'@context': 'https://schema.org',
	'@type': ['AutoRepair', 'LocalBusiness'],
	'@id': `${siteUrl}/#carmarkt`,
	name: business.name,
	legalName: business.legalName,
	url: siteUrl,
	description,
	email: business.email,
	telephone: business.phone,
	priceRange: business.priceRange,
	foundingDate: String(business.foundYear),
	address: {
		'@type': 'PostalAddress',
		streetAddress: address.streetAddress,
		postalCode: address.postalCode,
		addressLocality: address.addressLocality,
		addressRegion: address.addressRegion,
		addressCountry: address.addressCountry
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: business.geo.latitude,
		longitude: business.geo.longitude
	},
	areaServed: business.areasServed.map((area) => ({
		'@type': 'Place',
		name: area
	})),
	hasMap: 'https://maps.app.goo.gl/6XgUftvfES33CBhM7',
	openingHoursSpecification: schedule
		.filter((item) => item.open && item.close)
		.map((item) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: schemaDays[item.day],
			opens: item.open,
			closes: item.close
		})),
	makesOffer: services.map((service) => ({
		'@type': 'Offer',
		itemOffered: {
			'@type': 'Service',
			name: service
		}
	})),
	founder: {
		'@type': 'Person',
		name: business.owner,
		jobTitle: 'Staatlich geprüfter Kfz-Techniker'
	}
}

const personJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	'@id': `${siteUrl}/#mark-purushotham`,
	name: business.owner,
	jobTitle: 'Staatlich geprüfter Kfz-Techniker',
	worksFor: {
		'@id': `${siteUrl}/#carmarkt`
	}
}

useHead({
	link: [
		{ rel: 'canonical', href: `${siteUrl}/` }
	],
	script: [
		{
			key: 'structured-data',
			type: 'application/ld+json',
			children: JSON.stringify([localBusinessJsonLd, personJsonLd])
		}
	]
})
</script>
