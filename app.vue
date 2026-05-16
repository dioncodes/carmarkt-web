<template>
	<div>
		<AppHeader />
		<NuxtPage />
		<SiteFooter />
	</div>
</template>

<script setup lang="ts">
useRevealOnScroll()

const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, '')
const ogImage = `${siteUrl}/og-image.png`

useHead({
	meta: [
		{ property: 'og:url', content: `${siteUrl}/` },
		{ property: 'og:image', content: ogImage },
		{ property: 'og:image:secure_url', content: ogImage },
		{ property: 'og:image:type', content: 'image/png' },
		{ property: 'og:image:width', content: '1200' },
		{ property: 'og:image:height', content: '630' },
		{ property: 'og:image:alt', content: 'CarMarkt - Freie Werkstatt in Mülheim an der Ruhr' },
		{ name: 'twitter:image', content: ogImage }
	]
})
</script>
