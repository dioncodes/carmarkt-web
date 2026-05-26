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
import { business, services } from '~/data/site'

const siteUrl = String(useRuntimeConfig().public.siteUrl || business.url).replace(/\/$/, '')
const address = business.address
const description = 'CarMarkt ist die freie Kfz-Werkstatt von Mark Purushotham in Mülheim an der Ruhr. Reparatur, Inspektion, Ölwechsel und TÜV/HU vor Ort - Termine ausschließlich nach Vereinbarung.'

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
			innerHTML: JSON.stringify([localBusinessJsonLd, personJsonLd])
		}
	]
})
</script>
