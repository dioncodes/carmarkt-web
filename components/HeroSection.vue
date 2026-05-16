<template>
	<section id="top" class="relative overflow-hidden pb-0 pt-[clamp(3rem,6vw,5.5rem)]">
		<div class="site-container">
			<div class="flex max-w-[900px] flex-col gap-7 pb-[clamp(3rem,7vw,7rem)] pt-[clamp(2.5rem,6vw,6rem)]">
				<p class="eyebrow reveal">
					CarMarkt · Mark Purushotham · Mülheim an der Ruhr · seit 1999
				</p>
				<h1 class="reveal whitespace-pre-line font-display text-[clamp(3rem,8vw,8rem)] font-extrabold leading-[0.92] tracking-[-0.045em] text-ink">
					<span class="text-accent">CarMarkt.</span>
					Freie Werkstatt in Mülheim.
				</h1>
				<p class="reveal max-w-[56ch] text-[clamp(1.125rem,1.6vw,1.375rem)] leading-normal text-ink/90">
					Direkt an der A40. Mo-Do <strong class="font-semibold text-ink">ca. 09:30 - 13:00</strong> und nach Absprache. Rufen Sie am besten kurz an.
				</p>
				<div class="reveal mt-2 flex flex-wrap gap-3">
					<AppButton to="tel:+4920838547960" size="lg">
						<Phone class="h-4 w-4" />
						0208 / 385 479 60
					</AppButton>
					<AppButton to="/#anfahrt" variant="ghost" size="lg">
						<MapPin class="h-4 w-4" />
						Anfahrt ansehen
					</AppButton>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { MapPin, Phone } from 'lucide-vue-next'
</script>
