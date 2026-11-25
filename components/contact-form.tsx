'use client'

import { useRef, useState, type FormEvent } from 'react'
import { Send, ChevronDown, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { contactReasons } from '@/lib/site-data'

const fieldBase =
  'w-full rounded-lg border bg-background text-base text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:ring-3 focus-visible:ring-ring/40'

const labelClass = 'mb-2 block text-base font-semibold text-foreground'

type Errors = Partial<Record<'name' | 'contact' | 'email' | 'reason' | 'privacy', string>>

export type ContactFormProps = {
  /** Pre-selects the "Anliegen" dropdown, e.g. from a module deep-link. */
  defaultReason?: string
  /** Pre-fills the message field, e.g. a summary from an interactive module. */
  defaultMessage?: string
}

function fieldClass(hasError: boolean, extra = '') {
  return `${fieldBase} ${hasError ? 'border-destructive focus-visible:border-destructive' : 'border-input focus-visible:border-ring'} ${extra}`
}

export function ContactForm({ defaultReason = '', defaultMessage = '' }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Errors>({})
  const formRef = useRef<HTMLFormElement>(null)

  function validate(form: HTMLFormElement): Errors {
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const reason = String(data.get('reason') ?? '').trim()
    const privacy = data.get('privacy') === 'on'
    const next: Errors = {}

    if (name.length < 2) next.name = 'Bitte geben Sie Ihren Namen an.'
    // At least one way to reach the visitor.
    if (!phone && !email) {
      next.contact = 'Bitte hinterlassen Sie eine Telefonnummer oder E-Mail-Adresse.'
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = 'Bitte prüfen Sie Ihre E-Mail-Adresse.'
    }
    if (!reason) next.reason = 'Bitte wählen Sie ein Anliegen aus.'
    if (!privacy) next.privacy = 'Bitte bestätigen Sie die Datenschutzhinweise.'

    return next
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const next = validate(form)
    setErrors(next)

    if (Object.keys(next).length > 0) {
      // Move focus to the first invalid field for keyboard/screen-reader users.
      const order: (keyof Errors)[] = ['name', 'contact', 'email', 'reason', 'privacy']
      const firstKey = order.find((key) => next[key])
      const targetId = firstKey === 'contact' ? 'phone' : firstKey
      form.querySelector<HTMLElement>(`#${targetId}`)?.focus()
      return
    }

    // Frontend-Prototyp: noch kein Backend angebunden.
    console.log('[v0] Kontaktformular abgeschickt')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start border-t-2 border-foreground pt-8">
        <h2 className="font-serif text-3xl font-medium text-foreground">
          Vielen Dank
        </h2>
        <p className="mt-3 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
          Ihre Anfrage wurde vorbereitet. Westphal Hörgeräte meldet sich
          persönlich bei Ihnen.
        </p>
        <Button className="mt-6 h-11 px-5" onClick={() => setSubmitted(false)}>
          Weitere Anfrage senden
        </Button>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="border-t-2 border-foreground pt-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-invalid={errors.name ? 'true' : undefined}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={fieldClass(!!errors.name, 'h-12 px-4')}
            placeholder="Ihr Name"
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-destructive">
              <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Telefonnummer
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={errors.contact ? 'true' : undefined}
            aria-describedby={errors.contact ? 'contact-error' : undefined}
            className={fieldClass(!!errors.contact, 'h-12 px-4')}
            placeholder="Für einen Rückruf"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="email" className={labelClass}>
          E-Mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={errors.email ? 'true' : undefined}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={fieldClass(!!errors.email, 'h-12 px-4')}
          placeholder="ihre@email.de"
        />
        <p className="mt-1.5 text-sm text-muted-foreground">
          Telefonnummer oder E-Mail genügt – je nachdem, wie wir Sie erreichen
          dürfen.
        </p>
        {(errors.contact || errors.email) && (
          <p
            id={errors.contact ? 'contact-error' : 'email-error'}
            className="mt-1.5 flex items-center gap-1.5 text-sm text-destructive"
          >
            <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
            {errors.contact ?? errors.email}
          </p>
        )}
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="reason" className={labelClass}>
            Anliegen <span className="text-destructive">*</span>
          </label>
          <div className="relative">
            <select
              id="reason"
              name="reason"
              defaultValue={defaultReason}
              aria-required="true"
              aria-invalid={errors.reason ? 'true' : undefined}
              aria-describedby={errors.reason ? 'reason-error' : undefined}
              className={fieldClass(!!errors.reason, 'h-12 appearance-none px-4 pr-10')}
            >
              <option value="" disabled>
                Bitte wählen
              </option>
              {contactReasons.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
          </div>
          {errors.reason && (
            <p id="reason-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-destructive">
              <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
              {errors.reason}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="callback" className={labelClass}>
            Bevorzugte Rückrufzeit{' '}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </label>
          <div className="relative">
            <select
              id="callback"
              name="callback"
              defaultValue=""
              className={fieldClass(false, 'h-12 appearance-none px-4 pr-10')}
            >
              <option value="">Keine Angabe</option>
              <option value="Vormittags">Vormittags</option>
              <option value="Nachmittags">Nachmittags</option>
              <option value="Ganztags erreichbar">Ganztags erreichbar</option>
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelClass}>
          Nachricht <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          defaultValue={defaultMessage}
          className={fieldClass(false, 'px-4 py-3')}
          placeholder="Wie können wir Ihnen helfen?"
        />
      </div>

      <div className="mt-5 flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          aria-required="true"
          aria-invalid={errors.privacy ? 'true' : undefined}
          aria-describedby={errors.privacy ? 'privacy-error' : undefined}
          className="mt-0.5 size-6 shrink-0 rounded border-input text-primary accent-primary focus-visible:ring-3 focus-visible:ring-ring/40"
        />
        <div>
          <label htmlFor="privacy" className="text-base leading-relaxed text-muted-foreground">
            Ich habe die{' '}
            <a
              href="/datenschutz"
              className="link-accent"
            >
              Datenschutzhinweise
            </a>{' '}
            gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung
            meiner Anfrage einverstanden.{' '}
            <span className="text-destructive">*</span>
          </label>
          {errors.privacy && (
            <p id="privacy-error" className="mt-1.5 flex items-center gap-1.5 text-sm text-destructive">
              <AlertCircle className="size-4 shrink-0" aria-hidden="true" />
              {errors.privacy}
            </p>
          )}
        </div>
      </div>

      <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
        <Send aria-hidden="true" />
        Anfrage senden
      </Button>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage
        verwendet.
      </p>
    </form>
  )
}
