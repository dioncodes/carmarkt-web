<template>
	<section id="leistungen" class="bg-bg py-section">
		<div class="site-container">
			<SectionHeading
				eyebrow="Leistungen"
				lede="Die freie Kfz-Werkstatt in Mülheim für Reparatur, Wartung, TÜV/HU und alles, was rund ums Auto zuverlässig erledigt werden muss."
			>
				Unser Service
			</SectionHeading>

			<ul class="mt-16 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
				<li
					v-for="service in services"
					:key="service.name"
					class="flex flex-col rounded-[18px] border border-line bg-surface p-6"
				>
					<component :is="serviceIcons[service.icon]" class="h-6 w-6 text-accent" aria-hidden="true" />
					<h3 class="mt-5 font-display text-[22px] font-bold leading-tight tracking-tight">
						{{ service.name }}
					</h3>
					<p class="mt-1.5 text-[15px] leading-normal text-muted">
						{{ service.description }}
					</p>
				</li>

				<li class="flex flex-col rounded-[18px] bg-dark p-6 text-bg">
					<span class="font-display text-[11px] font-semibold uppercase tracking-[0.1em] text-[#9a9fa7]">Vor Ort</span>
					<h3 class="mt-3 font-display text-[22px] font-bold leading-tight tracking-tight">
						TÜV-Nord prüft direkt in der Werkstatt
					</h3>
					<p class="mt-1.5 text-[15px] leading-normal text-[#9a9fa7]">
						Flexibel geprüft - HU und Werkstatt in einem Termin erledigt.
					</p>
					<a
						class="group mt-auto inline-flex w-fit items-center gap-1.5 pt-5 font-semibold hover:text-white"
						href="/#anfrage"
					>
						Termin anfragen
						<ArrowRight class="h-4 w-4 text-accent transition group-hover:translate-x-0.5" />
					</a>
				</li>
			</ul>
		</div>
	</section>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { ArrowRight, CarFront, ClipboardCheck, Droplet, Search, Wrench } from 'lucide-vue-next'
import { services } from '~/data/site'

const serviceIcons: Record<string, Component> = {
	repair: Wrench,
	oil: Droplet,
	inspection: ClipboardCheck,
	purchase: Search,
	accident: CarFront
}
</script>
