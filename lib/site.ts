export const SITE = {
  name: "ZoneTech",
  tagline: "iPhone & Accesorios",
  instagram: "https://instagram.com/zonetech_ar",
  instagramHandle: "@zonetech_ar",
  // Numero de WhatsApp (formato internacional sin signos). Reemplazar por el real.
  whatsapp: "5491138795099",
  address: "Av. Villanueva 1277, Ingeniero Maschwitz",
  city: "Maschwitz, Escobar — Buenos Aires",
  mapsQuery: "Av.+Villanueva+1277+Maschwitz",
  hours: [
    { day: "Lunes a Viernes", time: "10:00 — 19:00" },
    { day: "Sábados", time: "10:00 — 14:00" },
    { day: "Domingos", time: "Cerrado" },
  ],
  stats: [
    { value: "+600", label: "ventas concretadas" },
    { value: "Local", label: "físico en Maschwitz" },
    { value: "896+", label: "clientes en Instagram" },
  ],
}

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`
}
