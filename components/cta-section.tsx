import { waLink } from "@/lib/site"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-card to-card p-8 text-center sm:p-12">
        <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          ¿Querés renovar tu iPhone?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-pretty">
          Consultanos por WhatsApp y te asesoramos según tu presupuesto, el
          modelo que buscás y el equipo que querés entregar.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            render={
              <a
                href={waLink("Hola ZoneTech! Quiero renovar mi iPhone.")}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Hablar por WhatsApp
          </Button>
          <Button
            size="lg"
            variant="secondary"
            render={<Link href="/tomamos-tu-usado" />}
          >
            Cotizar mi usado
          </Button>
        </div>
      </div>
    </section>
  )
}
