import type { LucideIcon } from 'lucide-react'
import {
  Ear,
  HandHeart,
  Scale,
  Euro,
  Waves,
  ShieldCheck,
  Wrench,
  MapPin,
  UserCheck,
  Boxes,
  BadgeCheck,
  HeartHandshake,
  CalendarClock,
  Users,
  Coffee,
  Tv,
  Phone,
  Briefcase,
  Music,
  Car,
  Moon,
  Sparkles,
  Volume2,
  Clock,
  Headphones,
  Brain,
} from 'lucide-react'

export const company = {
  name: 'Westphal Hörgeräte',
  street: 'Friedrich-Breuer-Straße 53',
  city: '53225 Bonn-Beuel',
  // Structured address parts (used for LocalBusiness JSON-LD).
  streetAddress: 'Friedrich-Breuer-Straße 53',
  postalCode: '53225',
  addressLocality: 'Bonn',
  addressRegion: 'Nordrhein-Westfalen',
  addressCountry: 'DE',
  phone: '0228 / 84 26 53 68',
  phoneHref: 'tel:+4922884265368',
  phoneE164: '+4922884265368',
  email: 'info@hoergeraete-beuel.de',
  emailHref: 'mailto:info@hoergeraete-beuel.de',
  rating: '5,0',
  claim: 'persönlich · unabhängig · kompetent',
  motto: 'Hören verbindet.',
  // Canonical base URL – replace with the production domain before go-live.
  // Übergangsweise die aktuelle Live-Domain. Nach der Umstellung wieder auf
  // 'https://www.hoergeraete-beuel.de' setzen (Canonical, Sitemap, Vorschaubilder).
  url: 'https://westphal.meindigitalerbetrieb.de',
  category: 'Hörakustiker / Hearing aid store',
}

export type NavLink = { label: string; href: string; badge?: string }
export type NavGroup = { label: string; children: NavLink[] }
export type NavEntry = NavLink | NavGroup

export const navigation: NavEntry[] = [
  { label: 'Home', href: '/' },
  { label: 'Warum wir?', href: '/warum-westphal' },
  {
    label: 'Unser Anpassungskonzept',
    children: [
      { label: 'Klangwellen Anpassverfahren', href: '/klangwellen-anpassverfahren' },
      { label: 'Das passende Hörsystem wählen', href: '/hoergeraete-bonn-beuel' },
      { label: 'Kauf-Ratgeber', href: '/hoergeraete-testen' },
      { label: 'Hörgeräte-Preise', href: '/preise-krankenkasse' },
      { label: 'Krankenkassenzuschuss', href: '/preise-krankenkasse#krankenkasse' },
      { label: 'Hörgeräte bei Tinnitus', href: '/tinnitusberatung-bonn' },
      { label: 'Hörtraining erleben', href: '/hoertraining-bonn' },
      { label: 'Übungs-App tonuvio', href: '/tonuvio', badge: 'Neu' },
      { label: 'Alles über Gehörschutz', href: '/gehoerschutz-bonn' },
    ],
  },
  { label: 'Jobs', href: '/jobs' },
]

/** Leistungen-Spalte im Footer. */
export const footerServiceLinks = [
  { label: 'Hörgeräte', href: '/hoergeraete-bonn-beuel' },
  { label: 'Hörtest', href: '/hoertest-bonn-beuel' },
  { label: 'Preise & Krankenkasse', href: '/preise-krankenkasse' },
  { label: 'Tinnitusberatung', href: '/tinnitusberatung-bonn' },
  { label: 'Hörtraining', href: '/hoertraining-bonn' },
  { label: 'Übungs-App tonuvio', href: '/tonuvio' },
  { label: 'Gehörschutz', href: '/gehoerschutz-bonn' },
  { label: 'Service & Reparatur', href: '/service-reparatur' },
]

/** Informationen-Spalte im Footer. */
export const footerInfoLinks = [
  { label: 'Warum Westphal?', href: '/warum-westphal' },
  { label: 'Kontakt', href: '/kontakt' },
  { label: 'Datenschutz', href: '/datenschutz' },
  { label: 'Impressum', href: '/impressum' },
]

export const openingHours = [
  { day: 'Montag – Freitag', time: '09:00 – 18:00 Uhr' },
  { day: 'Samstag', time: 'nach Vereinbarung' },
  { day: 'Sonntag', time: 'geschlossen' },
]

/**
 * Maschinenlesbare Öffnungszeiten für die Live-Anzeige „Jetzt geöffnet“.
 * Schlüssel = Wochentag (0 = Sonntag … 6 = Samstag). Muss zu `openingHours`
 * und zur JSON-LD-Angabe passen.
 */
export const openingSchedule: Partial<Record<number, { opens: string; closes: string }>> = {
  1: { opens: '09:00', closes: '18:00' },
  2: { opens: '09:00', closes: '18:00' },
  3: { opens: '09:00', closes: '18:00' },
  4: { opens: '09:00', closes: '18:00' },
  5: { opens: '09:00', closes: '18:00' },
}

export type HelpCard = {
  icon: LucideIcon
  title: string
  text: string
  cta: string
  href: string
}

export const helpCards: HelpCard[] = [
  {
    icon: Ear,
    title: 'Hörtest vereinbaren',
    text: 'Für alle, die erst einmal wissen möchten, wie gut sie hören.',
    cta: 'Hörtest vereinbaren',
    href: '/hoertest-bonn-beuel',
  },
  {
    icon: HandHeart,
    title: 'Hörgeräteberatung starten',
    text: 'Für Erstversorgungen, neue Hörgeräte und die passende Auswahl.',
    cta: 'Beratung starten',
    href: '/hoergeraete-bonn-beuel',
  },
  {
    icon: Euro,
    title: 'Preise & Krankenkasse verstehen',
    text: 'Für alle Fragen zu Zuzahlung, Zuschuss und Kosten.',
    cta: 'Preise ansehen',
    href: '/preise-krankenkasse',
  },
  {
    icon: Wrench,
    title: 'Service / bestehende Hörgeräte prüfen',
    text: 'Für Nachjustierung, Reparatur, Reinigung oder eine zweite Einschätzung.',
    cta: 'Service ansehen',
    href: '/service-reparatur',
  },
]

