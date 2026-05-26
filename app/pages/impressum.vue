<template>
	<main class="bg-bg py-section">
		<div class="site-container">
			<div class="max-w-[920px]">
				<p class="eyebrow">Rechtliches</p>
				<h1 class="mt-6 font-display text-[clamp(3rem,8vw,7rem)] font-extrabold leading-[0.9] tracking-tight">
					Impressum.
				</h1>
				<p class="mt-8 max-w-[64ch] text-lg leading-normal text-muted">
					Anbieterkennzeichnung nach § 5 Digitale-Dienste-Gesetz (DDG).
				</p>
			</div>

			<article class="legal-copy mt-14">
				<section>
					<h2>Anbieter</h2>
					<p>
						CarMarkt - Fa. Purushotham<br>
						Inhaber: Mark Purushotham<br>
						Oberhausener Straße 213<br>
						45476 Mülheim an der Ruhr<br>
						Deutschland
					</p>
				</section>

				<section>
					<h2>Kontakt</h2>
					<p>
						Telefon: <a href="tel:+4920838547960">0208 / 385 479 60</a><br>
						Mobil: <a href="tel:+491722178878">0172 / 217 88 78</a><br>
						E-Mail: <a href="mailto:info@carmarkt.net">info@carmarkt.net</a><br>
						Website: <a href="https://carmarkt.net">https://carmarkt.net</a>
					</p>
				</section>

				<section>
					<h2>Berufs- und Aufsichtsangaben</h2>
					<p>
						Angeboten werden Leistungen im Kraftfahrzeugtechniker-Handwerk. Zuständige Handwerkskammer ist nach derzeitigem Stand die
						Handwerkskammer Düsseldorf, Georg-Schulhoff-Platz 1, 40221 Düsseldorf,
						<a href="https://www.hwk-duesseldorf.de" rel="noopener noreferrer">https://www.hwk-duesseldorf.de</a>.
					</p>
					<p>
						Berufsrechtliche Regelungen ergeben sich insbesondere aus der Handwerksordnung (HwO), abrufbar unter
						<a href="https://www.gesetze-im-internet.de/hwo/" rel="noopener noreferrer">https://www.gesetze-im-internet.de/hwo/</a>.
					</p>
				</section>

				<section>
					<h2>Verantwortlich für Inhalte</h2>
					<p>
						Verantwortlich im Sinne von § 18 Abs. 2 Medienstaatsvertrag (MStV), soweit journalistisch-redaktionelle Inhalte angeboten werden:<br>
						Mark Purushotham, Oberhausener Straße 213, 45476 Mülheim an der Ruhr.
					</p>
				</section>

				<section>
					<h2>Verbraucherstreitbeilegung</h2>
					<p>
						Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
					</p>
				</section>

				<section>
					<h2>Haftung für Inhalte</h2>
					<p>
						Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch
						keine Gewähr übernommen werden. Gesetzliche Verantwortlichkeiten, insbesondere für eigene Inhalte, bleiben unberührt.
					</p>
				</section>

				<section>
					<h2>Haftung für Links</h2>
					<p>
						Diese Website kann Links zu externen Websites Dritter enthalten, auf deren Inhalte wir keinen Einfluss haben. Für fremde Inhalte ist
						stets der jeweilige Anbieter oder Betreiber der verlinkten Seiten verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der
						Verlinkung nicht erkennbar. Bei Bekanntwerden von Rechtsverletzungen werden entsprechende Links entfernt.
					</p>
				</section>

				<section>
					<h2>Urheberrecht</h2>
					<p>
						Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung,
						Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der vorherigen Zustimmung des jeweiligen
						Rechteinhabers, soweit keine gesetzliche Erlaubnis besteht.
					</p>
				</section>

				<p class="legal-updated">Stand: 16. Mai 2026</p>
			</article>
		</div>
	</main>
</template>

<script setup lang="ts">
const siteUrl = String(useRuntimeConfig().public.siteUrl || 'https://carmarkt.net').replace(/\/$/, '')

useHead({
	title: 'Impressum | CarMarkt',
	meta: [
		{
			name: 'description',
			content: 'Impressum und Anbieterkennzeichnung von CarMarkt - Fa. Purushotham in Mülheim an der Ruhr.'
		},
		{ property: 'og:title', content: 'Impressum | CarMarkt' },
		{
			property: 'og:description',
			content: 'Impressum und Anbieterkennzeichnung von CarMarkt - Fa. Purushotham in Mülheim an der Ruhr.'
		},
		{ name: 'twitter:title', content: 'Impressum | CarMarkt' },
		{
			name: 'twitter:description',
			content: 'Impressum und Anbieterkennzeichnung von CarMarkt - Fa. Purushotham in Mülheim an der Ruhr.'
		}
	],
	link: [
		{ rel: 'canonical', href: `${siteUrl}/impressum` }
	]
})
</script>
