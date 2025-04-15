import { useCartStore } from '@/lib/store/useCartStore'

type AddToCartInput = {
  productId: string
  variantId: string
  title: string
  image: string
  price: number
  quantity?: number
}

export const addToCart = (item: AddToCartInput) => {
  const { addItem } = useCartStore.getState()

  addItem({
    ...item,
    quantity: item.quantity || 1,
  })
}

export const removeFromCart = (variantId: string) => {
  const { removeItem } = useCartStore.getState()
  removeItem(variantId)
}

export const updateCartItem = (variantId: string, quantity: number) => {
  const { updateQuantity } = useCartStore.getState()
  updateQuantity(variantId, quantity)
}

export const clearCart = () => {
  const { clearCart } = useCartStore.getState()
  clearCart()
}

export const getCartItems = () => {
  const { items } = useCartStore.getState()
  return items
}

export const getCartId = () => {
  const { cartId } = useCartStore.getState()
  return cartId
}

export const setCartId = (cartId: string) => {
  useCartStore.getState().setCartId(cartId)
}