/** Kleine, sekundäre Textlinks unterhalb der vier Hauptkarten. */
export const helpSecondaryLinks = [
  { label: 'Tinnitusberatung', href: '/tinnitusberatung-bonn' },
  { label: 'Gehörschutz', href: '/gehoerschutz-bonn' },
  { label: 'Hörgeräte testen', href: '/hoergeraete-testen' },
]

export type ReasonCard = {
  icon: LucideIcon
  title: string
  text: string
}

export const reasons: ReasonCard[] = [
  {
    icon: MapPin,
    title: 'Beueler O(h)riginal seit 2012',
    text: 'Wir sind fest in Bonn-Beuel verwurzelt und für viele Kundinnen und Kunden seit Jahren ein verlässlicher Ansprechpartner.',
  },
  {
    icon: HandHeart,
    title: 'Persönliche Meisterbetreuung',
    text: 'Sie erhalten keine standardisierte Schnellberatung, sondern eine individuelle Begleitung durch erfahrene Hörakustik-Profis.',
  },
  {
    icon: Scale,
    title: 'Herstellerunabhängige Auswahl',
    text: 'Wir vergleichen Hörsysteme verschiedener Marken und empfehlen nicht zuerst eine Marke, sondern eine Lösung für Ihren Höralltag.',
  },
  {
    icon: Euro,
    title: 'Faire und transparente Preise',
    text: 'Wir erklären offen, welche Versorgung möglich ist, welche Funktionen sinnvoll sind und welche Kosten übernommen werden können.',
  },
  {
    icon: HeartHandshake,
    title: 'Kein Verkaufsdruck',
    text: 'Sie sollen verstehen, vergleichen und ausprobieren können, bevor Sie sich entscheiden.',
  },
  {
    icon: CalendarClock,
    title: '30 Tage Ausprobe',
    text: 'Testen Sie Hörgeräte in Ihrem echten Alltag: zu Hause, unterwegs, in Gesprächen, im Café, beim Fernsehen oder im Beruf.',
  },
]

export const appointmentSteps = [
  'Gespräch',
  'Hörtest',
  'Erklärung',
  'Beratung',
  'Kostenklärung',
  'Probetragen',
  'Nachjustierung',
]

export const fittingBullets = [
  'einmalig in Beuel',
  'lautheitsbasierte Anpassung für natürlichen Hörausgleich',
  'transparenter Vergleich verschiedener Hörsysteme',
  'bessere Sprachfokussierung in Gesellschaft',
  'schrittweise Nachjustierung nach Ihren Erfahrungen im Alltag',
]

export type PriceTier = {
  key: 'basis' | 'standard' | 'komfort' | 'premium'
  icon: LucideIcon
  title: string
  subtitle: string
  /** Eigenanteil pro Hörgerät bei Krankenkassen-Zuschuss (gesetzlich versichert). */
  priceKasse: string
  /** ab-Preis pro Hörgerät für privat Versicherte. */
  pricePrivat: string
  /** Optionaler Zusatz, z. B. wechselnde Angebote. */
  note?: string
  /** Kurzbeschreibung für Übersichtskarten. */
  text: string
  /** Beispielhafte Geräte dieser Kategorie. */
  devices?: string[]
  featured?: boolean
}

// Preise laut veröffentlichter Preisliste (Stand aktuell). Alle Preise pro Hörgerät.
export const priceTiers: PriceTier[] = [
  {
    key: 'basis',
    icon: BadgeCheck,
    title: 'Basisleistung',
    subtitle: 'Optimales TV-Verstehen',
    priceKasse: '0 €',
    pricePrivat: 'ab 685 €',
    note: 'wechselnde Angebote',
    text: 'Solide, zuzahlungsfreie Grundversorgung mit Krankenkassenzuschuss – für alle, die eine einfache und zuverlässige Lösung suchen.',
  },
  {
    key: 'standard',
    icon: Boxes,
    title: 'Standardleistung',
    subtitle: 'Einstieg Akku-Gerät',
    priceKasse: '600 €',
    pricePrivat: 'ab 1.300 €',
    note: 'wechselnde Angebote',
    text: 'Mehr Komfort im Alltag mit Akku, Bluetooth und kabelloser TV-Verbindung.',
  },
  {
    key: 'komfort',
    icon: Sparkles,
    title: 'Komfortleistung',
    subtitle: '360° Sprachfokussierung',
    priceKasse: '1.400 €',
    pricePrivat: 'ab 2.100 €',
    text: 'Besseres Sprachverstehen in Gruppen, Restaurant und Beruf – mit rundum gerichteter Sprachfokussierung.',
    devices: [
      'GN Vivia 5',
      'Oticon Intent 3',
      'Phonak Infinio 50',
      'Signia 3 IX BCT',
      'Widex 220',
      'weitere Hersteller',
    ],
    featured: true,
  },
  {
    key: 'premium',
    icon: ShieldCheck,
    title: 'Premium High-End',
    subtitle: 'KI-Unterstützung',
    priceKasse: '2.200 €',
    pricePrivat: 'ab 2.900 €',
    text: 'Modernste Technik mit KI und Hallreduzierung für höchste Ansprüche in jeder Hörsituation.',
    devices: [
      'GN Vivia 9',
      'Oticon Intent 1',
      'Phonak Infinio 90',
      'Signia 7 IX BCT',
      'Widex 440',
      'weitere Hersteller',
    ],
  },
]

/**
 * Vergleichsmatrix der unterscheidenden Funktionen je Leistung.
 * Werte: true = enthalten, false = nicht enthalten, string = besondere Ausprägung.
 * Reihenfolge der Werte entspricht priceTiers: [basis, standard, komfort, premium].
 */
export type PriceFeatureRow = {
  label: string
  values: (boolean | string)[]
}

export const priceFeatureMatrix: PriceFeatureRow[] = [
  { label: 'Sprachfokussierung', values: [true, true, '360°', '360°'] },
  { label: 'Störgeräuschreduzierung', values: [true, true, true, true] },
  { label: 'Tinnitus-Therapie', values: [true, true, true, true] },
  { label: 'Windreduzierung & Impulsschall', values: [false, true, true, true] },
  { label: 'Akku-System', values: [false, true, true, true] },
  { label: 'Bluetooth', values: [false, true, true, true] },
  { label: 'Kabellose TV-Verbindung', values: [false, true, true, true] },
  { label: 'Kostenloses Leihgerät', values: [false, true, true, true] },
  { label: 'Hallreduzierung', values: [false, false, false, true] },
  { label: 'KI-Technologie', values: [false, false, false, true] },
]

