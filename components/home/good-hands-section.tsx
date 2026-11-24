import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { company } from '@/lib/site-data'

// Build a WhatsApp deep link from the company's E.164 number.
const whatsappHref = `https://wa.me/${company.phoneE164.replace(/[^0-9]/g, '')}`

export function GoodHandsSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid overflow-hidden rounded-3xl border border-border shadow-sm lg:grid-cols-2">
          {/* Left: welcoming photo */}
          <div className="relative min-h-[280px] lg:min-h-full">
            <Image
              src="/images/real/inhaber-portrait.png"
              alt="Die Inhaber von Westphal Hörgeräte gemeinsam im Fachgeschäft in Bonn-Beuel"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right: calm dark contact panel */}
          <div className="flex flex-col justify-center bg-foreground p-8 text-background sm:p-12">
            <h2 className="text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Bei uns sind Sie in guten Händen – versprochen.
            </h2>
            <p className="mt-5 text-lg text-background/80">Kontaktieren Sie uns:</p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href={company.phoneHref}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'w-full justify-center rounded-full border-background/40 bg-transparent text-background hover:bg-background/10 hover:text-background sm:w-auto sm:self-start',
                )}
              >
                <Phone aria-hidden="true" />
                {company.phone}
              </a>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/kontakt"
                  className={cn(
                    buttonVariants({ size: 'lg' }),
                    'w-full justify-center rounded-full sm:w-auto',
                  )}
                >
                  <Mail aria-hidden="true" />
                  Zum Kontaktformular
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'w-full justify-center rounded-full border-background/40 bg-transparent text-background hover:bg-background/10 hover:text-background sm:w-auto',
                  )}
                >
                  <MessageCircle aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
