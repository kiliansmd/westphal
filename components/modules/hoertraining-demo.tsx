'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Play,
  RotateCcw,
  Volume2,
  Check,
  Eye,
  EyeOff,
  ShieldCheck,
  Headphones,
  ArrowRight,
  CalendarCheck,
  PhoneCall,
  AudioLines,
} from 'lucide-react'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  hoertrainingNotice,
  hoertrainingSteps,
  hoertrainingResult,
} from '@/lib/site-data'

type Phase = 'notice' | 'exercise' | 'result'

/** Number of question steps (all steps except the volume step). */
const QUESTION_COUNT = hoertrainingSteps.filter((s) => !s.isVolume).length

export function HoertrainingDemo() {
  const [phase, setPhase] = useState<Phase>('notice')
  const [stepIndex, setStepIndex] = useState(0)
  const [volume, setVolume] = useState(0.85)
  const [selected, setSelected] = useState<number | null>(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [speaking, setSpeaking] = useState(false)
  const [showText, setShowText] = useState(false)
  const [hasPlayed, setHasPlayed] = useState(false)
  const [ttsSupported, setTtsSupported] = useState(true)

  const audioCtxRef = useRef<AudioContext | null>(null)
  const noiseStopRef = useRef<(() => void) | null>(null)
  const volumeRef = useRef(volume)
  volumeRef.current = volume

  const step = hoertrainingSteps[stepIndex]
  const isLastStep = stepIndex === hoertrainingSteps.length - 1

  /* --- Feature detection (client only) --------------------------------- */
  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setTtsSupported(false)
    }
  }, [])

  /* --- Cleanup any audio on unmount ------------------------------------ */
  const stopNoise = useCallback(() => {
    noiseStopRef.current?.()
    noiseStopRef.current = null
  }, [])

  const stopAll = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
    stopNoise()
    setSpeaking(false)
  }, [stopNoise])

  useEffect(() => {
    return () => {
      stopAll()
      audioCtxRef.current?.close().catch(() => {})
    }
  }, [stopAll])

  /* --- Simulated café / room background noise (Web Audio) -------------- */
  function startNoise() {
    try {
      const Ctx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext
      if (!Ctx) return
      const ctx = audioCtxRef.current ?? new Ctx()
      audioCtxRef.current = ctx
      if (ctx.state === 'suspended') ctx.resume().catch(() => {})

      // 2s of gently filtered noise, looped → soft, non-shrill ambience.
      const bufferSize = ctx.sampleRate * 2
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
      const data = buffer.getChannelData(0)
      let last = 0
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1
        // low-pass style smoothing → brown-ish, warm noise
        last = (last + 0.02 * white) / 1.02
        data[i] = last * 3.5
      }
      const source = ctx.createBufferSource()
      source.buffer = buffer
      source.loop = true

      const lowpass = ctx.createBiquadFilter()
      lowpass.type = 'lowpass'
      lowpass.frequency.value = 900

      const gain = ctx.createGain()
      // Keep clearly below the voice, scaled to the chosen volume.
      gain.gain.value = Math.min(0.14, volumeRef.current * 0.14)

      source.connect(lowpass)
      lowpass.connect(gain)
      gain.connect(ctx.destination)
      source.start()

      noiseStopRef.current = () => {
        try {
          gain.gain.exponentialRampToValueAtTime(
            0.0001,
            ctx.currentTime + 0.25,
          )
          source.stop(ctx.currentTime + 0.3)
        } catch {
          try {
            source.stop()
          } catch {
            /* noop */
          }
        }
      }
    } catch {
      /* Audio is optional – ignore failures. */
    }
  }

  /* --- Speak the current step via speech synthesis --------------------- */
  function play() {
    if (!ttsSupported) return
    stopAll()

    const synth = window.speechSynthesis
    const utter = new SpeechSynthesisUtterance(step.spoken)
    utter.lang = 'de-DE'
    utter.rate = 0.95
    utter.volume = volume
    const deVoice = synth
      .getVoices()
      .find((v) => v.lang?.toLowerCase().startsWith('de'))
    if (deVoice) utter.voice = deVoice

    if (step.withNoise) startNoise()

    utter.onend = () => {
      stopNoise()
      setSpeaking(false)
    }
    utter.onerror = () => {
      stopNoise()
      setSpeaking(false)
    }

    setSpeaking(true)
    setHasPlayed(true)
    synth.speak(utter)
  }

  /* --- Navigation between steps ---------------------------------------- */
  function choose(index: number) {
    if (selected !== null) return
    setSelected(index)
    if (index === step.correct) setCorrectCount((c) => c + 1)
  }

  function next() {
    stopAll()
    if (isLastStep) {
      setPhase('result')
      return
    }
    setStepIndex((i) => i + 1)
    setSelected(null)
    setShowText(false)
    setHasPlayed(false)
  }

  function restart() {
    stopAll()
    setPhase('notice')
    setStepIndex(0)
    setSelected(null)
    setCorrectCount(0)
    setShowText(false)
    setHasPlayed(false)
  }

  function startExercise() {
    setPhase('exercise')
    setStepIndex(0)
    setSelected(null)
    setCorrectCount(0)
    setShowText(false)
    setHasPlayed(false)
  }

  const answered = selected !== null
  const canContinue = step.isVolume ? true : answered
  const stepNumber = stepIndex + 1
  const totalSteps = hoertrainingSteps.length
  const resultIsGood = correctCount >= 3

  return (
    <div className="border-t-2 border-foreground">
      {/* Header strip */}
      <div className="flex items-center gap-3 border-b border-border bg-secondary px-6 py-4">
        <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <AudioLines className="size-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground">
            Mini-Hörübung: Sprache im Alltag erkennen
          </p>
          <p className="text-sm text-muted-foreground">
            Ca. 60–90 Sekunden · keine Diagnose · nichts wird gespeichert
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* ------------------------------------------------------------- */}
        {/* Phase: Notice                                                 */}
        {/* ------------------------------------------------------------- */}
        {phase === 'notice' && (
          <div>
            <h3 className="font-serif text-2xl font-semibold text-card-foreground">
              {hoertrainingNotice.headline}
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              {hoertrainingNotice.text}
            </p>

            <ul className="mt-6 space-y-3">
              {hoertrainingNotice.hints.map((hint) => (
                <li key={hint} className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span className="text-base leading-relaxed text-foreground">
                    {hint}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-3 border-l-2 border-brand pl-4">
              <ShieldCheck
                className="mt-0.5 size-5 shrink-0 text-primary"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-muted-foreground">
                {hoertrainingNotice.privacy}
              </p>
            </div>

            {!ttsSupported && (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Hinweis: Ihr Browser unterstützt keine Sprachausgabe. Sie können
                die Übung trotzdem durchführen – die Beispielsätze werden dann
                als Text angezeigt.
              </p>
            )}

            <button
              type="button"
              onClick={startExercise}
              className={cn(
                buttonVariants({ size: 'lg' }),
                'mt-8 w-full sm:w-auto',
              )}
            >
              <Headphones aria-hidden="true" />
              Übung starten
            </button>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* Phase: Exercise                                               */}
        {/* ------------------------------------------------------------- */}
        {phase === 'exercise' && (
          <div>
            {/* Progress */}
            <div className="flex items-center justify-between gap-4">
              <p className="text-base font-semibold text-brand-deep">
                Schritt {stepNumber} von {totalSteps}
              </p>
              <span className="text-sm text-muted-foreground">
                {step.isVolume ? 'Vorbereitung' : `Frage ${stepNumber - 1}`}
              </span>
            </div>
            <div
              className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={totalSteps}
              aria-valuenow={stepNumber}
              aria-label="Fortschritt der Hörübung"
            >
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${(stepNumber / totalSteps) * 100}%` }}
              />
            </div>

            <h3 className="mt-6 font-serif text-2xl font-semibold text-card-foreground">
              {step.headline}
            </h3>
            <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
              {step.task}
            </p>

            {/* Audio control */}
            <div className="mt-6 rounded-2xl border border-border bg-background p-5">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={play}
                  disabled={!ttsSupported}
                  aria-label={
                    hasPlayed ? 'Beispiel erneut anhören' : 'Beispiel anhören'
                  }
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'disabled:cursor-not-allowed disabled:opacity-50',
                  )}
                >
                  {speaking ? (
                    <AudioLines className="animate-pulse" aria-hidden="true" />
                  ) : (
                    <Play aria-hidden="true" />
                  )}
                  {hasPlayed ? 'Nochmal anhören' : 'Beispiel anhören'}
                </button>

                <button
                  type="button"
                  onClick={() => setShowText((v) => !v)}
                  aria-pressed={showText}
                  className="inline-flex items-center gap-2 text-base font-semibold text-primary underline underline-offset-4 hover:no-underline"
                >
                  {showText ? (
                    <EyeOff className="size-5" aria-hidden="true" />
                  ) : (
                    <Eye className="size-5" aria-hidden="true" />
                  )}
                  {showText ? 'Text ausblenden' : 'Text einblenden'}
                </button>
              </div>

              {/* Volume slider */}
              <div className="mt-5 flex items-center gap-3">
                <Volume2
                  className="size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <label htmlFor="ht-volume" className="sr-only">
                  Lautstärke
                </label>
                <input
                  id="ht-volume"
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="h-2 w-full max-w-xs cursor-pointer appearance-none rounded-full bg-muted accent-primary"
                />
                <span className="w-12 text-right text-sm tabular-nums text-muted-foreground">
                  {Math.round(volume * 100)}%
                </span>
              </div>

              {/* Text alternative */}
              <div aria-live="polite">
                {showText && (
                  <p className="mt-4 rounded-lg border border-dashed border-border bg-card px-4 py-3 text-base font-medium text-foreground">
                    <span className="text-muted-foreground">
                      Gesprochener Text:{' '}
                    </span>
                    „{step.spoken}“
                  </p>
                )}
              </div>

              {step.withNoise && (
                <p className="mt-4 text-sm text-muted-foreground">
                  Dieses Beispiel enthält ein leises, simuliertes
                  Hintergrundgeräusch.
                </p>
              )}
            </div>

            {/* Volume step: simple continue */}
            {step.isVolume && (
              <button
                type="button"
                onClick={next}
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'mt-6 w-full sm:w-auto',
                )}
              >
                Weiter
                <ArrowRight aria-hidden="true" />
              </button>
            )}

            {/* Question step: options + feedback */}
            {!step.isVolume && step.options && (
              <>
                <fieldset className="mt-6">
                  <legend className="text-base font-semibold text-foreground">
                    Was haben Sie verstanden?
                  </legend>
                  <div className="mt-3 grid gap-3">
                    {step.options.map((option, index) => {
                      const isChosen = selected === index
                      const isCorrect = index === step.correct
                      const showState = answered && (isChosen || isCorrect)
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => choose(index)}
                          disabled={answered}
                          aria-pressed={isChosen}
                          className={cn(
                            'flex items-center justify-between gap-3 rounded-xl border px-5 py-4 text-left text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40',
                            !answered &&
                              'border-border bg-background text-foreground hover:border-primary/50 hover:bg-muted/50',
                            showState &&
                              isCorrect &&
                              'border-primary bg-accent text-accent-foreground',
                            answered &&
                              isChosen &&
                              !isCorrect &&
                              'border-destructive/50 bg-destructive/10 text-foreground',
                            answered &&
                              !isChosen &&
                              !isCorrect &&
                              'border-border bg-background text-muted-foreground',
                          )}
                        >
                          <span>{option}</span>
                          {showState && isCorrect && (
                            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                              <Check className="size-5" aria-hidden="true" />
                              richtig
                            </span>
                          )}
                          {answered && isChosen && !isCorrect && (
                            <span className="text-sm font-semibold text-destructive">
                              Ihre Auswahl
                            </span>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </fieldset>

                <div aria-live="polite">
                  {answered && (
                    <div className="mt-5 border-l-2 border-brand pl-5">
                      <p className="text-base leading-relaxed text-foreground">
                        {step.feedback}
                      </p>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={next}
                  disabled={!canContinue}
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'mt-6 w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto',
                  )}
                >
                  {isLastStep ? 'Ergebnis ansehen' : 'Weiter'}
                  <ArrowRight aria-hidden="true" />
                </button>
              </>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* Phase: Result                                                 */}
        {/* ------------------------------------------------------------- */}
        {phase === 'result' && (
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-semibold text-primary">
              <Check className="size-4" aria-hidden="true" />
              Übung abgeschlossen
            </span>
            <h3 className="mt-4 font-serif text-2xl font-semibold text-card-foreground sm:text-3xl">
              {hoertrainingResult.headline}
            </h3>
            <p className="mt-2 text-base text-muted-foreground">
              {correctCount} von {QUESTION_COUNT} Beispielen richtig zugeordnet.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {hoertrainingResult.intro}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              {resultIsGood ? hoertrainingResult.good : hoertrainingResult.mixed}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/kontakt?anliegen=Hörtraining"
                className={cn(buttonVariants({ size: 'lg' }), 'w-full sm:w-auto')}
              >
                <CalendarCheck aria-hidden="true" />
                Hörtraining-Beratung anfragen
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

            <button
              type="button"
              onClick={restart}
              className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-primary underline underline-offset-4 hover:no-underline"
            >
              <RotateCcw className="size-5" aria-hidden="true" />
              Übung neu starten
            </button>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {hoertrainingResult.disclaimer}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
