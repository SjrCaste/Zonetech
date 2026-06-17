"use client"

import Image from "next/image"
import { useEffect } from "react"
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react"
import { useCart } from "./cart-provider"
import { formatPrice } from "@/lib/products"
import { SITE, waLink } from "@/lib/site"
import { Button } from "@/components/ui/button"

export function CartSidebar() {
  const { items, isOpen, close, total, updateQty, removeItem, count } = useCart()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const checkoutMessage = () => {
    const lines = items.map(
      (i) =>
        `• ${i.qty}x ${i.name}${i.capacity ? ` ${i.capacity}` : ""}${
          i.color ? ` (${i.color})` : ""
        } — ${formatPrice(i.price * i.qty)}`,
    )
    return `Hola ZoneTech! Quiero consultar disponibilidad de:\n\n${lines.join(
      "\n",
    )}\n\nTotal estimado: ${formatPrice(total)}`
  }

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden={!isOpen}
        onClick={close}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-label="Carrito de consulta"
        aria-modal="true"
        className={`fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col border-l border-border bg-card shadow-2xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="size-5 text-primary" aria-hidden="true" />
            <h2 className="font-heading text-lg font-semibold">
              Tu consulta
              {count > 0 && (
                <span className="ml-2 text-sm font-normal text-muted-foreground">
                  {count} {count === 1 ? "ítem" : "ítems"}
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={close}
            aria-label="Cerrar carrito"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-secondary">
              <ShoppingBag className="size-7 text-muted-foreground" />
            </div>
            <p className="font-medium">Tu lista está vacía</p>
            <p className="text-sm text-muted-foreground text-pretty">
              Agregá iPhones o accesorios para armar tu consulta y enviarla por
              WhatsApp.
            </p>
            <Button onClick={close} variant="secondary" className="mt-2">
              Seguir mirando
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="flex flex-col gap-4">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="flex gap-3 rounded-xl border border-border bg-background/40 p-3"
                  >
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-secondary">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium">
                            {item.name}
                          </p>
                          <p className="truncate text-xs text-muted-foreground">
                            {[item.capacity, item.color, item.condition]
                              .filter(Boolean)
                              .join(" · ")}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          aria-label={`Quitar ${item.name}`}
                          className="rounded-md p-1 text-muted-foreground transition-colors hover:text-destructive"
                        >
                          <Trash2 className="size-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center rounded-lg border border-border">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            aria-label="Restar"
                            className="px-2 py-1 text-muted-foreground transition-colors hover:text-foreground"
                          >
                            <Minus className="size-3.5" />
                          </button>
                          <span className="min-w-7 text-center text-sm tabular-nums">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            disabled={item.qty >= item.stock}
                            aria-label="Sumar"
                            className="px-2 py-1 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
                          >
                            <Plus className="size-3.5" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold tabular-nums">
                          {formatPrice(item.price * item.qty)}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <footer className="border-t border-border px-5 py-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Total estimado
                </span>
                <span className="font-heading text-xl font-bold tabular-nums">
                  {formatPrice(total)}
                </span>
              </div>
              <Button
                className="w-full"
                size="lg"
                render={
                  <a
                    href={waLink(checkoutMessage())}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                Consultar por WhatsApp
              </Button>
              <p className="mt-2 text-center text-xs text-muted-foreground text-pretty">
                Te respondemos el stock, formas de pago y la toma de tu usado.
              </p>
            </footer>
          </>
        )}
      </aside>
    </>
  )
}
