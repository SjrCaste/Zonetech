export type Condition = "sellado" | "seminuevo"

export type Product = {
  id: string
  name: string
  category: "iphone" | "accesorio"
  subcategory: string // ej: "Cargadores", "Auriculares", "Fundas", "iPhone 15", etc.
  condition?: Condition
  capacity?: string
  color?: string
  battery?: string
  price: number
  stock: number
  image: string
  featured?: boolean
  gift?: string
}

export const products: Product[] = [
  // ===== iPhones SELLADOS =====
  {
    id: "ip17-promax-256",
    name: "iPhone 17 Pro Max",
    category: "iphone",
    subcategory: "iPhone 17",
    condition: "sellado",
    capacity: "256 GB",
    color: "Azul Medianoche",
    price: 2199000,
    stock: 3,
    image: "/products/iphone-17-pro-max.png",
    featured: true,
    gift: "Funda de regalo",
  },
  {
    id: "ip17-pro-256",
    name: "iPhone 17 Pro",
    category: "iphone",
    subcategory: "iPhone 17",
    condition: "sellado",
    capacity: "256 GB",
    color: "Titanio Naranja",
    price: 1899000,
    stock: 4,
    image: "/products/iphone-17-pro.png",
    featured: true,
  },
  {
    id: "ip17-256",
    name: "iPhone 17",
    category: "iphone",
    subcategory: "iPhone 17",
    condition: "sellado",
    capacity: "256 GB",
    color: "Azul",
    price: 1490000,
    stock: 6,
    image: "/products/iphone-17.png",
  },
  {
    id: "ip16-pro-256",
    name: "iPhone 16 Pro",
    category: "iphone",
    subcategory: "iPhone 16",
    condition: "sellado",
    capacity: "256 GB",
    color: "Titanio Natural",
    price: 1599000,
    stock: 3,
    image: "/products/iphone-16-pro.png",
    featured: true,
  },
  {
    id: "ip16-128",
    name: "iPhone 16",
    category: "iphone",
    subcategory: "iPhone 16",
    condition: "sellado",
    capacity: "128 GB",
    color: "Ultramarino",
    price: 1190000,
    stock: 5,
    image: "/products/iphone-16.png",
  },
  {
    id: "ip15-128",
    name: "iPhone 15",
    category: "iphone",
    subcategory: "iPhone 15",
    condition: "sellado",
    capacity: "128 GB",
    color: "Negro",
    price: 990000,
    stock: 4,
    image: "/products/iphone-15.png",
    featured: true,
  },
  // ===== iPhones SEMINUEVOS =====
  {
    id: "ip14-pro-128-sn",
    name: "iPhone 14 Pro",
    category: "iphone",
    subcategory: "iPhone 14",
    condition: "seminuevo",
    capacity: "128 GB",
    color: "Morado",
    battery: "94%",
    price: 820000,
    stock: 2,
    image: "/products/iphone-14-pro.png",
  },
  {
    id: "ip13-128-sn",
    name: "iPhone 13",
    category: "iphone",
    subcategory: "iPhone 13",
    condition: "seminuevo",
    capacity: "128 GB",
    color: "Medianoche",
    battery: "89%",
    price: 560000,
    stock: 3,
    image: "/products/iphone-13.png",
  },
  {
    id: "ip12-64-sn",
    name: "iPhone 12",
    category: "iphone",
    subcategory: "iPhone 12",
    condition: "seminuevo",
    capacity: "64 GB",
    color: "Blanco",
    battery: "86%",
    price: 410000,
    stock: 2,
    image: "/products/iphone-12.png",
  },

  // ===== ACCESORIOS — Cargadores =====
  {
    id: "acc-cargador-20w",
    name: "Cargador USB-C 20W",
    category: "accesorio",
    subcategory: "Cargadores",
    price: 28000,
    stock: 15,
    image: "/products/cargador-20w.png",
    featured: true,
  },
  {
    id: "acc-cable-usbc",
    name: "Cable USB-C a USB-C 1m",
    category: "accesorio",
    subcategory: "Cargadores",
    price: 18000,
    stock: 22,
    image: "/products/cable-usbc.png",
  },
  {
    id: "acc-magsafe",
    name: "Cargador MagSafe",
    category: "accesorio",
    subcategory: "Cargadores",
    price: 52000,
    stock: 8,
    image: "/products/magsafe.png",
  },

  // ===== ACCESORIOS — Auriculares =====
  {
    id: "acc-airpods-pro2",
    name: "AirPods Pro 2",
    category: "accesorio",
    subcategory: "Auriculares",
    price: 320000,
    stock: 7,
    image: "/products/airpods-pro.png",
    featured: true,
  },
  {
    id: "acc-airpods-3",
    name: "AirPods 3ra Gen",
    category: "accesorio",
    subcategory: "Auriculares",
    price: 245000,
    stock: 5,
    image: "/products/airpods.png",
  },

  // ===== ACCESORIOS — Fundas =====
  {
    id: "acc-funda-silicona",
    name: "Funda de Silicona MagSafe",
    category: "accesorio",
    subcategory: "Fundas",
    price: 32000,
    stock: 30,
    image: "/products/funda-silicona.png",
    featured: true,
  },
  {
    id: "acc-funda-transparente",
    name: "Funda Transparente MagSafe",
    category: "accesorio",
    subcategory: "Fundas",
    price: 26000,
    stock: 25,
    image: "/products/funda-transparente.png",
  },

  // ===== ACCESORIOS — Protección =====
  {
    id: "acc-vidrio",
    name: "Vidrio Templado 9H",
    category: "accesorio",
    subcategory: "Protección",
    price: 15000,
    stock: 40,
    image: "/products/vidrio-templado.png",
  },
]

export function formatPrice(n: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(n)
}

export const iphones = products.filter((p) => p.category === "iphone")
export const accesorios = products.filter((p) => p.category === "accesorio")
export const featured = products.filter((p) => p.featured)

export const accesorioCategorias = [
  "Cargadores",
  "Auriculares",
  "Fundas",
  "Protección",
]
