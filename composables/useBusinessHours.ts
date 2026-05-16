import { computed, ref } from 'vue'
import { schedule } from '~/data/site'

const getTodayIndex = () => {
	const now = new Date()

	return (now.getDay() + 6) % 7
}

const toMinutes = (time: string) => {
	const [hours, minutes] = time.split(':').map(Number)

	return hours * 60 + minutes
}

export function useBusinessHours() {
	const now = ref(new Date())
	const todayIndex = computed(getTodayIndex)
	const formatHours = (open: string, close: string) => `<strong class="font-semibold">ca. ${open} - ${close}</strong> und nach Absprache`

	const rows = computed(() => schedule.map((item, index) => ({
		...item,
		isToday: index === todayIndex.value,
		isClosed: !item.open,
		hoursText: item.open && item.close ? formatHours(item.open, item.close) : item.note || 'geschlossen'
	})))

	const nextOpen = computed(() => {
		for (let offset = 1; offset <= schedule.length; offset += 1) {
			const item = schedule[(todayIndex.value + offset) % schedule.length]

			if (item.open) {
				return `Wieder geöffnet am ${item.day} ab ca. ${item.open} Uhr`
			}
		}

		return 'Termin nach Vereinbarung - bitte anrufen.'
	})

	const status = computed(() => {
		const item = schedule[todayIndex.value]

		if (!item.open || !item.close) {
			return {
				label: 'Nach Absprache',
				utilityLabel: 'Heute nach Absprache',
				next: nextOpen.value,
				open: false
			}
		}

		const current = now.value.getHours() * 60 + now.value.getMinutes()
		const opens = toMinutes(item.open)
		const closes = toMinutes(item.close)

		if (current >= opens && current < closes) {
			return {
				label: 'Geöffnet',
				utilityLabel: `Heute geöffnet · bis ${item.close}`,
				next: `Schließt heute ca. ${item.close} Uhr - danach nach Absprache`,
				open: true
			}
		}

		if (current < opens) {
			return {
				label: 'Bald geöffnet',
				utilityLabel: `Heute ab ${item.open} geöffnet`,
				next: `Öffnet heute ca. ${item.open} Uhr und nach Absprache`,
				open: false
			}
		}

		return {
			label: 'Geschlossen',
			utilityLabel: 'Heute bereits geschlossen',
			next: nextOpen.value,
			open: false
		}
	})

	return {
		rows,
		status
	}
}
