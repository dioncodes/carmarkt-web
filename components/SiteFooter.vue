<template>
	<footer class="bg-dark py-20 pb-8 text-bg">
		<div class="site-container">
			<div class="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
				<div>
					<div class="mb-5 h-[52px]">
						<AppLogo light />
					</div>
					<p class="max-w-[32ch] text-[15px] leading-normal text-[#9a9388]">
						Freie Kfz-Werkstatt in Mülheim an der Ruhr - seit 1999. Inhaber: Mark Purushotham.
					</p>
				</div>

				<div>
					<h4 class="footer-heading">Adresse</h4>
					<p class="m-0 text-[15.5px] leading-normal text-bg">
						Oberhausener Straße 213<br>
						45476 Mülheim an der Ruhr<br>
						<span class="text-[#9a9388]">A40 · Ausfahrt Mülheim-Styrum</span>
					</p>
				</div>

				<div>
					<h4 class="footer-heading">Kontakt</h4>
					<ul class="flex flex-col gap-3">
						<li><a class="footer-link" href="tel:+4920838547960">0208 / 385 479 60</a></li>
						<li><a class="footer-link" href="tel:+491722178878">Mobil: 0172 / 217 88 78</a></li>
						<li><a class="footer-link" href="mailto:info@carmarkt.net">info@carmarkt.net</a></li>
					</ul>
				</div>

				<div>
					<h4 class="footer-heading">Rechtliches</h4>
					<ul class="flex flex-col gap-3">
						<li><a class="footer-link" href="#">Impressum</a></li>
						<li><a class="footer-link" href="#">Datenschutz</a></li>
					</ul>
				</div>
			</div>

			<div class="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#2a261f] pt-6 font-mono text-[11.5px] tracking-[0.06em] text-[#9a9388]">
				<span>© 1999-2026 CarMarkt · Mark Purushotham</span>
				<span>Mülheim an der Ruhr</span>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
</script>
