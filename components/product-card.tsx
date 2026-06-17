"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import { useCart } from "@/components/cart/cart-provider"
import { formatPrice, type Product } from "@/lib/products"
import { Button } from "@/components/ui/button"

function StockBadge({ stock }: { stock: number }) {
  if (stock <= 0)
    return (
      <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
        Sin stock
      </span>
    )
  const low = stock <= 2
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${
        low
          ? "bg-amber-500/15 text-amber-400"
          : "bg-emerald-500/15 text-emerald-400"
      }`}
    >
      <span
        className={`size-1.5 rounded-full ${low ? "bg-amber-400" : "bg-emerald-400"}`}
      />
      {low ? `Últimas ${stock} unidades` : `${stock} en stock`}
    </span>
  )
}

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const meta = [product.capacity, product.color].filter(Boolean).join(" · ")

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
      <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-secondary/40 to-background">
        {/* subtle warm glow accent */}
        <div className="pointer-events-none absolute -right-8 -top-8 size-28 rounded-full bg-[var(--brand-orange)]/15 blur-2xl" />
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-5 transition-transform duration-300 group-hover:scale-105 sm:p-6"
        />
        {product.condition && (
          <span
            className={`absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[11px] font-semibold sm:text-xs ${
              product.condition === "sellado"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            {product.condition === "sellado" ? "Sellado" : "Seminuevo"}
          </span>
        )}
        {product.gift && (
          <span className="absolute right-2.5 top-2.5 rounded-full bg-[var(--brand-orange)] px-2.5 py-1 text-[11px] font-semibold text-[var(--brand-orange-foreground)] shadow-sm sm:text-xs">
            {product.gift}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3.5 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-heading text-sm font-semibold leading-tight sm:text-base">
              {product.name}
            </h3>
            {meta && (
              <p className="mt-0.5 truncate text-xs text-muted-foreground sm:text-sm">
                {meta}
              </p>
            )}
          </div>
        </div>

        {product.battery && (
          <p className="text-xs text-muted-foreground">
            Batería: <span className="text-foreground">{product.battery}</span>
          </p>
        )}

        <div className="mt-1">
          <StockBadge stock={product.stock} />
        </div>

        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <span className="font-heading text-base font-bold tabular-nums sm:text-lg">
            {formatPrice(product.price)}
          </span>
          <Button
            size="sm"
            onClick={() => addItem(product)}
            disabled={product.stock <= 0}
            className="gap-1.5 px-2.5 sm:px-3"
            aria-label={`Agregar ${product.name}`}
          >
            <Plus className="size-4" />
            <span>Agregar</span>
          </Button>
        </div>
      </div>
    </article>
  )
}