/** In jedem Preis enthalten – gilt für alle Leistungsstufen. */
export const priceIncludedAll = [
  'Probetragen verschiedener Hersteller',
  'lautheitsbasiertes Anpassverfahren',
  'kostenlose Hörtests',
  'Nachsorge über 6 Jahre',
  'immer ein offenes Ohr für Ihre Fragen',
]

export const priceFootnotes = [
  'Alle Preise verstehen sich pro Hörgerät.',
  'Kassen-Eigenanteil: ab-Preise bei einem Krankenkassenzuschuss von 685 € pro Hörgerät, zzgl. 10 € gesetzliche Zuzahlung.',
  'Privatpreis: ab-Preise für privat Versicherte.',
  'Gelabelte Hörsysteme (z. B. Audibene, Amplifon, GEERS, KIND) sind nicht gelistet – wir prüfen gern, ob es sich um Geräte der neuesten Generation handelt.',
]

export const trustPoints = [
  '5,0 ★ Google-Bewertung',
  'Persönlich · Unabhängig · Kompetent',
  'Seit 2012 in Bonn-Beuel',
  '6 Jahre Service und Nachsorge',
]

export type Partner = {
  name: string
  src: string
  alt: string
  /** Etwas engere Darstellung für breite Wortmarken. */
  wide?: boolean
}

/** Hersteller-/Partnerlogos für die Logo-Leiste (Originalprodukte, herstellerunabhängig). */
export const partners: Partner[] = [
  {
    name: 'Phonak',
    src: '/images/partners/phonak.png',
    alt: 'Phonak Hörgeräte – Partner von Westphal Hörgeräte in Bonn-Beuel',
  },
  {
    name: 'Oticon',
    src: '/images/partners/oticon.png',
    alt: 'Oticon Hörgeräte – Partner von Westphal Hörgeräte in Bonn-Beuel',
    wide: true,
  },
  {
    name: 'Signia',
    src: '/images/partners/signia.jpg',
    alt: 'Signia Hörgeräte – Partner von Westphal Hörgeräte in Bonn-Beuel',
  },
  {
    name: 'Widex',
    src: '/images/partners/widex.png',
    alt: 'Widex Hörgeräte – Partner von Westphal Hörgeräte in Bonn-Beuel',
    wide: true,
  },
  {
    name: 'ReSound',
    src: '/images/partners/resound.webp',
    alt: 'ReSound GN Hörgeräte – Partner von Westphal Hörgeräte in Bonn-Beuel',
    wide: true,
  },
  {
    name: 'Bernafon',
    src: '/images/partners/bernafon.webp',
    alt: 'Bernafon Hörgeräte – Partner von Westphal Hörgeräte in Bonn-Beuel',
    wide: true,
  },
  {
    name: 'Hörluchs',
    src: '/images/partners/hoerluchs.svg',
    alt: 'Hörluchs Gehörschutz – Partner von Westphal Hörgeräte in Bonn-Beuel',
    wide: true,
  },
  {
    name: 'Humantechnik',
    src: '/images/partners/humantechnik.png',
    alt: 'Humantechnik Signalanlagen – Partner von Westphal Hörgeräte in Bonn-Beuel',
    wide: false,
  },
  {
    name: 'Bellman & Symfon',
    src: '/images/partners/bellman-symfon.png',
    alt: 'Bellman & Symfon Signaltechnik – Partner von Westphal Hörgeräte in Bonn-Beuel',
    wide: true,
  },
  {
    name: 'Klangspektrum',
    src: '/images/partners/klangspektrum.png',
    alt: 'Klangspektrum – Partner von Westphal Hörgeräte in Bonn-Beuel',
    wide: true,
  },
]

/**
 * SEO-Footer-Daten: Hersteller, Geräte-/Bauformen und Standorte im Großraum
 * Bonn. Verbessern die lokale Auffindbarkeit und geben Orientierung.
 */
export const footerManufacturers = [
  'Phonak',
  'Oticon',
  'Signia',
  'Widex',
  'ReSound',
  'Bernafon',
  'Hörluchs',
]

export const footerDeviceTypes: { label: string; href: string }[] = [
  { label: 'Hinter-dem-Ohr (HdO)', href: '/hoergeraete-bonn-beuel' },
  { label: 'Im-Ohr-Hörgeräte (IdO)', href: '/hoergeraete-bonn-beuel' },
  { label: 'RIC / Ex-Hörer', href: '/hoergeraete-bonn-beuel' },
  { label: 'Akku-Hörgeräte', href: '/hoergeraete-bonn-beuel' },
  { label: 'Bluetooth-Hörgeräte', href: '/hoergeraete-bonn-beuel' },
  { label: 'Tinnitus-Hörgeräte', href: '/tinnitusberatung-bonn' },
  { label: 'Gehörschutz nach Maß', href: '/gehoerschutz-bonn' },
]

export const footerLocations = [
  'Bonn-Beuel',
  'Bonn-Zentrum',
  'Bad Godesberg',
  'Vilich',
  'Schwarzrheindorf',
  'Küdinghoven',
  'Oberkassel',
  'Holzlar',
  'Vilich-Müldorf',
  'Pützchen',
  'Limperich',
  'Ramersdorf',
  'Königswinter',
  'Sankt Augustin',
  'Niederkassel',
  'Troisdorf',
]

export const contactReasons = [
  'Hörtest',
  'Hörgeräteberatung',
  'Preise & Krankenkasse',
  'Hörgeräte testen',
  'bestehende Hörgeräte optimieren',
  'Tinnitusberatung',
  'Hörtraining',
  'Übungs-App tonuvio',
  'Gehörschutz',
  'Reparatur / Service',
  'Bewerbung',
  'Rückrufwunsch',
  'Sonstiges',
  ] as const

/* -------------------------------------------------------------------------- */
/* Modul 1 – Hörbedarfsberater                                                */
/* -------------------------------------------------------------------------- */

export type BeraterQuestion = {
  id: string
  question: string
  /** true = Mehrfachauswahl, false = Einfachauswahl */
  multi: boolean
  options: string[]
}

export const beraterIntro =
  'Finden Sie in wenigen Schritten heraus, welcher nächste Schritt für Sie sinnvoll sein könnte. Der Berater ersetzt keine persönliche Höranalyse, hilft aber bei der ersten Orientierung.'

