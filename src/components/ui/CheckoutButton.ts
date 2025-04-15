import { createShopifyCart } from '@/lib/shopify/checkout'

const handleCheckout = async () => {
  try {
    const checkoutUrl = await createShopifyCart()
    window.location.href = checkoutUrl
  } catch (err) {
    console.error('Checkout failed:', err)
    alert('Something went wrong. Please try again.')
  }
}

export const CheckoutButton = () => {
  return (
  <button onClick={handleCheckout} className="bg-blue-600 text-white px-4 py-2 rounded">
    Proceed to Checkout
  </button>
  )
}
