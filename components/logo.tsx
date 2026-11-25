import Image from 'next/image'
import Link from 'next/link'
import { company } from '@/lib/site-data'

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className ?? ''}`}
      aria-label={`${company.name} – Startseite`}
    >
      <Image
        src="/images/westphal-hoergeraete-logo.png"
        alt={`${company.name} Logo`}
        width={512}
        height={265}
        priority
        className="h-12 w-auto sm:h-14"
      />
    </Link>
  )
}