export const beraterQuestions: BeraterQuestion[] = [
  {
    id: 'situation',
    question: 'Geht es um Ihr erstes Hörgerät oder nutzen Sie bereits eines?',
    multi: false,
    options: [
      'Ich suche mein erstes Hörgerät',
      'Ich nutze bereits Hörgeräte',
      'Ich bin mit meinen aktuellen Hörgeräten unzufrieden',
      'Ich möchte zunächst nur mein Gehör prüfen lassen',
    ],
  },
  {
    id: 'difficult',
    question: 'In welchen Situationen fällt das Hören besonders schwer?',
    multi: true,
    options: [
      'Gespräche in Gruppen',
      'Restaurant oder Café',
      'Fernsehen',
      'Telefonieren',
      'Beruf oder Meetings',
      'Draußen und Verkehr',
      'Tinnitus oder Ohrgeräusche',
      'Ich bin unsicher',
    ],
  },
  {
    id: 'important',
    question: 'Was ist Ihnen besonders wichtig?',
    multi: true,
    options: [
      'gutes Sprachverstehen',
      'möglichst unauffällige Hörgeräte',
      'einfache Bedienung',
      'Akku',
      'Bluetooth',
      'transparente Kosten',
      'möglichst geringe Zuzahlung',
      'persönliche Beratung ohne Druck',
    ],
  },
  {
    id: 'insurance',
    question: 'Wie sind Sie versichert?',
    multi: false,
    options: ['gesetzlich', 'privat', 'beihilfeberechtigt', 'unsicher'],
  },
  {
    id: 'nextStep',
    question: 'Was wäre für Sie der angenehmste nächste Schritt?',
    multi: false,
    options: [
      'Hörtest vereinbaren',
      'Rückruf wünschen',
      'Kosten und Zuschüsse verstehen',
      'bestehende Hörgeräte prüfen lassen',
      'Tinnitusberatung',
    ],
  },
]

export const beraterResults = {
  standard:
    'Für Sie scheint eine persönliche Höranalyse mit anschließender Beratung sinnvoll. Im Termin klären wir gemeinsam Ihre Hörsituation, mögliche Technik, Krankenkassenzuschuss und passende nächste Schritte – ohne Verkaufsdruck.',
  unzufrieden:
    'Ihre Angaben sprechen dafür, dass eine Überprüfung Ihrer aktuellen Hörgeräte sinnvoll sein kann. Oft lassen sich Klang, Sprachverstehen oder Tragekomfort durch Nachjustierung verbessern. Falls nötig, vergleichen wir auch alternative Lösungen.',
  tinnitus:
    'Ihre Angaben sprechen für eine Beratung zu Hörverlust und Tinnitus. Moderne Hörsysteme können in vielen Fällen entlasten, wenn zusätzlich ein Hörverlust vorliegt. Bei neuem oder starkem Tinnitus empfehlen wir zusätzlich eine HNO-Abklärung.',
}

/* -------------------------------------------------------------------------- */
/* Modul 2 – Preis- und Krankenkassen-Orientierung                            */
/* -------------------------------------------------------------------------- */

export const priceOrientationIntro =
  'Verschaffen Sie sich eine erste Orientierung zu möglichen Kosten. Die genaue Empfehlung hängt von Hörverlust, Alltagssituation und Krankenkasse ab.'

export type PriceOrientationField = {
  id: string
  label: string
  multi: boolean
  options: string[]
}

export const priceOrientationFields: PriceOrientationField[] = [
  {
    id: 'insurance',
    label: 'Versicherung',
    multi: false,
    options: ['gesetzlich', 'privat', 'beihilfeberechtigt', 'unsicher'],
  },
  {
    id: 'coverage',
    label: 'Versorgung',
    multi: false,
    options: ['ein Ohr', 'beide Ohren', 'unsicher'],
  },
  {
    id: 'level',
    label: 'Wunschversorgung',
    multi: false,
    options: ['Basis', 'Standard', 'Komfort', 'Premium', 'unsicher'],
  },
  {
    id: 'features',
    label: 'Wunschfunktionen',
    multi: true,
    options: [
      'Akku',
      'Bluetooth',
      'gutes Sprachverstehen',
      'KI-Unterstützung',
      'TV-Verbindung',
      'Tinnitus-Funktion',
    ],
  },
]

export type PriceOrientationResult = {
  key: 'basis' | 'standard' | 'komfort' | 'premium'
  title: string
  text: string
  priceKasse: string
  pricePrivat: string
}

export const priceOrientationResults: PriceOrientationResult[] = [
  {
    key: 'basis',
    title: 'Basisleistung',
    text: 'Zuzahlungsfreie Grundversorgung mit Krankenkassenzuschuss (0 € Eigenanteil, zzgl. 10 € gesetzliche Zuzahlung).',
    priceKasse: '0 €',
    pricePrivat: 'ab 685 €',
  },
  {
    key: 'standard',
    title: 'Standardleistung',
    text: 'Einstieg ins Akku-Gerät mit Bluetooth und kabelloser TV-Verbindung für mehr Alltagskomfort.',
    priceKasse: '600 €',
    pricePrivat: 'ab 1.300 €',
  },
  {
    key: 'komfort',
    title: 'Komfortleistung',
    text: 'Bessere Unterstützung in schwierigeren Hörsituationen mit 360°-Sprachfokussierung.',
    priceKasse: '1.400 €',
    pricePrivat: 'ab 2.100 €',
  },
  {
    key: 'premium',
    title: 'Premium High-End',
    text: 'Modernste Technik mit KI und Hallreduzierung für höchste Ansprüche.',
    priceKasse: '2.200 €',
    pricePrivat: 'ab 2.900 €',
  },
]

export const priceOrientationDisclaimer =
  'Diese Orientierung ist unverbindlich und ersetzt keine persönliche Beratung. Die genaue Versorgung hängt von Hörverlust, Ohrform, Alltag und Versicherungsstatus ab.'

/* -------------------------------------------------------------------------- */
/* Modul 3 – Hörsituations-Check                                              */
/* -------------------------------------------------------------------------- */

export type HearingSituation = {
  icon: LucideIcon
  label: string
  /** Kurzer, beruhigender Erklärtext – erscheint nach dem Antippen. */
  text: string
}

