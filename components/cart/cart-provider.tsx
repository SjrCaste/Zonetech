"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from "react"
import type { Product } from "@/lib/products"

export type CartItem = Product & { qty: number }

type CartContextType = {
  items: CartItem[]
  isOpen: boolean
  count: number
  total: number
  open: () => void
  close: () => void
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  updateQty: (id: string, qty: number) => void
  clear: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id
            ? { ...i, qty: Math.min(i.qty + 1, product.stock) }
            : i,
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const updateQty = useCallback((id: string, qty: number) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === id ? { ...i, qty: Math.max(0, Math.min(qty, i.stock)) } : i,
        )
        .filter((i) => i.qty > 0),
    )
  }, [])

  const clear = useCallback(() => setItems([]), [])

  const count = useMemo(
    () => items.reduce((acc, i) => acc + i.qty, 0),
    [items],
  )
  const total = useMemo(
    () => items.reduce((acc, i) => acc + i.qty * i.price, 0),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      isOpen,
      count,
      total,
      open,
      close,
      addItem,
      removeItem,
      updateQty,
      clear,
    }),
    [items, isOpen, count, total, open, close, addItem, removeItem, updateQty, clear],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
