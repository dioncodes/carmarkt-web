import process from 'node:process'
import { Resend } from 'resend'
import { createError, defineEventHandler, readBody } from 'h3'

type ContactPayload = {
	reason?: unknown
	name?: unknown
	email?: unknown
	phone?: unknown
	when?: unknown
	message?: unknown
	website?: unknown
	turnstileToken?: unknown
}

type TurnstileVerification = {
	success?: boolean
	'error-codes'?: string[]
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const asTrimmedString = (value: unknown) => typeof value === 'string' ? value.trim() : ''

const escapeHtml = (value: string) => value
	.replace(/&/g, '&amp;')
	.replace(/</g, '&lt;')
	.replace(/>/g, '&gt;')
	.replace(/"/g, '&quot;')
	.replace(/'/g, '&#039;')

const formatLine = (label: string, value: string) => `${label}: ${value || '-'}`

const formatLocalDateTimeForEmail = (value: string) => {
	const match = value.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})(?::\d{2})?$/)

	if (!match) {
		return value
	}

	const [, year, month, day, hour, minute] = match
	return `${day}.${month}.${year}, ${hour}:${minute} Uhr`
}

const getPrivateEnv = (runtimeValue: unknown, envName: string) => {
	return asTrimmedString(runtimeValue) || asTrimmedString(process.env[envName])
}

export default defineEventHandler(async (event) => {
	const body = await readBody<ContactPayload>(event)
	const reason = asTrimmedString(body.reason)
	const name = asTrimmedString(body.name)
	const email = asTrimmedString(body.email)
	const phone = asTrimmedString(body.phone)
	const when = asTrimmedString(body.when)
	const message = asTrimmedString(body.message)
	const website = asTrimmedString(body.website)
	const turnstileToken = asTrimmedString(body.turnstileToken)

	if (website) {
		return { ok: true }
	}

	const fieldErrors: Record<string, string> = {}

	if (!name) {
		fieldErrors.name = 'Bitte Namen eintragen.'
	}

	if (!email || !emailPattern.test(email)) {
		fieldErrors.email = 'Bitte gültige E-Mail eintragen.'
	}

	if (!message) {
		fieldErrors.message = 'Bitte Nachricht eintragen.'
	}

	if (Object.keys(fieldErrors).length > 0) {
		throw createError({
			statusCode: 422,
			statusMessage: 'Bitte prüfen Sie die markierten Felder.',
			data: { fieldErrors }
		})
	}

	const config = useRuntimeConfig()
	const turnstileSecretKey = getPrivateEnv(config.turnstile?.secretKey, 'TURNSTILE_SECRET_KEY')
	const turnstileSiteKey = asTrimmedString(config.public.turnstile?.siteKey)
	const resendApiKey = getPrivateEnv(config.resendApiKey, 'RESEND_API_KEY')
	const senderEmail = getPrivateEnv(config.contactSenderEmail, 'CONTACT_SENDER_EMAIL')
	const senderName = getPrivateEnv(config.contactSenderName, 'CONTACT_SENDER_NAME') || 'CarMarkt Website'
	const recipientEmail = getPrivateEnv(config.contactRecipientEmail, 'CONTACT_RECIPIENT_EMAIL')
	const formattedWhen = formatLocalDateTimeForEmail(when)

	if ((turnstileSiteKey && !turnstileSecretKey) || (turnstileSecretKey && !turnstileSiteKey)) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Die Sicherheitsprüfung ist noch nicht vollständig konfiguriert.'
		})
	}

	if (turnstileSecretKey) {
		if (!turnstileToken) {
			throw createError({
				statusCode: 422,
				statusMessage: 'Bitte Sicherheitsprüfung abschließen.',
				data: { fieldErrors: { turnstile: 'Bitte Sicherheitsprüfung abschließen.' } }
			})
		}

		let verification: TurnstileVerification

		try {
			verification = await verifyTurnstileToken(turnstileToken, event)
		} catch (error) {
			console.warn('Error validating Turnstile token:', error)
			throw createError({
				statusCode: 502,
				statusMessage: 'Die Sicherheitsprüfung konnte gerade nicht geprüft werden.'
			})
		}

		if (!verification.success) {
			console.warn('Turnstile validation failed:', verification['error-codes'])
			throw createError({
				statusCode: 403,
				statusMessage: 'Die Sicherheitsprüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut.',
				data: { fieldErrors: { turnstile: 'Die Sicherheitsprüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut.' } }
			})
		}
	}

	if (!resendApiKey || !senderEmail || !recipientEmail) {
		throw createError({
			statusCode: 500,
			statusMessage: 'Die Kontaktfunktion ist noch nicht vollständig konfiguriert.'
		})
	}

	const lines = [
		formatLine('Worum geht es', reason),
		formatLine('Name', name),
		formatLine('E-Mail', email),
		formatLine('Telefon', phone),
		formatLine('Wunschtermin', formattedWhen),
		'',
		'Nachricht:',
		message
	]

	const htmlRows = [
		['Worum geht es', reason],
		['Name', name],
		['E-Mail', email],
		['Telefon', phone],
		['Wunschtermin', formattedWhen]
	].map(([label, value]) => `
		<tr>
			<th align="left" style="padding:8px 12px;border-bottom:1px solid #e6e1d4;font-family:Arial,sans-serif;font-size:14px;color:#6f6a60;">${escapeHtml(label)}</th>
			<td style="padding:8px 12px;border-bottom:1px solid #e6e1d4;font-family:Arial,sans-serif;font-size:14px;color:#1d1b17;">${escapeHtml(value || '-')}</td>
		</tr>
	`).join('')

	const resend = new Resend(resendApiKey)
	const { error } = await resend.emails.send({
		from: `${senderName} <${senderEmail}>`,
		to: [recipientEmail],
		replyTo: email,
		subject: `Neue Anfrage von ${name}`,
		text: lines.join('\n'),
		html: `
			<div style="font-family:Arial,sans-serif;color:#1d1b17;line-height:1.5;">
				<h1 style="font-size:22px;margin:0 0 16px;">Neue Anfrage über carmarkt.net</h1>
				<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:640px;border-top:1px solid #e6e1d4;">
					${htmlRows}
				</table>
				<h2 style="font-size:16px;margin:24px 0 8px;">Nachricht</h2>
				<p style="white-space:pre-wrap;margin:0;">${escapeHtml(message)}</p>
			</div>
		`
	})

	if (error) {
		console.warn('Error sending contact email:', error)
		throw createError({
			statusCode: 502,
			statusMessage: 'Die Nachricht konnte gerade nicht gesendet werden.'
		})
	}

	return { ok: true }
})