export const hearingSituations: HearingSituation[] = [
  {
    icon: Users,
    label: 'Gespräche',
    text: 'Damit Sie Ihren Gesprächspartnern wieder entspannt folgen können, stellen wir Hörgeräte gezielt auf klares Sprachverstehen ein.',
  },
  {
    icon: Coffee,
    label: 'Restaurant & Gruppen',
    text: 'In lauter Umgebung heben moderne Hörgeräte Stimmen hervor und dämpfen Störgeräusche – das besprechen wir in Ruhe.',
  },
  {
    icon: Tv,
    label: 'Fernsehen',
    text: 'Fernsehen in angenehmer Lautstärke: Auf Wunsch verbinden wir Ihre Hörgeräte direkt und kabellos mit dem Fernseher.',
  },
  {
    icon: Phone,
    label: 'Telefonieren',
    text: 'Telefonate lassen sich auf Wunsch direkt auf beide Hörgeräte übertragen, damit Sie klar und bequem verstehen.',
  },
  {
    icon: Briefcase,
    label: 'Beruf',
    text: 'Im Beruf und in Besprechungen unterstützen wir Sie mit Einstellungen, die konzentriertes Zuhören erleichtern.',
  },
  {
    icon: Waves,
    label: 'Tinnitus',
    text: 'Bei Ohrgeräuschen beraten wir einfühlsam, wie Hörgeräte entlasten können. Bei neuem Tinnitus empfehlen wir zusätzlich eine HNO-Abklärung.',
  },
]

/* -------------------------------------------------------------------------- */
/* Modul 4 – Hörtraining: Mini-Hörübung (interaktive Demo)                     */
/* -------------------------------------------------------------------------- */

/** Sicherheits- und Nutzungshinweis vor dem Start (Schritt 0). */
export const hoertrainingNotice = {
  headline: 'Kurze Hörübung starten',
  text: 'Diese kleine Demo zeigt vereinfacht, wie Hörverstehen in Alltagssituationen funktionieren kann. Sie ersetzt keinen Hörtest und ist keine medizinische Diagnose.',
  hints: [
    'Bitte stellen Sie die Lautstärke angenehm ein.',
    'Nutzen Sie Kopfhörer, wenn möglich.',
    'Beenden Sie die Übung, wenn Geräusche unangenehm sind.',
    'Die Beispiele sind simuliert und dienen nur der Orientierung.',
  ],
  privacy: 'Ihre Eingaben werden nicht gespeichert. Die Übung dient nur der Orientierung.',
}

export type HoertrainingStep = {
  /** Kurzer Titel des Schritts. */
  headline: string
  /** Aufgabe / Anweisung über dem Audio-Element. */
  task: string
  /** Der Satz bzw. das Wort, das per Sprachausgabe vorgelesen wird. */
  spoken: string
  /** true = simuliertes Café-/Stimmengewirr im Hintergrund abspielen. */
  withNoise?: boolean
  /** Antwortoptionen (Multiple Choice). */
  options?: string[]
  /** Index der korrekten Option in `options`. */
  correct?: number
  /** Erklärendes Feedback nach der Auswahl. */
  feedback?: string
  /** Nur für den Lautstärke-Schritt – ohne Frage. */
  isVolume?: boolean
}

export const hoertrainingSteps: HoertrainingStep[] = [
  {
    headline: 'Lautstärke angenehm einstellen',
    task: 'Sie hören gleich ein kurzes Beispiel. Stellen Sie die Lautstärke so ein, dass sie angenehm und nicht zu laut ist.',
    spoken: 'Dies ist ein kurzer Lautstärke-Test.',
    isVolume: true,
  },
  {
    headline: 'Sprache in ruhiger Umgebung',
    task: 'Hören Sie den kurzen Satz und wählen Sie aus, was gesagt wurde.',
    spoken: 'Der Termin ist am Donnerstag.',
    options: [
      'Der Termin ist am Donnerstag.',
      'Der Termin ist am Dienstag.',
      'Der Termin ist am Donnerstagabend.',
    ],
    correct: 0,
    feedback:
      'In ruhiger Umgebung fällt Sprachverstehen oft leichter. Schwieriger wird es, wenn Hintergrundgeräusche hinzukommen.',
  },
  {
    headline: 'Sprache im Café',
    task: 'Jetzt hören Sie einen Satz mit simuliertem Hintergrundgeräusch. Wählen Sie wieder aus, was Sie verstanden haben.',
    spoken: 'Wir treffen uns vorne am Eingang.',
    withNoise: true,
    options: [
      'Wir treffen uns vorne am Eingang.',
      'Wir treffen uns morgen am Eingang.',
      'Wir setzen uns vorne ans Fenster.',
    ],
    correct: 0,
    feedback:
      'In solchen Situationen muss das Gehirn Sprache von anderen Geräuschen trennen. Genau diese Hörverarbeitung kann durch gezielte Übungen unterstützt werden.',
  },
  {
    headline: 'Ähnliche Wörter erkennen',
    task: 'Manche Wörter unterscheiden sich nur durch kleine Klangdetails. Hören Sie das Wort und wählen Sie die passende Antwort.',
    spoken: 'Tasse',
    options: ['Tasse', 'Tasche', 'Kasse'],
    correct: 0,
    feedback:
      'Kleine Unterschiede in Lauten sind für das Sprachverstehen wichtig. Wenn bestimmte Frequenzen längere Zeit schlechter wahrgenommen wurden, kann das Unterscheiden anstrengender werden.',
  },
  {
    headline: 'Auf eine Stimme konzentrieren',
    task: 'Stellen Sie sich vor, mehrere Personen sprechen gleichzeitig. Welches Wort sollten Sie sich merken?',
    spoken: 'Bitte merken Sie sich das Wort: Garten.',
    withNoise: true,
    options: ['Garten', 'Karte', 'Warten'],
    correct: 0,
    feedback:
      'Im Alltag geht es oft nicht nur darum, etwas zu hören, sondern die richtige Stimme herauszufiltern. Hörtraining kann helfen, diese Aufmerksamkeit gezielter einzusetzen.',
  },
]

