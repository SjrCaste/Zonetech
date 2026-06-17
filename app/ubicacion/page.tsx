import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Clock, Phone, Camera, Navigation } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { CtaSection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { SITE, waLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Ubicación | ZoneTech Maschwitz",
  description: `Visitanos en ${SITE.address}. Local físico de iPhones y accesorios Apple en Maschwitz.`,
}

export default function UbicacionPage() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${SITE.mapsQuery}`
  const embedUrl = `https://www.google.com/maps?q=${SITE.mapsQuery}&output=embed`

  return (
    <main>
      <PageHeader
        eyebrow="Visitanos"
        title="Nuestro local en Maschwitz"
        description="Te esperamos en nuestro local físico. Atención personalizada, productos a la vista y la confianza de comprar en persona."
      />

      <section className="mx-auto max-w-6xl px-4 pb-16 md:pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <iframe
              title="Mapa de ubicación de ZoneTech"
              src={embedUrl}
              className="h-80 w-full lg:h-full lg:min-h-[28rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <h2 className="font-semibold text-card-foreground">Dirección</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{SITE.address}</p>
                  <p className="text-sm text-muted-foreground">{SITE.city}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 bg-transparent"
                    render={
                      <a href={mapsUrl} target="_blank" rel="noopener noreferrer" />
                    }
                  >
                    <Navigation className="size-4" />
                    Cómo llegar
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Clock className="size-5" />
                </span>
                <div className="w-full">
                  <h2 className="font-semibold text-card-foreground">Horarios de atención</h2>
                  <ul className="mt-3 space-y-2">
                    {SITE.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex items-center justify-between border-b border-border/60 pb-2 text-sm last:border-0 last:pb-0"
                      >
                        <span className="text-muted-foreground">{h.day}</span>
                        <span className="font-medium text-card-foreground">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={waLink("Hola ZoneTech! Quería consultar por la ubicación del local.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">WhatsApp</p>
                  <p className="text-xs text-muted-foreground">Escribinos directo</p>
                </div>
              </a>
              <Link
                href={SITE.instagram}
                target="_blank"
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/50"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Camera className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">Instagram</p>
                  <p className="text-xs text-muted-foreground">{SITE.instagramHandle}</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}
