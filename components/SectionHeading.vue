<template>
	<div class="grid items-end gap-4 md:grid-cols-[1fr_2fr] md:gap-10">
		<div class="flex flex-col gap-3">
			<p :class="['eyebrow', dark ? 'text-[#9a9388]' : 'text-muted']">
				{{ eyebrow }}
			</p>
			<h2 :class="['font-display text-[clamp(2rem,4.4vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em]', dark ? 'text-bg' : 'text-ink']">
				<slot />
			</h2>
		</div>
		<p :class="['max-w-[56ch] text-[clamp(1.125rem,1.5vw,1.375rem)] leading-normal', dark ? 'text-[#9a9388]' : 'text-ink/90']">
			{{ lede }}
		</p>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	eyebrow: string
	lede: string
	dark?: boolean
}>()
</script>
