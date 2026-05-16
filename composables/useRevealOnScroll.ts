import { onBeforeUnmount, onMounted } from 'vue'

export function useRevealOnScroll() {
	let observer: IntersectionObserver | undefined

	onMounted(() => {
		observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return
				}

				entry.target.classList.add('is-in')
				observer?.unobserve(entry.target)
			})
		}, {
			rootMargin: '0px 0px -10% 0px',
			threshold: 0.05
		})

		document.querySelectorAll('.reveal').forEach((element) => observer?.observe(element))
	})

	onBeforeUnmount(() => {
		observer?.disconnect()
	})
}