export const hoertrainingResult = {
  headline: 'Ihre Mini-Hörübung ist abgeschlossen',
  intro:
    'Diese Übung zeigt vereinfacht, wie unterschiedlich Hörverstehen je nach Situation sein kann. In Ruhe ist Sprache oft gut verständlich. In Gruppen, im Café oder bei ähnlichen Lauten wird das Verstehen deutlich anspruchsvoller.',
  good: 'Sie konnten die Beispiele gut unterscheiden. Wenn Sie im Alltag dennoch Probleme mit Sprache, Gruppen oder Hintergrundgeräuschen haben, lohnt sich eine persönliche Höranalyse.',
  mixed:
    'Die Übung kann ein Hinweis sein, dass bestimmte Hörsituationen anspruchsvoll sind. Eine persönliche Höranalyse kann klären, ob Hörtraining, eine Hörgeräteanpassung oder eine Nachjustierung sinnvoll ist.',
  disclaimer:
    'Diese Demo ist keine Diagnose und ersetzt keinen professionellen Hörtest. Ihre Eingaben werden nicht gespeichert.',
}

/** „Wann kann Hörtraining helfen?" – Karten. */
export const hoertrainingWhenCards: ReasonCard[] = [
  {
    icon: Ear,
    title: 'Neue Hörgeräte klingen ungewohnt',
    text: 'Wenn plötzlich wieder viele Geräusche hörbar sind, braucht das Gehirn Zeit zur Gewöhnung.',
  },
  {
    icon: Volume2,
    title: 'Sprache bleibt trotz Hörgerät anstrengend',
    text: 'Manchmal reicht Technik allein nicht aus. Dann kann gezielte Hörgewöhnung unterstützen.',
  },
  {
    icon: Users,
    title: 'Gespräche in Gruppen sind schwierig',
    text: 'Besonders bei Hintergrundgeräuschen muss das Gehirn wichtige Sprache herausfiltern.',
  },
  {
    icon: Clock,
    title: 'Hörgeräte werden zu selten getragen',
    text: 'Wenn Geräte als unangenehm empfunden werden, kann eine Kombination aus Nachjustierung und Training sinnvoll sein.',
  },
  {
    icon: Waves,
    title: 'Tinnitus belastet zusätzlich',
    text: 'Bei Tinnitus kann eine Kombination aus Hörgeräteberatung, Entlastung und Hörgewöhnung sinnvoll sein.',
  },
]

/** Ablauf der Beratung bei Westphal (nummerierte Schritte). */
export const hoertrainingProcess: { title: string; text: string }[] = [
  {
    title: 'Hörsituation verstehen',
    text: 'Wir sprechen darüber, wo Hören schwerfällt und was Sie verbessern möchten.',
  },
  {
    title: 'Hörstatus prüfen',
    text: 'Bei Bedarf prüfen wir Ihr Hörvermögen und Ihre aktuelle Hörgeräteversorgung.',
  },
  {
    title: 'Alltag einordnen',
    text: 'Wir schauen auf typische Situationen: Gespräche, Beruf, Restaurant, Fernsehen, Tinnitus oder bestehende Geräte.',
  },
  {
    title: 'Möglichkeiten erklären',
    text: 'Wir erklären, welche Formen von Hörtraining grundsätzlich infrage kommen können.',
  },
  {
    title: 'Nächsten Schritt festlegen',
    text: 'Je nach Situation empfehlen wir Hörtest, Nachjustierung, Hörtraining, Tinnitusberatung oder eine HNO-Abklärung.',
  },
]

/** Kernpunkte der unabhängigen Beratung. */
export const hoertrainingIndependencePoints = [
  'unabhängige Einschätzung Ihrer Hörsituation',
  'Beratung zu verschiedenen Trainingsmöglichkeiten',
  'Prüfung bestehender Hörgeräte und Einstellungen',
  'realistische Erwartungen ohne Heilsversprechen',
  'persönliche Begleitung in Bonn-Beuel',
]

export const hoertrainingFaqs = [
  {
    question: 'Was ist Hörtraining?',
    answer:
      'Hörtraining umfasst gezielte Übungen, mit denen die Verarbeitung von Sprache, Geräuschen und Klängen unterstützt werden kann.',
  },
  {
    question: 'Ist die Mini-Hörübung ein Hörtest?',
    answer:
      'Nein. Die Übung ist nur eine vereinfachte Demonstration und keine medizinische Messung. Ein professioneller Hörtest erfolgt persönlich bei uns im Fachgeschäft.',
  },
  {
    question: 'Brauche ich Hörtraining trotz Hörgerät?',
    answer:
      'Nicht immer. Wenn Sprache trotz Hörgerät schwer verständlich bleibt oder neue Höreindrücke sehr anstrengend wirken, kann Hörtraining sinnvoll sein.',
  },
  {
    question: 'Ist Hörtraining an einen bestimmten Anbieter gebunden?',
    answer:
      'Nein. Es gibt verschiedene Konzepte. Wir beraten unabhängig und prüfen, welche Möglichkeit zu Ihrer Situation passt.',
  },
  {
    question: 'Hilft Hörtraining bei Tinnitus?',
    answer:
      'Hörtraining ist keine automatische Tinnitusbehandlung. Wenn Tinnitus mit Hörverlust, Höranstrengung oder Hörentwöhnung zusammenhängt, kann eine kombinierte Beratung sinnvoll sein.',
  },
  {
    question: 'Werden meine Ergebnisse gespeichert?',
    answer:
      'Nein. Die Mini-Hörübung dient nur der Orientierung. Ihre Antworten werden nicht gespeichert.',
  },
]

export const hoertrainingRelated = [
  {
    label: 'Übungs-App tonuvio',
    description: 'Kurze Übungen für das Verstehen von Sprache im Alltag.',
    href: '/tonuvio',
  },
  {
    label: 'Hörtest Bonn-Beuel',
    description: 'Professionelle Höranalyse – persönlich im Fachgeschäft.',
    href: '/hoertest-bonn-beuel',
  },
  {
    label: 'Hörgeräte bei Tinnitus',
    description: 'Entlastung und Hörgewöhnung bei Ohrgeräuschen.',
    href: '/tinnitusberatung-bonn',
  },
  {
    label: 'Klangwellen-Anpassverfahren',
    description: 'Behutsame, individuelle Anpassung Ihres Hörens.',
    href: '/klangwellen-anpassverfahren',
  },
]

/* -------------------------------------------------------------------------- */
/* tonuvio: Übungs-App für Sprach- und Hörverstehen (Unterseite /tonuvio)      */
/*                                                                            */
/* Positionierung: Trainingsanwendung für das Verstehen von Sprache im        */
/* Alltag, kein Medizinprodukt. Texte bewusst ohne Bezug auf Erkennung,       */
/* Behandlung, Linderung oder Ausgleich von Hörstörungen und ohne             */
/* Wirkversprechen. Vor Änderungen bitte tonuvioPurpose beachten.             */
/* -------------------------------------------------------------------------- */

