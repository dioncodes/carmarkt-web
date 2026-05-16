<template>
	<header>
		<div class="bg-dark text-xs font-mono tracking-[0.06em] text-[#9a9388]">
			<div class="site-container flex h-9 items-center justify-between gap-4 overflow-hidden">
				<div class="flex min-w-0 items-center gap-5">
					<span :class="['inline-flex items-center gap-2 whitespace-nowrap', !status.open && 'closed-dot']">
						<span class="live-dot" />
						<span>{{ status.utilityLabel }}</span>
					</span>
					<span class="text-[#3a3530]">·</span>
					<span class="hidden whitespace-nowrap sm:inline">Oberhausener Str. 213, Mülheim · direkt an der A40</span>
				</div>
				<div class="hidden items-center gap-4 whitespace-nowrap md:flex">
					<a class="hover:text-bg" href="tel:+4920838547960">0208 / 385 479 60</a>
					<span class="text-[#3a3530]">·</span>
					<a class="hover:text-bg" href="tel:+491722178878">Mobil 0172 / 217 88 78</a>
				</div>
			</div>
		</div>

		<div
			:class="[
				'sticky top-0 z-50 border-b backdrop-blur transition duration-300',
				isScrolled ? 'border-line bg-bg/95' : 'border-transparent bg-bg/90'
			]"
		>
			<div class="site-container flex h-[84px] items-center justify-between gap-6">
				<a href="/" class="block h-12" aria-label="CarMarkt Startseite" @click="closeMenu">
					<AppLogo />
				</a>

				<nav class="hidden lg:block" aria-label="Hauptnavigation">
					<ul class="flex items-center gap-1">
						<li v-for="item in navItems" :key="item.href">
							<a
								class="inline-flex rounded-full px-3.5 py-2.5 text-[15px] font-medium text-ink/90 transition hover:bg-ink/5 hover:text-ink"
								:href="item.href"
							>
								{{ item.label }}
							</a>
						</li>
					</ul>
				</nav>

				<div class="flex items-center gap-2">
					<AppButton to="tel:+4920838547960" size="sm">
						<Phone class="h-3.5 w-3.5" />
						Anrufen
					</AppButton>
					<button
						:class="[
							'relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden',
							menuOpen && 'is-open'
						]"
						type="button"
						aria-label="Menü öffnen"
						:aria-expanded="menuOpen"
						@click="menuOpen = !menuOpen"
					>
						<span class="burger-line" />
					</button>
				</div>
			</div>
		</div>

		<div
			:class="[
				'fixed inset-x-0 top-[120px] z-40 bg-bg px-[clamp(20px,4vw,56px)] pb-10 pt-6 transition duration-300 lg:hidden',
				menuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'
			]"
		>
			<ul>
				<li v-for="item in navItems" :key="item.href" class="border-b border-line">
					<a class="flex py-4 font-display text-3xl font-semibold tracking-tight" :href="item.href" @click="closeMenu">
						{{ item.label }}
					</a>
				</li>
			</ul>
			<div class="mt-8 grid gap-3">
				<AppButton to="tel:+4920838547960" size="lg">0208 / 385 479 60</AppButton>
				<AppButton to="tel:+491722178878" variant="ghost" size="lg">Mobil: 0172 / 217 88 78</AppButton>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
import { Phone } from 'lucide-vue-next'
import { navItems } from '~/data/site'

const menuOpen = ref(false)
const isScrolled = ref(false)
const { status } = useBusinessHours()

const closeMenu = () => {
	menuOpen.value = false
}

const handleScroll = () => {
	isScrolled.value = window.scrollY > 8
}

watch(menuOpen, (open) => {
	if (import.meta.client) {
		document.body.style.overflow = open ? 'hidden' : ''
	}
})

onMounted(() => {
	handleScroll()
	window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll)
	document.body.style.overflow = ''
})
</script>
