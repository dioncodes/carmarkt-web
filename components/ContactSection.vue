<template>
	<section id="kontakt" class="bg-warm py-section">
		<div class="site-container">
			<SectionHeading
				eyebrow="Kontakt"
				lede="Ansprechpartner: Mark Purushotham, staatlich gepr. Kfz-Techniker. Mit 25+ Jahren Selbständigkeit, vorher u. a. bei Fiat und TÜV-Rheinland."
			>
				Am besten:<br>
				kurz anrufen.
			</SectionHeading>

			<div class="mt-16 grid gap-3.5 md:grid-cols-2">
				<a
					v-for="item in contactLinks"
					:key="item.href"
					:href="item.href"
					:class="[
						'group flex items-center gap-4 rounded-[18px] border p-5 transition hover:-translate-y-0.5 hover:shadow-lift',
						item.primary ? 'border-ink bg-ink text-bg hover:border-accent hover:bg-accent' : 'border-line bg-surface text-ink hover:border-ink'
					]"
				>
					<span :class="['grid h-11 w-11 shrink-0 place-items-center rounded-full', item.primary ? 'bg-white/10 text-bg' : 'bg-warm text-ink']">
						<Phone v-if="item.type === 'phone'" class="h-5 w-5" />
						<Smartphone v-else-if="item.type === 'mobile'" class="h-5 w-5" />
						<Mail v-else class="h-5 w-5" />
					</span>
					<span class="flex min-w-0 flex-1 flex-col gap-0.5">
						<span :class="['font-mono text-[10.5px] font-medium uppercase tracking-[0.12em]', item.primary ? 'text-[#9a9388]' : 'text-muted']">{{ item.label }}</span>
						<span class="break-words font-display text-[22px] font-bold leading-tight tracking-tight">{{ item.value }}</span>
						<span :class="['mt-1 text-[13.5px]', item.primary ? 'text-[#9a9388]' : 'text-muted']" v-html="item.help" />
					</span>
					<span :class="['grid h-9 w-9 shrink-0 place-items-center rounded-full border', item.primary ? 'border-white/15' : 'border-line']">
						<ArrowUpRight class="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</span>
				</a>

				<div class="rounded-[18px] border border-line bg-surface p-5 md:col-span-2">
					<span class="font-mono text-[10.5px] font-medium uppercase tracking-[0.12em] text-muted">Öffnungszeiten</span>
					<div class="mt-3">
						<HoursList />
					</div>
					<p class="mt-3 text-[13px] leading-normal text-muted">
						Zeiten sind Richtwerte. Außerhalb der Öffnungszeiten gerne nach Absprache - rufen Sie einfach kurz an.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ArrowUpRight, Mail, Phone, Smartphone } from 'lucide-vue-next'
import { contactLinks } from '~/data/site'
</script>
