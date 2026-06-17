import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { FilterableGrid } from "@/components/filterable-grid"
import { CtaSection } from "@/components/cta-section"
import { accesorios, accesorioCategorias } from "@/lib/products"

export const metadata: Metadata = {
  title: "Accesorios Apple | ZoneTech",
  description:
    "Cargadores, auriculares, fundas y protección para tu iPhone. Stock real en Maschwitz.",
}

export default function AccesoriosPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Tienda"
        title="Accesorios Apple"
        description="Cargadores, auriculares, fundas y protección para completar tu equipo. Filtrá por categoría y armá tu consulta."
      />
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FilterableGrid
            products={accesorios}
            filterKey="subcategory"
            filters={accesorioCategorias.map((c) => ({ label: c, value: c }))}
          />
        </div>
      </section>
      <CtaSection />
    </main>
  )
}
