import { company } from '@/lib/site-data'

/**
 * Renders a JSON-LD <script> tag. Server component – no client JS shipped.
 * Data is serialized safely (no user input is interpolated here).
 */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Content is static/site-owned, so this is safe.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function LocalBusinessJsonLd() {
  // Regular hours: Mo–Fr 09:00–18:00; Sa nach Vereinbarung; So geschlossen.
  const openingHoursSpecification = [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ]

  const data = {
    '@context': 'https://schema.org',
    '@type': 'HearingAidStore',
    '@id': `${company.url}/#business`,
    name: company.name,
    url: company.url,
    telephone: company.phoneE164,
    email: company.email,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.streetAddress,
      postalCode: company.postalCode,
      addressLocality: company.addressLocality,
      addressRegion: company.addressRegion,
      addressCountry: company.addressCountry,
    },
    areaServed: ['Bonn', 'Bonn-Beuel', 'Rhein-Sieg-Kreis'],
    slogan: company.motto,
    openingHoursSpecification,
    // NOTE: `aggregateRating` intentionally omitted. Per Google's structured-data
    // guidelines it may only be added once genuine reviews are collected and
    // rendered on this page. Re-add with real ratingValue/ratingCount then.
  }

  return <JsonLd data={data} />
}

export function WebSiteJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${company.url}/#website`,
    url: company.url,
    name: company.name,
    inLanguage: 'de-DE',
    publisher: { '@id': `${company.url}/#business` },
  }

  return <JsonLd data={data} />
}

export function FaqJsonLd({
  items,
}: {
  items: { question: string; answer: string }[]
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return <JsonLd data={data} />
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path: string }[]
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${company.url}${item.path}`,
    })),
  }

  return <JsonLd data={data} />
}
