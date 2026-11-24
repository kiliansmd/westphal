# Westphal Hörgeräte – Website

Marketing- und Beratungswebsite für **Westphal Hörgeräte** in Bonn-Beuel.
Gebaut mit Next.js 16 (App Router), React 19, TypeScript und Tailwind CSS v4.

> Motto: **„Hören verbindet."** · persönlich · unabhängig · kompetent

---

## Inhaltsverzeichnis

- [Projektstruktur](#projektstruktur)
- [Zentrale Inhalte pflegen (`lib/site-data.ts`)](#zentrale-inhalte-pflegen)
- [Interaktive Module](#interaktive-module)
- [Kontaktformular](#kontaktformular)
- [SEO / strukturierte Daten (JSON-LD)](#seo--strukturierte-daten-json-ld)
- [Datenschutz / Consent-Embeds](#datenschutz--consent-embeds)
- [Design-System](#design-system)
- [Barrierefreiheit](#barrierefreiheit)
- [Vor dem Go-Live](#vor-dem-go-live)

---

## Projektstruktur

```
app/
  layout.tsx                     # Fonts, globale Metadaten, <html>-Hintergrund
  page.tsx                       # Startseite (setzt Home-Sections zusammen)
  kontakt/page.tsx               # Kontaktseite + Formular + Karte
  hoergeraete-bonn-beuel/        # SEO-Landingpage Hörgeräte
  hoertest-bonn-beuel/
  preise-krankenkasse/
  hoergeraete-testen/
  klangwellen-anpassverfahren/
  tinnitusberatung-bonn/
  gehoerschutz-bonn/
  service-reparatur/
  warum-westphal/

components/
  site-header.tsx, site-footer.tsx, mobile-contact-bar.tsx, logo.tsx
  contact-form.tsx               # Wiederverwendbares Anfrageformular
  consent-embed.tsx              # DSGVO-freundliche Karte / Instagram-Gate
  home/                          # Startseiten-Abschnitte
  page/                          # Wiederverwendbares Baukasten-Kit für Unterseiten
  modules/                       # Interaktive Beratungs-Module
  seo/json-ld.tsx                # Strukturierte Daten (schema.org)

lib/
  site-data.ts                   # ZENTRALE Inhalte: Kontakt, Navigation, Texte, Module
  utils.ts                       # cn()-Helper
```

---

## Zentrale Inhalte pflegen

Fast alle redaktionellen Inhalte liegen in **`lib/site-data.ts`**. Dort lassen sich
Texte ändern, ohne Komponenten anzufassen:

| Export | Zweck |
| --- | --- |
| `company` | Name, Adresse, Telefon, E-Mail, Bewertung, **`url`** (Produktionsdomain für JSON-LD) |
| `navigation` | Hauptnavigation im Header |
| `serviceLinks` | Leistungs-Links im Footer |
| `openingHours` | Öffnungszeiten (Kontaktseite) |
| `helpCards` | „Wie können wir helfen?"-Karten inkl. Ziel-`href` |
| `contactReasons` | Auswahl im Anliegen-Dropdown des Formulars |
| `beraterQuestions`, `beraterResults` | Inhalte des Hörbedarfsberaters |
| `priceOrientation*` | Felder & Ergebnisse der Preis-Orientierung |
| `hearingSituations` | Kacheln des Hörsituations-Checks |

> **Wichtig:** Vor dem Go-Live in `company.url` die echte Produktionsdomain
> eintragen – sie wird für alle JSON-LD-URLs und Breadcrumbs verwendet.

---

## Interaktive Module

Liegen unter `components/modules/`. Alle sind Client-Komponenten, arbeiten rein
lokal (kein Backend, kein Tracking) und verlinken am Ende in das Kontaktformular.

### `Hoerbedarfsberater`
Mehrstufiger Frage-Assistent mit Fortschrittsbalken. Wertet die Antworten lokal
aus und leitet mit einem passenden, vorausgewählten Anliegen auf `/kontakt` weiter.

```tsx
import { Hoerbedarfsberater } from '@/components/modules/hoerbedarfsberater'
<Hoerbedarfsberater />
```

### `PreisOrientierung`
Chip-Auswahl für Versicherung, Versorgung, Wunschstufe und Funktionen.
Zeigt live eine unverbindliche Versorgungs-Empfehlung.

### `HoersituationsCheck`
Kachel-Auswahl typischer Hörsituationen; blendet einen kontextbezogenen
Hinweis und eine Termin-CTA ein.

**Deep-Link ins Formular:** Alle Module verlinken auf
`/kontakt?anliegen=<Wert>`. Der Wert muss exakt einem Eintrag aus
`contactReasons` entsprechen, sonst wird er ignoriert.

---

## Kontaktformular

`components/contact-form.tsx` ist wiederverwendbar und akzeptiert:

```tsx
<ContactForm defaultReason="Hörtest" defaultMessage="..." />
```

- **Validierung** clientseitig: Name, mind. eine Kontaktmöglichkeit
  (Telefon **oder** E-Mail), gültige E-Mail, Anliegen, Datenschutz-Häkchen.
- **Barrierefrei:** Fehler mit `aria-invalid`/`aria-describedby`, Fokus springt
  auf das erste fehlerhafte Feld.
- **Prefill** über die URL: `/kontakt?anliegen=<Wert>`.

> Das Formular ist ein **Frontend-Prototyp** ohne Backend. Zum Versand eine
> Server Action oder API-Route anbinden (Stelle: `handleSubmit`, aktuell nur
> `console.log`).

---

## SEO / strukturierte Daten (JSON-LD)

`components/seo/json-ld.tsx` stellt drei Server-Komponenten bereit:

| Komponente | Einsatz |
| --- | --- |
| `LocalBusinessJsonLd` | einmal pro Site sinnvoll (Kontaktseite) – Adresse, Öffnungszeiten, Bewertung |
| `FaqJsonLd` | auf Seiten mit FAQ; erhält dieselben `items` wie `FAQAccordion` |
| `BreadcrumbJsonLd` | Breadcrumb-Pfad je Seite |

```tsx
<FaqJsonLd items={faqs} />
<BreadcrumbJsonLd items={[{ name: 'Startseite', path: '/' }, ...]} />
```

Jede Seite pflegt zusätzlich ihr eigenes `metadata`-Objekt (Title/Description).

---

## Datenschutz / Consent-Embeds

`components/consent-embed.tsx` lädt externe Inhalte **erst nach Klick**:

- `MapConsent` – Google-Maps-Karte (kein Request an Google vor Zustimmung).
- `InstagramConsent` – Platzhalter/Gate für einen späteren Instagram-Feed.

So bleiben standardmäßig keine Drittanbieter-Requests auf der Seite.

---

## Design-System

- **Farben** (in `app/globals.css`, OKLCH): Primär = Amber `#F7A712`,
  Text = dunkles Anthrazit, warme Off-White-Flächen. Definiert als Design-Tokens
  (`--primary`, `--foreground`, `--accent`, …) – keine Direktfarben im Code.
- **Fonts:** `Source Serif 4` (Überschriften, `font-serif`) und `Inter`
  (Fließtext, `font-sans`), eingebunden in `app/layout.tsx`.
- **Baukasten** unter `components/page/`: `PageShell`, `PageHero`,
  `SEOContentBlock`, `ServiceCards`, `FeatureList`, `StepList`,
  `ComparisonTable`, `FAQAccordion`, `TrustBar`, `CTASection`, `RelatedLinks`.

---

## Barrierefreiheit

- Semantische Landmarks (`header`, `main`, `footer`), sinnvolle Überschriften.
- Alle interaktiven Auswahlfelder mit `role`, `aria-checked`, Tastaturfokus und
  sichtbarem Fokusring.
- Fortschrittsbalken mit `role="progressbar"` + `aria-valuenow`.
- Ergebnis-/Empfehlungsbereiche als `aria-live="polite"`.
- Farbkontraste nach WCAG AA; Zielgruppe skewt älter → große, gut lesbare Typo.

---

## Vor dem Go-Live

1. `company.url` in `lib/site-data.ts` auf die Produktionsdomain setzen.
2. Kontaktformular an einen echten Versand (Server Action / API / E-Mail) anbinden.
3. Reale Fotos in `public/images/` gegen die Platzhalter tauschen.
4. Instagram-Feed in `InstagramConsent` einbinden (API oder Embed-Widget).
5. Datenschutzerklärung & Impressum ergänzen und im Footer verlinken.
6. `aggregateRating` im `LocalBusinessJsonLd` an echte Bewertungszahlen anpassen.
