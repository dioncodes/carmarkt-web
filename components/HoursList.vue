<template>
	<div class="flex flex-col gap-3">
		<div class="grid gap-0">
			<div
				v-for="row in rows"
				:key="row.day"
				:class="[
					'grid grid-cols-[110px_1fr_auto] items-baseline gap-4 border-b border-[#e6e1d4] py-2.5 text-[15px] last:border-b-0',
					row.isClosed && 'text-muted'
				]"
			>
				<span :class="['font-mono text-xs uppercase tracking-[0.08em]', row.isToday ? 'font-bold text-accent' : 'text-muted']">{{ row.day }}</span>
				<span :class="row.isClosed ? 'italic text-muted' : 'text-ink'" v-html="row.hoursText" />
				<span class="font-mono text-[10.5px] uppercase tracking-[0.1em] text-accent">{{ row.isToday ? 'Heute' : '' }}</span>
			</div>
		</div>

		<div class="flex flex-wrap items-center gap-3 border-t border-line pt-3">
			<span :class="['font-display text-lg font-bold tracking-tight', status.open ? 'text-[#1a9851]' : 'text-accent']">
				{{ status.label }}
			</span>
			<span class="text-sm text-muted">{{ status.next }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
const { rows, status } = useBusinessHours()
</script>
