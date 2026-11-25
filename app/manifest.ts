import type { MetadataRoute } from 'next'
import { company } from '@/lib/site-data'

/** Web-App-Manifest: Name, Farben und Icons für den Startbildschirm. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: 'Westphal',
    description: 'Hörakustik-Meisterbetrieb in Bonn-Beuel: persönliche, unabhängige Hörgeräte-Beratung.',
    start_url: '/',
    display: 'browser',
    lang: 'de',
    background_color: '#faf8f4',
    theme_color: '#faf8f4',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  }
}
