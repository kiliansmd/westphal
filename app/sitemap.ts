import type { MetadataRoute } from 'next'
import { company } from '@/lib/site-data'

/**
 * Statische Sitemap aller öffentlichen Seiten. Prioritäten und
 * Änderungsfrequenzen spiegeln die inhaltliche Wichtigkeit wider.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = company.url
  const lastModified = new Date()

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1, changeFrequency: 'weekly' },
    { path: '/warum-westphal', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/hoergeraete-bonn-beuel', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/klangwellen-anpassverfahren', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/hoergeraete-testen', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/preise-krankenkasse', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/hoertest-bonn-beuel', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/tinnitusberatung-bonn', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/hoertraining-bonn', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/gehoerschutz-bonn', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/service-reparatur', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/jobs', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/kontakt', priority: 0.9, changeFrequency: 'yearly' },
    { path: '/datenschutz', priority: 0.3, changeFrequency: 'yearly' },
    { path: '/impressum', priority: 0.3, changeFrequency: 'yearly' },
  ]

  return routes.map((route) => ({
    url: `${base}${route.path === '/' ? '' : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
