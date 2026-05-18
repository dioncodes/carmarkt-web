<template>
	<NuxtLink
		:to="to"
		:class="[
			'group inline-flex h-12 items-center justify-center gap-2.5 rounded-full px-5 text-[0.95rem] font-semibold transition duration-200 hover:-translate-y-0.5 hover:shadow-lift',
			size === 'lg' && 'h-14 px-7 text-base',
			size === 'sm' && 'h-10 px-4 text-sm',
			variantClasses
		]"
	>
		<slot />
	</NuxtLink>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
	to: string
	variant?: 'accent' | 'ghost' | 'dark'
	size?: 'sm' | 'md' | 'lg'
}>(), {
	variant: 'accent',
	size: 'md'
})

const variantClasses = computed(() => ({
	accent: 'bg-accent text-white hover:bg-[#8a0810]',
	ghost: 'border border-line bg-transparent text-ink hover:border-ink hover:bg-surface',
	dark: 'border border-white/20 bg-transparent text-bg hover:bg-white/10'
})[props.variant])
</script>
