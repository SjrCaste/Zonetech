"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart/cart-provider"
import { SITE } from "@/lib/site"

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/iphones", label: "iPhones" },
  { href: "/accesorios", label: "Accesorios" },
  { href: "/tomamos-tu-usado", label: "Tomamos tu usado" },
  { href: "/ubicacion", label: "Ubicación" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { count, open } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="ZoneTech inicio">
          <Image
            src="/zonetech-logo.png"
            alt="ZoneTech"
            width={40}
            height={40}
            className="rounded-full ring-1 ring-border"
          />
          <span className="hidden font-heading text-base font-semibold tracking-tight sm:inline">
            ZONE<span className="text-primary">TECH</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={open}
            aria-label="Abrir carrito"
            className="relative rounded-full p-2.5 text-foreground transition-colors hover:bg-secondary"
          >
            <ShoppingBag className="size-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex size-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                {count}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menú"
            className="rounded-full p-2.5 text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>
      )}
    </header>
  )
}
