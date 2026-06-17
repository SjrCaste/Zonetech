import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { FilterableGrid } from "@/components/filterable-grid"
import { CtaSection } from "@/components/cta-section"
import { iphones } from "@/lib/products"

export const metadata: Metadata = {
  title: "iPhones sellados y seminuevos | ZoneTech",
  description:
    "iPhones sellados y seminuevos con stock real en Maschwitz. Consultá disponibilidad por WhatsApp.",
}

export default function IphonesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Tienda"
        title="iPhones disponibles"
        description="Equipos sellados y seminuevos con stock real. Agregá los que te interesen y enviá tu consulta por WhatsApp en un toque."
      />
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FilterableGrid
            products={iphones}
            filterKey="condition"
            filters={[
              { label: "Sellados", value: "sellado" },
              { label: "Seminuevos", value: "seminuevo" },
            ]}
          />
        </div>
      </section>
      <CtaSection />
    </main>
  )
}
