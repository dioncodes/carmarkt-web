<template>
	<div
		:class="[
			'absolute whitespace-nowrap rounded border border-white/15 bg-white/[0.08] px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em]',
			muted ? 'text-[#9a9388]' : 'text-bg'
		]"
	>
		<slot />
	</div>
</template>

<script setup lang="ts">
defineProps<{
	muted?: boolean
}>()
</script>
