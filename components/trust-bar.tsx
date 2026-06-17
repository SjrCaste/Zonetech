import { ShieldCheck, Store, Headphones, RefreshCw } from "lucide-react"

const items = [
  {
    icon: ShieldCheck,
    title: "+600 ventas concretadas",
    desc: "Trayectoria comprobable y clientes reales.",
  },
  {
    icon: Store,
    title: "Local físico en Maschwitz",
    desc: "Vení a verlo, probarlo y llevártelo el día.",
  },
  {
    icon: RefreshCw,
    title: "Tomamos tu usado",
    desc: "Entregá tu iPhone como parte de pago.",
  },
  {
    icon: Headphones,
    title: "Atención personalizada",
    desc: "Te asesoramos según tu presupuesto.",
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-4 py-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center gap-2 px-3 py-6 text-center sm:flex-row sm:items-start sm:text-left"
          >
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <item.icon className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold leading-tight">{item.title}</p>
              <p className="mt-1 text-xs text-muted-foreground text-pretty">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
