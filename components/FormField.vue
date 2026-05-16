<template>
	<div class="mb-[18px] flex flex-col gap-1.5">
		<label class="flex items-center gap-1.5 font-mono text-[10.5px] font-medium uppercase tracking-[0.12em] text-muted" :for="id">
			{{ label }}
			<span v-if="required" class="font-bold text-accent">*</span>
			<span v-if="optional" class="font-body text-xs font-medium normal-case tracking-normal text-muted/70">(optional)</span>
		</label>
		<slot />
		<p v-if="error" class="text-sm text-accent">{{ error }}</p>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	id: string
	label: string
	required?: boolean
	optional?: boolean
	error?: string
}>()
</script>