/** Zweckbestimmung, wortgleich auf Website, in App und Unterlagen verwenden. */
export const tonuvioPurpose =
  'tonuvio ist eine Trainingsanwendung, mit der Erwachsene das Verstehen von Sprache in anspruchsvollen Alltagssituationen üben, etwa bei Hintergrundgeräuschen, mehreren Stimmen oder am Telefon. tonuvio ist kein Medizinprodukt. Die App dient nicht der Erkennung, Behandlung, Linderung oder dem Ausgleich von Hörstörungen, misst kein Hörvermögen und ersetzt weder Hörtest noch Hörgeräteanpassung oder ärztliche Untersuchung.'

/** Anliegen-Wert für das Kontaktformular (muss in `contactReasons` stehen). */
export const tonuvioContactHref = '/kontakt?anliegen=Übungs-App tonuvio'

export const tonuvioFacts = [
  '6 bis 10 Minuten pro Einheit',
  'Mit oder ohne Hörsystem nutzbar',
  'Persönlich bei uns eingerichtet',
]

/** Alltagssituationen, wie sie auch in der App zur Auswahl stehen. */
export const tonuvioSituations = [
  {
    title: 'Im Restaurant und am Familientisch',
    text: 'Mehrere Stimmen, Geschirr, Musik. Einem Gespräch zu folgen, verlangt hier viel Aufmerksamkeit.',
  },
  {
    title: 'Am Telefon',
    text: 'Ohne Gesicht gegenüber kommt es auf jedes Wort an: Uhrzeiten, Namen, Hausnummern.',
  },
  {
    title: 'In der Gruppe',
    text: 'Sprecherwechsel und längere Beiträge wollen sortiert und behalten werden.',
  },
]

export type TonuvioDomain = {
  title: string
  text: string
  /** Bereichsfarbe aus dem tonuvio-Styleguide (Text auf Weiß ≥ 5,9:1). */
  color: string
}

export const tonuvioDomains: TonuvioDomain[] = [
  {
    title: 'Sprache im Geräusch',
    text: 'Wörter und Sätze verstehen, während im Hintergrund etwas los ist.',
    color: '#3F6B5A',
  },
  {
    title: 'Zielstimme fokussieren',
    text: 'Einer bestimmten Stimme folgen und die entscheidende Information heraushören.',
    color: '#2E5F73',
  },
  {
    title: 'Satzdetails verstehen',
    text: 'Konkrete Angaben wie Uhrzeit, Ort oder Gleis aus alltagsnahen Sätzen erfassen.',
    color: '#6A4C6E',
  },
  {
    title: 'Hörfolgen merken',
    text: 'Mehrere gehörte Informationen in der richtigen Reihenfolge behalten.',
    color: '#9A4F24',
  },
]

export type TonuvioWalkStep = {
  id: string
  label: string
  title: string
  text: string
  image: string
  alt: string
}

/** Einblick in eine Übung: echte Abläufe und Texte aus der App. */
export const tonuvioWalkthrough: TonuvioWalkStep[] = [
  {
    id: 'hoeren',
    label: 'Anhören',
    title: 'Ein Satz aus dem Alltag',
    text: 'Sie hören einen kurzen Satz, zum Beispiel eine Durchsage am Bahnsteig. Wiedergabe in Ruhe starten, bei Bedarf ein zweites Mal. Die Antworten erscheinen erst, wenn Sie zugehört haben.',
    image: '/images/tonuvio/training-hoeren.webp',
    alt: 'tonuvio auf dem iPhone: Übung mit großer Wiedergabe-Schaltfläche, Hinweis auf noch zwei Wiedergaben und vier Antwortmöglichkeiten.',
  },
  {
    id: 'verstehen',
    label: 'Verstehen',
    title: 'Sofort sehen, was gemeint war',
    text: 'Nach Ihrer Antwort zeigt tonuvio die richtige Lösung, erklärt in einem Satz, warum das Verwechseln leicht passiert, und blendet den gehörten Satz zum Nachlesen ein.',
    image: '/images/tonuvio/training-rueckmeldung.webp',
    alt: 'tonuvio auf dem iPhone: Rückmeldung nach der Antwort mit markierter richtiger Lösung, kurzer Erklärung und dem gehörten Satz zum Nachlesen.',
  },
  {
    id: 'abschluss',
    label: 'Abschließen',
    title: 'Ergebnis und Ihre Rückmeldung',
    text: 'Am Ende einer Einheit sehen Sie, wie viele Aufgaben Sie gelöst haben, und sagen, wie anspruchsvoll die Übung für Sie war. Danach richtet sich die Schwierigkeit der nächsten Einheit.',
    image: '/images/tonuvio/abschluss.webp',
    alt: 'tonuvio auf dem iPhone: Abschluss einer Einheit mit 5 von 6 gelösten Aufgaben und einer Skala von 1 bis 5 für die eigene Einschätzung.',
  },
  {
    id: 'uebersicht',
    label: 'Dranbleiben',
    title: 'Jeden Tag ein klarer nächster Schritt',
    text: 'Die Übersicht schlägt Ihnen eine Tagesübung vor, die zu Ihrer wichtigsten Alltagssituation passt, und zeigt, wie Sie in dieser Woche vorankommen.',
    image: '/images/tonuvio/uebersicht.webp',
    alt: 'tonuvio auf dem iPhone: Übersicht mit persönlicher Begrüßung, empfohlener Tagesübung, Wochenziel und den vier Übungsbereichen.',
  },
]

export const tonuvioPersonalPoints = [
  {
    title: 'Ihre Situationen zuerst',
    text: 'Sie wählen bis zu drei Situationen aus Ihrem Alltag, etwa Restaurant, Telefon oder Fernsehen, und legen fest, was Ihnen am wichtigsten ist.',
  },
  {
    title: 'Ein kurzer Einstieg',
    text: 'Acht kurze Übungen legen fest, mit welcher von acht Schwierigkeitsstufen Sie in jedem Bereich beginnen.',
  },
  {
    title: 'Übungen, die mitwachsen',
    text: 'Ihre Ergebnisse und Ihre Rückmeldung bestimmen, wie anspruchsvoll die nächsten Übungen werden. Nicht zu leicht, nicht zu schwer.',
  },
]

