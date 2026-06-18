import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Smartphone, Cable, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TrustBar } from "@/components/trust-bar"
import { ProductCard } from "@/components/product-card"
import { CtaSection } from "@/components/cta-section"
import { featured } from "@/lib/products"
import { SITE, waLink } from "@/lib/site"

const categorias = [
  {
    href: "/iphones",
    icon: Smartphone,
    title: "iPhones",
    desc: "Sellados y seminuevos con stock real.",
  },
  {
    href: "/accesorios",
    icon: Cable,
    title: "Accesorios",
    desc: "Cargadores, auriculares, fundas y más.",
  },
  {
    href: "/tomamos-tu-usado",
    icon: ArrowRight,
    title: "Tomamos tu usado",
    desc: "Entregá tu iPhone como parte de pago.",
  },
  {
    href: "/ubicacion",
    icon: MapPin,
    title: "Visitá el local",
    desc: "Estamos en Maschwitz, Escobar.",
  },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute -left-24 top-10 -z-10 size-72 rounded-full bg-[var(--brand-orange)]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-orange)]/30 bg-[var(--brand-orange)]/10 px-3 py-1 text-sm font-medium text-[var(--brand-orange)]">
              <span className="size-1.5 rounded-full bg-[var(--brand-orange)]" />
              +600 ventas concretadas en Maschwitz
            </span>
            <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Renová tu iPhone con{" "}
              <span className="text-primary">confianza</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground text-pretty">
              iPhones sellados, seminuevos y accesorios Apple. También tomamos tu
              usado como parte de pago, con atención directa en nuestro local.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                render={
                  <a
                    href={waLink(
                      "Hola ZoneTech! Quiero consultar stock de iPhones.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Consultar stock por WhatsApp
              </Button>
              <Button
                size="lg"
                variant="secondary"
                render={<Link href="/iphones" />}
              >
                Ver iPhones
              </Button>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {SITE.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-heading text-2xl font-bold text-primary">
                    {s.value}
                  </dt>
                  <dd className="text-xs text-muted-foreground text-pretty">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border bg-card">
              <Image
                src="/hero-iphones.png"
                alt="iPhone 17 Pro Max, 16 Pro y 15 disponibles en ZoneTech"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur-md">
                  iPhone 17 Pro Max
                </span>
                <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur-md">
                  iPhone 17 Pro
                </span>
                <span className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur-md">
                  16 Pro
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Categorías */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
            Explorá la tienda
          </h2>
          <p className="mt-2 text-muted-foreground">
            Cada sección con su stock y precios actualizados.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
            {categorias.map((c, i) => {
              const orange = i % 2 === 1
              return (
                <Link
                  key={c.href}
                  href={c.href}
                  className={`group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 transition-colors sm:p-6 ${
                    orange ? "hover:border-[var(--brand-orange)]/50" : "hover:border-primary/50"
                  }`}
                >
                  <div
                    className={`flex size-11 items-center justify-center rounded-xl ${
                      orange
                        ? "bg-[var(--brand-orange)]/15 text-[var(--brand-orange)]"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <c.icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold">{c.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground text-pretty">
                      {c.desc}
                    </p>
                  </div>
                  <span
                    className={`mt-1 inline-flex items-center gap-1 text-sm font-medium ${
                      orange ? "text-[var(--brand-orange)]" : "text-primary"
                    }`}
                  >
                    Ver más
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Destacados */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Destacados
              </h2>
              <p className="mt-2 text-muted-foreground">
                Lo más buscado por nuestros clientes.
              </p>
            </div>
            <Button
              variant="ghost"
              className="hidden sm:inline-flex"
              render={<Link href="/iphones" />}
            >
              Ver todo
              <ArrowRight className="ml-1 size-4" />
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {featured.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}
