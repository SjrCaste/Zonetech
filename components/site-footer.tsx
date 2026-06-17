import Image from "next/image"
import Link from "next/link"
import { Camera, MapPin, Clock } from "lucide-react"
import { SITE } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/zonetech-logo.png"
              alt="ZoneTech"
              width={44}
              height={44}
              className="rounded-full ring-1 ring-border"
            />
            <span className="font-heading text-lg font-semibold">
              ZONE<span className="text-primary">TECH</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground text-pretty">
            iPhones sellados, seminuevos y accesorios Apple. Tomamos tu usado
            como parte de pago.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold">Tienda</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
            <li><Link href="/iphones" className="transition-colors hover:text-foreground">iPhones</Link></li>
            <li><Link href="/accesorios" className="transition-colors hover:text-foreground">Accesorios</Link></li>
            <li><Link href="/tomamos-tu-usado" className="transition-colors hover:text-foreground">Tomamos tu usado</Link></li>
            <li><Link href="/ubicacion" className="transition-colors hover:text-foreground">Ubicación</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold">Contacto</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{SITE.address}</span>
            </li>
            <li>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Camera className="size-4 shrink-0 text-primary" />
                {SITE.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold">Horarios</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
            {SITE.hours.map((h) => (
              <li key={h.day} className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>
                  <span className="block text-foreground">{h.day}</span>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} ZoneTech. Todos los derechos reservados.</p>
          <p>Local en Maschwitz · {SITE.instagramHandle}</p>
        </div>
      </div>
    </footer>
  )
}
