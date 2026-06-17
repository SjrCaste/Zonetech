"use client"

import { useState } from "react"
import { ProductCard } from "@/components/product-card"
import type { Product } from "@/lib/products"

type Filter = { label: string; value: string }

export function FilterableGrid({
  products,
  filters,
  filterKey,
  allLabel = "Todos",
}: {
  products: Product[]
  filters: Filter[]
  filterKey: "condition" | "subcategory"
  allLabel?: string
}) {
  const [active, setActive] = useState<string>("all")

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p[filterKey] === active)

  return (
    <div>
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <button
          onClick={() => setActive("all")}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            active === "all"
              ? "bg-[var(--brand-orange)] text-[var(--brand-orange-foreground)]"
              : "bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          {allLabel}
        </button>
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === f.value
                ? "bg-[var(--brand-orange)] text-[var(--brand-orange-foreground)]"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-muted-foreground">
          No hay productos en esta categoría por ahora. Consultanos por WhatsApp.
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  )
}
