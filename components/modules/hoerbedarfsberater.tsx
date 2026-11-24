'use client'

import Link from 'next/link'
import { useMemo, useRef, useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Check,
  ClipboardList,
  PhoneCall,
  CalendarCheck,
  Lightbulb,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  beraterIntro,
  beraterQuestions,
  beraterResults,
} from '@/lib/site-data'

type Answers = Record<string, string[]>

/** Maps the chosen "next step" to a matching contact-form reason. */
const nextStepToReason: Record<string, string> = {
  'Hörtest vereinbaren': 'Hörtest',
  'Rückruf wünschen': 'Rückrufwunsch',
  'Kosten und Zuschüsse verstehen': 'Preise & Krankenkasse',
  'bestehende Hörgeräte prüfen lassen': 'bestehende Hörgeräte optimieren',
  Tinnitusberatung: 'Tinnitusberatung',
}

export function Hoerbedarfsberater() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [finished, setFinished] = useState(false)
  const headingRef = useRef<HTMLHeadingElement>(null)

  const total = beraterQuestions.length
  const current = beraterQuestions[step]
  const currentAnswers = answers[current?.id] ?? []
  const progress = Math.round(((finished ? total : step) / total) * 100)

  function focusHeading() {
    // Move focus to the step heading so screen readers announce the change.
    window.requestAnimationFrame(() => headingRef.current?.focus())
  }

  function toggleOption(option: string) {
    setAnswers((prev) => {
      const existing = prev[current.id] ?? []
      if (current.multi) {
        return {
          ...prev,
          [current.id]: existing.includes(option)
            ? existing.filter((o) => o !== option)
            : [...existing, option],
        }
      }
      return { ...prev, [current.id]: [option] }
    })
  }

  function next() {
    if (step < total - 1) {
      setStep((s) => s + 1)
      focusHeading()
    } else {
      setFinished(true)
      focusHeading()
    }
  }

  function back() {
    if (finished) {
      setFinished(false)
      focusHeading()
      return
    }
    if (step > 0) {
      setStep((s) => s - 1)
      focusHeading()
    }
  }

  function restart() {
    setAnswers({})
    setStep(0)
    setFinished(false)
    focusHeading()
  }

  // Derive a friendly result text and a prefilled contact reason.
  const result = useMemo(() => {
    const situation = answers.situation?.[0] ?? ''
    const difficult = answers.difficult ?? []
    const nextStep = answers.nextStep?.[0] ?? ''

    let text = beraterResults.standard
    if (situation === 'Ich bin mit meinen aktuellen Hörgeräten unzufrieden') {
      text = beraterResults.unzufrieden
    } else if (difficult.includes('Tinnitus oder Ohrgeräusche')) {
      text = beraterResults.tinnitus
    }

    const reason = nextStepToReason[nextStep] ?? 'Hörgeräteberatung'
    return { text, reason }
  }, [answers])

  const canContinue = currentAnswers.length > 0

  return (
    <div>
      {/* Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm font-semibold text-muted-foreground">
          <span className="flex items-center gap-2 text-primary">
            <ClipboardList className="size-4" aria-hidden="true" />
            Hörbedarfsberater
          </span>
          <span aria-hidden="true">
            {finished ? total : step + 1} / {total}
          </span>
        </div>
        <div
          className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-label="Fortschritt"
        >
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {!finished ? (
        <div>
          <h3
            ref={headingRef}
            tabIndex={-1}
            className="font-serif text-xl font-semibold text-card-foreground outline-none sm:text-2xl"
          >
            {current.question}
          </h3>
          {current.multi && (
            <p className="mt-1 text-sm text-muted-foreground">
              Mehrfachauswahl möglich
            </p>
          )}

          <div
            role={current.multi ? 'group' : 'radiogroup'}
            aria-label={current.question}
            className="mt-5 grid gap-3 sm:grid-cols-2"
          >
            {current.options.map((option) => {
              const selected = currentAnswers.includes(option)
              return (
                <button
                  key={option}
                  type="button"
                  role={current.multi ? 'checkbox' : 'radio'}
                  aria-checked={selected}
                  onClick={() => toggleOption(option)}
                  className={cn(
                    'flex items-center justify-between gap-3 rounded-xl border p-4 text-left text-base transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40',
                    selected
                      ? 'border-primary bg-accent text-accent-foreground'
                      : 'border-border bg-background text-foreground hover:border-primary/50 hover:bg-muted/50',
                  )}
                >
                  <span>{option}</span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'flex size-5 shrink-0 items-center justify-center rounded-full border',
                      selected
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-muted-foreground/40',
                    )}
                  >
                    {selected && <Check className="size-3.5" />}
                  </span>
                </button>
              )
            })}
          </div>

          <div className="mt-6 flex items-center justify-between gap-3">
            <Button
              variant="ghost"
              onClick={back}
              disabled={step === 0}
              className="h-11"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Zurück
            </Button>
            <Button onClick={next} disabled={!canContinue} className="h-11 px-5">
              {step === total - 1 ? 'Auswertung ansehen' : 'Weiter'}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <h3
            ref={headingRef}
            tabIndex={-1}
            className="flex items-center gap-2 font-serif text-xl font-semibold text-card-foreground outline-none sm:text-2xl"
          >
            <Lightbulb className="size-5 text-primary" aria-hidden="true" />
            Ihre persönliche Orientierung
          </h3>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            {result.text}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/kontakt?anliegen=${encodeURIComponent(result.reason)}`}
              className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-auto')}
            >
              <CalendarCheck aria-hidden="true" />
              Termin anfragen
            </Link>
            <Link
              href="/kontakt?anliegen=Rückrufwunsch"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'w-full sm:w-auto',
              )}
            >
              <PhoneCall aria-hidden="true" />
              Rückruf wünschen
            </Link>
          </div>

          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Hinweis: Diese Auswertung dient nur der ersten Orientierung und
            ersetzt keine persönliche Höranalyse oder ärztliche Abklärung.
          </p>

          <button
            type="button"
            onClick={restart}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Beratung neu starten
          </button>
        </div>
      )}

      {step === 0 && !finished && (
        <p className="mt-6 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
          {beraterIntro}
        </p>
      )}
    </div>
  )
}
