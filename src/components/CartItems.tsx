'use client'
import { useCartStore } from '@/lib/store/useCartStore'
import { createShopifyCart } from '@/lib/shopify/checkout'

export const CartItems = () => {
  const items = useCartStore(state => state.items)
  const handleCheckout = async () => {
  try {
    const checkoutUrl = await createShopifyCart()
    window.location.href = checkoutUrl
  } catch (err) {
    console.error('Checkout failed:', err)
    alert('Something went wrong. Please try again.')
  }
}

  return (
    <div>
      <h3>Your Cart</h3>
      {items.map(item => (
        <div key={item.variantId}>
          {/* <img src={item.image} alt={item.title} width={50} /> */}
          <p>{item.title}</p>
          <p>${item.price} × {item.quantity}</p>
        </div>
      ))}

      <button onClick={handleCheckout} className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
        Proceed to Checkout
      </button>
    </div>
  )
}