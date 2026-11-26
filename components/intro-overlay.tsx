import Image from 'next/image'
import { company } from '@/lib/site-data'

/**
 * Ruhige Einblendung beim Laden bzw. Neuladen einer Seite.
 *
 * - Startseite: Logo mit sanften Klangwellen, eine feine Linie „hört zu“,
 *   darunter das Motto. Danach hebt sich die Fläche wie ein Vorhang nach oben
 *   und gibt die Seite frei (gesamt ca. 2,5 Sekunden).
 * - Unterseiten: nur ein kurzes, weiches Aufblenden aus dem Papierton.
 *
 * Reines CSS (siehe globals.css, Abschnitt „Intro“). Ein kleines Inline-Skript
 * im <head> setzt vor dem ersten Bild `data-intro` auf <html>; nur dann ist die
 * Fläche überhaupt sichtbar. Weil das Element im Root-Layout liegt, läuft die
 * Animation nur beim echten Laden, nicht beim Wechsel zwischen Seiten.
 * Ohne JavaScript erscheint keine Einblendung. Klicks gehen immer durch.
 */
export function IntroOverlay() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro-inner">
        <div className="intro-mark">
          <span className="intro-ring" style={{ ['--d' as string]: '150ms' }} />
          <span className="intro-ring" style={{ ['--d' as string]: '550ms' }} />
          <span className="intro-ring" style={{ ['--d' as string]: '950ms' }} />
          <Image
            src="/images/westphal-hoergeraete-logo.png"
            alt=""
            width={512}
            height={265}
            priority
            className="intro-logo"
          />
        </div>
        <span className="intro-line" />
        <p className="intro-motto">{company.motto}</p>
      </div>
    </div>
  )
}

/**
 * Läuft blockierend im <head>, bevor etwas gezeichnet wird: wählt die Variante
 * und räumt das Attribut nach dem Ende wieder ab, damit spätere Seitenwechsel
 * ihre normalen Animationszeiten haben.
 */
export const introScript = `(function(){try{var h=document.documentElement;var home=location.pathname==='/';h.setAttribute('data-intro',home?'home':'page');setTimeout(function(){h.removeAttribute('data-intro');},home?3600:1400);}catch(e){}})();`
