<template>
	<section id="anfrage" class="bg-bg py-section">
		<div class="site-container">
			<SectionHeading
				eyebrow="Nachricht"
				lede="Ein Anruf reicht meistens. Wenn es nicht eilt oder Sie lieber alles schriftlich haben, nutzen Sie gern das Formular. Wir antworten am selben oder nächsten Werktag."
			>
				Oder kurz<br>
				schreiben.
			</SectionHeading>

			<form
				v-if="!submitted"
				class="mx-auto mt-16 max-w-[760px] rounded-[18px] border border-line bg-surface p-[clamp(1.5rem,4vw,2.75rem)] shadow-soft"
				novalidate
				@submit.prevent="submit"
			>
				<FormField id="reason" label="Worum geht es?" optional :error="errors.reason">
					<div class="relative">
						<select id="reason" v-model="form.reason" name="reason" class="form-control appearance-none pr-10">
							<option value="">-- bitte auswählen --</option>
							<option v-for="reason in requestReasons" :key="reason">{{ reason }}</option>
						</select>
						<ChevronDown class="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
					</div>
				</FormField>

				<div class="grid gap-0 sm:grid-cols-2 sm:gap-3.5">
					<FormField id="name" label="Name" required :error="errors.name">
						<input id="name" v-model.trim="form.name" class="form-control" name="name" type="text" autocomplete="name">
					</FormField>
					<FormField id="email" label="E-Mail" required :error="errors.email">
						<input id="email" v-model.trim="form.email" class="form-control" name="email" type="text" inputmode="email" autocomplete="email">
					</FormField>
				</div>

				<div class="grid gap-0 sm:grid-cols-2 sm:gap-3.5">
					<FormField id="phone" label="Telefon" optional :error="errors.phone">
						<input id="phone" v-model.trim="form.phone" class="form-control" name="phone" type="tel" autocomplete="tel" placeholder="0170 0000000">
					</FormField>
					<FormField id="when" label="Wunschtermin" optional :error="errors.when">
						<input id="when" v-model="form.when" class="form-control min-h-[47px]" name="when" type="datetime-local">
					</FormField>
				</div>

				<FormField id="message" label="Nachricht" required :error="errors.message">
					<textarea
						id="message"
						v-model.trim="form.message"
						class="form-control min-h-[110px] resize-y leading-normal"
						name="message"
						rows="5"
						placeholder="Marke / Modell, Anliegen, gewünschter Termin ... alles, was hilft."
					/>
				</FormField>

				<div class="mt-2 grid items-center gap-5 border-t border-[#e6e1d4] pt-5 sm:grid-cols-[1fr_auto]">
					<div>
						<p class="max-w-[50ch] text-[12.5px] leading-normal text-muted">
							Mit Absenden stimme ich der Verarbeitung der Daten zur Bearbeitung der Anfrage zu. Mehr im
							<a class="text-ink underline underline-offset-2 hover:text-accent" href="#">Datenschutz</a>.
						</p>
						<p v-if="submitError" class="mt-3 text-sm font-semibold text-accent" role="alert">
							{{ submitError }}
						</p>
					</div>
					<button
						class="inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-accent px-7 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#8a0810] hover:shadow-lift disabled:pointer-events-none disabled:opacity-60"
						type="submit"
						:disabled="isSubmitting"
					>
						{{ isSubmitting ? 'Wird gesendet ...' : 'Nachricht senden' }}
						<ArrowUpRight class="h-4 w-4" />
					</button>
				</div>
			</form>

			<div v-else class="mx-auto mt-16 max-w-[760px] rounded-[18px] border border-line bg-surface p-[clamp(1.5rem,4vw,2.75rem)] text-center shadow-soft">
				<div class="mx-auto mb-5 grid h-[60px] w-[60px] place-items-center rounded-full bg-[#e8f7ee] text-[#1a9851]">
					<Check class="h-6 w-6" />
				</div>
				<h3 class="font-display text-[28px] font-bold tracking-tight">Vielen Dank für Ihre Nachricht</h3>
				<p class="mt-2 text-muted">
					Wir antworten meistens am selben oder nächsten Werktag.<br />Wenn es eilt, rufen Sie bitte an:
					<a class="border-b border-line text-ink hover:border-accent hover:text-accent" href="tel:+4920838547960">0208 / 385 479 60</a>.
				</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ArrowUpRight, Check, ChevronDown } from 'lucide-vue-next'
import { requestReasons } from '~/data/site'

const form = reactive({
	reason: '',
	name: '',
	email: '',
	phone: '',
	when: '',
	message: ''
})

const errors = reactive<Record<string, string>>({})
const submitted = ref(false)
const isSubmitting = ref(false)
const submitError = ref('')

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validate = () => {
	Object.keys(errors).forEach((key) => {
		delete errors[key]
	})

	if (!form.name) {
		errors.name = 'Bitte Namen eintragen.'
	}

	if (!form.email || !emailPattern.test(form.email)) {
		errors.email = 'Bitte gültige E-Mail eintragen.'
	}

	if (!form.message) {
		errors.message = 'Bitte Nachricht eintragen.'
	}

	return Object.keys(errors).length === 0
}

const submit = async () => {
	submitError.value = ''

	if (!validate()) {
		return
	}

	isSubmitting.value = true

	try {
		await $fetch('/api/contact', {
			method: 'POST',
			body: { ...form }
		})

		submitted.value = true
	} catch (error: any) {
		const fieldErrors = error?.data?.data?.fieldErrors

		if (fieldErrors && typeof fieldErrors === 'object') {
			Object.assign(errors, fieldErrors)
		}

		submitError.value = error?.data?.statusMessage || 'Die Nachricht konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie kurz an.'
	} finally {
		isSubmitting.value = false
	}
}
</script>
