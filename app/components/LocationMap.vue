<template>
	<div class="reveal relative min-h-[340px] overflow-hidden rounded-[18px] border border-[#2a261f] bg-[#0d0c09] md:min-h-[460px]">
		<iframe
			class="absolute inset-0 h-full w-full"
			:src="embedUrl"
			title="Google Maps Standort von CarMarkt"
			loading="lazy"
			allowfullscreen
			referrerpolicy="no-referrer-when-downgrade"
		/>

		<div class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0d0c09]/90 via-[#0d0c09]/55 to-transparent p-4 sm:p-5">
			<div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<div class="font-display text-xl font-bold tracking-tight text-white">CarMarkt</div>
					<div class="mt-0.5 text-sm leading-snug text-white/75">
						Oberhausener Straße 213, 45476 Mülheim an der Ruhr
					</div>
				</div>

				<a
					:href="mapsUrl"
					target="_blank"
					rel="noopener noreferrer"
					class="pointer-events-auto inline-flex w-fit items-center gap-2 rounded-[8px] bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#930914] focus:outline-none focus:ring-2 focus:ring-white/70"
				>
					<ExternalLink class="h-4 w-4" />
					Google Maps
				</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ExternalLink } from 'lucide-vue-next'

const mapsUrl = 'https://maps.app.goo.gl/6XgUftvfES33CBhM7'
const embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2458.405451399258!2d6.858428015286748!3d51.45315697922975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c24ed14a0a49%3A0x83f3e9b09ac6ecd3!2sCarMarkt%20(Fa.%20Purushotham)!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde'
</script>
