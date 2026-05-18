<template>
	<section id="leistungen" class="bg-bg py-section">
		<div class="site-container">
			<SectionHeading
				eyebrow="Leistungen"
				lede="Die freie Kfz-Werkstatt in Mülheim für Reparatur, Wartung, TÜV/HU und alles, was rund ums Auto zuverlässig erledigt werden muss."
			>
				Unser Service
			</SectionHeading>

			<ul class="mt-16 flex flex-wrap gap-x-3 gap-y-2.5">
				<li
					v-for="service in services"
					:key="service"
					class="rounded-full border border-line bg-surface px-4 py-3 font-display text-[clamp(1.125rem,1.8vw,1.625rem)] font-semibold tracking-tight transition hover:border-ink"
				>
					{{ service }}
				</li>
			</ul>

			<p class="mt-8 max-w-[56ch] border-t border-line pt-6 text-base text-muted">
				TÜV-Nord prüft flexibel direkt vor Ort - HU und Werkstatt also in einem Termin erledigt.
			</p>
		</div>
	</section>
</template>

<script setup lang="ts">
import { services } from '~/data/site'
</script>
