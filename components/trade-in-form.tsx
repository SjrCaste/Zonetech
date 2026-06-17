"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { waLink } from "@/lib/site"

const estados = ["Como nuevo", "Muy bueno", "Bueno", "Con detalles"]
const capacidades = ["64 GB", "128 GB", "256 GB", "512 GB", "1 TB"]

export function TradeInForm() {
  const [modelo, setModelo] = useState("")
  const [capacidad, setCapacidad] = useState("")
  const [estado, setEstado] = useState("")
  const [bateria, setBateria] = useState("")
  const [caja, setCaja] = useState("")

  const message = `Hola ZoneTech! Quiero cotizar mi iPhone usado:

• Modelo: ${modelo || "-"}
• Capacidad: ${capacidad || "-"}
• Estado: ${estado || "-"}
• Batería: ${bateria || "-"}
• ¿Tiene caja?: ${caja || "-"}`

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"

  return (
    <form
      className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label className="mb-1.5 block text-sm font-medium">Modelo</label>
        <input
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          placeholder="Ej: iPhone 13 Pro"
          className={inputClass}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">Capacidad</label>
          <select
            value={capacidad}
            onChange={(e) => setCapacidad(e.target.value)}
            className={inputClass}
          >
            <option value="">Seleccionar</option>
            {capacidades.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">Estado</label>
          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className={inputClass}
          >
            <option value="">Seleccionar</option>
            {estados.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            Salud de batería
          </label>
          <input
            value={bateria}
            onChange={(e) => setBateria(e.target.value)}
            placeholder="Ej: 89%"
            className={inputClass}
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium">
            ¿Tiene caja?
          </label>
          <select
            value={caja}
            onChange={(e) => setCaja(e.target.value)}
            className={inputClass}
          >
            <option value="">Seleccionar</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>
      </div>

      <Button
        size="lg"
        className="mt-2 w-full"
        render={
          <a href={waLink(message)} target="_blank" rel="noopener noreferrer" />
        }
      >
        Enviar cotización por WhatsApp
      </Button>
      <p className="text-center text-xs text-muted-foreground text-pretty">
        Te respondemos con una estimación y coordinamos la entrega de tu usado.
      </p>
    </form>
  )
}
