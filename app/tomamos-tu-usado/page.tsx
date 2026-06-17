import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { TradeInForm } from "@/components/trade-in-form"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Tomamos tu iPhone usado | ZoneTech",
  description:
    "Entregá tu iPhone usado como parte de pago y renová por uno mejor. Cotización rápida por WhatsApp.",
}

const pasos = [
  {
    title: "Contanos tu equipo",
    desc: "Completá el formulario con modelo, capacidad, estado y batería.",
  },
  {
    title: "Recibí tu cotización",
    desc: "Te enviamos una estimación por WhatsApp según el estado real.",
  },
  {
    title: "Renová y entregá",
    desc: "Abonás la diferencia y te llevás tu nuevo iPhone el día.",
  },
]

export default function TomamosTuUsadoPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Servicio"
        title="Tomamos tu iPhone usado"
        description="Entregá tu equipo como parte de pago y renová por uno mejor. Cotizamos tu iPhone y te asesoramos para que el cambio sea simple, rápido y seguro."
      />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight">
              ¿Cómo funciona?
            </h2>
            <ol className="mt-6 flex flex-col gap-5">
              {pasos.map((p, i) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground text-pretty">
                      {p.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold">¿Qué tenemos en cuenta?</h3>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
                {[
                  "Modelo y capacidad del equipo",
                  "Estado estético y funcional",
                  "Salud de la batería",
                  "Si conservás caja y accesorios",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold tracking-tight">
              Cotizá tu usado
            </h2>
            <p className="mt-2 text-muted-foreground text-pretty">
              Completá los datos y te respondemos por WhatsApp.
            </p>
            <div className="mt-6">
              <TradeInForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
