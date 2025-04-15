import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CartItem = {
  productId: string
  variantId: string
  title: string
  image: string
  price: number
  quantity: number
}

type CartState = {
  cartId: string | null
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (variantId: string) => void
  updateQuantity: (variantId: string, quantity: number) => void
  clearCart: () => void
  setCartId: (cartId: string) => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartId: null,
      items: [],
      addItem: (item) => {
        const existing = get().items.find(i => i.variantId === item.variantId)
        if (existing) {
          set({
            items: get().items.map(i =>
              i.variantId === item.variantId
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          })
        } else {
          set({ items: [...get().items, item] })
        }
      },
      removeItem: (variantId) => {
        set({ items: get().items.filter(i => i.variantId !== variantId) })
      },
      updateQuantity: (variantId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(variantId)
        } else {
          set({
            items: get().items.map(i =>
              i.variantId === variantId ? { ...i, quantity } : i
            ),
          })
        }
      },
      clearCart: () => set({ items: [], cartId: null }),
      setCartId: (cartId: string) => set({ cartId }),
    }),
    {
      name: 'cart-storage', // 🧠 localStorage key
      partialize: (state) => ({ items: state.items, cartId: state.cartId }), // only persist necessary parts
    }
  )
)