export const tonuvioProgressPoints = [
  'Wochenziel mit drei oder vier Einheiten, das Sie selbst wählen',
  'Aktuelle Schwierigkeitsstufe in allen vier Übungsbereichen',
  'Ergebnisse der letzten Einheiten und Meilensteine',
  'Keine Ranglisten, keine verlorenen Serien, kein Druck',
]

export const tonuvioAccessPoints = [
  {
    title: 'Große, klare Schrift',
    text: 'Drei Schriftgrößen bis 24 Pixel und ein Modus mit sehr hohem Kontrast, einstellbar schon während der Einrichtung.',
  },
  {
    title: 'Ton dort, wo Sie ihn haben möchten',
    text: 'Über Lautsprecher, Kopfhörer oder ein per Bluetooth verbundenes Gerät. Für jede Ausgabe gibt es eine eigene Toneinstellung mit Hörprobe.',
  },
  {
    title: 'Ohne Zeitdruck',
    text: 'Keine Zeitlimits bei den Antworten. Sie können jede Einheit pausieren und später fortsetzen.',
  },
  {
    title: 'Ohne Installation',
    text: 'tonuvio läuft im Browser auf Smartphone, Tablet und Computer und lässt sich wie eine App auf den Startbildschirm legen.',
  },
]

export const tonuvioSteps = [
  {
    title: 'Kennenlernen im Fachgeschäft',
    text: 'Wir zeigen Ihnen tonuvio in Ruhe und beantworten Ihre Fragen zur App.',
  },
  {
    title: 'Gemeinsam einrichten',
    text: 'Sie erhalten Ihren persönlichen Zugang. Ton, Schrift und Ihre Alltagssituationen richten wir zusammen ein.',
  },
  {
    title: 'Zuhause üben',
    text: 'Ein paar Minuten an den Tagen, die Ihnen passen. Die App sagt Ihnen, was heute dran ist.',
  },
  {
    title: 'Hilfe bei Fragen',
    text: 'Wenn in der App etwas hakt oder Sie Einstellungen ändern möchten, helfen wir Ihnen persönlich weiter.',
  },
]

export const tonuvioTrustPoints = [
  {
    title: 'Klar eingeordnet',
    text: 'tonuvio ist eine Übungs-App für das Verstehen von Sprache im Alltag, kein Medizinprodukt. Sie stellt keine Diagnose, misst kein Hörvermögen und ersetzt weder Hörtest noch Hörgeräteanpassung.',
  },
  {
    title: 'Ihr persönliches Konto',
    text: 'Kein offenes Portal: Zugänge vergeben wir persönlich. Ihre Übungsdaten werden verschlüsselt auf Servern in Frankfurt gespeichert.',
  },
  {
    title: 'Ihre Daten bleiben Ihre',
    text: 'Sie können Ihre Übungsdaten jederzeit selbst exportieren. Die App enthält keine Werbung.',
  },
]

export const tonuvioFaqs = [
  {
    question: 'Was ist tonuvio?',
    answer:
      'tonuvio ist eine Übungs-App für das Verstehen von Sprache im Alltag. Kurze Einheiten mit Alltagssätzen üben in vier Bereichen, Sprache bei Hintergrundgeräuschen, eine bestimmte Stimme, Details und Abfolgen zu verstehen. Die Schwierigkeit richtet sich nach Ihren Ergebnissen.',
  },
  {
    question: 'Für wen ist tonuvio gedacht?',
    answer:
      'Für Erwachsene, die Gespräche in lebhaften Situationen sicherer verfolgen möchten, zum Beispiel im Restaurant, am Telefon oder in der Familie. Sie können tonuvio mit oder ohne Hörsystem nutzen.',
  },
  {
    question: 'Ist tonuvio ein Medizinprodukt?',
    answer:
      'Nein. tonuvio ist eine Trainingsanwendung. Sie dient nicht der Erkennung oder Behandlung von Hörstörungen und ersetzt weder Hörtest noch Hörgeräteanpassung oder ärztliche Untersuchung. Wenn Sie merken, dass sich Ihr Hören verändert, sprechen Sie uns oder Ihre Ärztin oder Ihren Arzt an.',
  },
  {
    question: 'Misst tonuvio mein Hörvermögen?',
    answer:
      'Nein. Die Stufen in der App beschreiben nur, wie anspruchsvoll Ihre Übungen gerade sind. Sie sind keine Messung. Einen Hörtest machen wir persönlich bei uns im Fachgeschäft.',
  },
  {
    question: 'Brauche ich ein Smartphone?',
    answer:
      'Nein. tonuvio läuft im Browser auf Smartphone, Tablet oder Computer. Eine Installation aus dem App Store ist nicht nötig.',
  },
  {
    question: 'Wie viel Zeit muss ich einplanen?',
    answer:
      'Eine Einheit dauert etwa 6 bis 10 Minuten. Sie wählen selbst, ob Sie drei oder vier Einheiten pro Woche einplanen. Kurze Einheiten lassen sich leicht in den Alltag einbauen.',
  },
  {
    question: 'Womit kann ich hören?',
    answer:
      'Über Lautsprecher, Kopfhörer oder ein per Bluetooth verbundenes Gerät, auch ein Hörsystem mit Streaming-Funktion. Die App führt Sie durch eine kurze Toneinrichtung mit Hörprobe.',
  },
  {
    question: 'Wie bekomme ich einen Zugang?',
    answer:
      'Ihren persönlichen Zugang richten wir bei uns im Fachgeschäft ein. Fragen Sie einfach einen Termin an. Die Konditionen besprechen wir persönlich mit Ihnen.',
  },
]

export const tonuvioRelated = [
  {
    label: 'Hörtest Bonn-Beuel',
    description: 'Professionelle Höranalyse, persönlich im Fachgeschäft.',
    href: '/hoertest-bonn-beuel',
  },
  {
    label: 'Hörtraining in Bonn-Beuel',
    description: 'Unsere Beratung rund um das Thema Hörtraining.',
    href: '/hoertraining-bonn',
  },
  {
    label: 'Warum Westphal?',
    description: 'Persönlich, unabhängig, seit 2012 in Bonn-Beuel.',
    href: '/warum-westphal',
  },
]
