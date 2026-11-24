import Link from 'next/link'
import Image from 'next/image'
import { Check, ArrowRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { fittingBullets } from '@/lib/site-data'

export function FittingSection() {
  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="order-2 overflow-hidden rounded-2xl border border-border lg:order-1">
          <Image
            src="/images/real/anpassung-ohr.webp"
            alt="Hörakustikerin setzt einem Kunden bei Westphal Hörgeräte behutsam ein modernes Hörgerät ein"
            width={640}
            height={520}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="order-1 lg:order-2">
          <h2 className="text-balance font-serif text-3xl font-medium leading-[1.12] text-foreground sm:text-[2.6rem]">
            Sie sollen besser hören – nicht nur anders
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Viele Menschen erleben neue Hörgeräte zunächst als laut, fremd oder
            anstrengend. Unser lautheitsbasiertes Anpassverfahren berücksichtigt
            die persönliche Hörentwöhnung und führt Sie behutsam an natürliches
            Hören heran. So können Sprachverstehen, Klangempfinden und
            Alltagstauglichkeit Schritt für Schritt verbessert werden.
          </p>

          <ul className="mt-6 space-y-3">
            {fittingBullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-base leading-relaxed text-foreground/90">
                  {bullet}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/klangwellen-anpassverfahren"
            className={cn(buttonVariants({ size: 'lg' }), 'mt-8 h-12 px-6 text-base')}
          >
            Anpassverfahren kennenlernen
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
