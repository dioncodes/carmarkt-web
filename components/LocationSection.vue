<template>
	<section id="anfahrt" class="bg-dark py-section text-bg">
		<div class="site-container">
			<SectionHeading
				dark
				eyebrow="Anfahrt"
				lede="Direkt an der A40, im Hinterhof der TÜV-Nord Prüfstelle. Ein paar Hundert Meter von der Autobahn - gegenüber der Haltestelle Willy-Brandt-Schule."
			>
				Ausfahrt<br>
				Mülheim-Styrum.
			</SectionHeading>

			<div class="mt-16 grid items-stretch gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
				<LocationMap />

				<div class="reveal flex flex-col gap-8">
					<div class="border-y border-[#2a261f] py-5">
						<span class="info-label">Adresse</span>
						<span class="mt-1.5 block font-display text-xl font-semibold tracking-tight">
							Oberhausener Straße 213<br>
							45476 Mülheim an der Ruhr
						</span>
						<span class="mt-1 block text-sm text-[#9a9388]">Im Hinterhof der TÜV-Nord-Prüfstelle.</span>
					</div>

					<div class="-mt-1 flex flex-col gap-1">
						<div v-for="(step, index) in steps" :key="step" class="grid grid-cols-[40px_1fr] gap-4 border-b border-[#2a261f] py-4 text-base leading-normal">
							<span class="font-display text-[22px] font-bold leading-none text-[#9a9388]">{{ index + 1 }}</span>
							<div v-html="step" />
						</div>
					</div>

					<div class="flex items-start gap-4 rounded-[10px] bg-accent px-7 py-6 text-white">
						<Phone class="mt-0.5 h-5 w-5 shrink-0" />
						<div>
							<div class="font-display text-lg font-bold tracking-tight">Nicht direkt gefunden?</div>
							<div class="text-sm leading-normal opacity-95">Rufen Sie kurz an - wir helfen Ihnen weiter.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { Phone } from 'lucide-vue-next'

const steps = [
	'A40-Ausfahrt <strong class="font-semibold text-accent">Mülheim-Styrum</strong>, Richtung Mülheim.',
	'Nach <strong class="font-semibold text-accent">100 Metern</strong> auf der rechten Seite, Höhe <strong class="font-semibold text-accent">Haltestelle Willy-Brandt-Schule</strong>.',
	'Bitte rufen Sie kurz an. Wenn das Tor der Prüfstelle geöffnet ist, gehen Sie nach hinten durch.'
]
</script>
