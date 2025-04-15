import { getCartItems } from '@/lib/cart/cartActions'

export async function createShopifyCart() {
  const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
  const publicAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_PUBLIC_ACCESS_TOKEN
  const apiVersion = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION

  console.log('storeDomain:', storeDomain)
  console.log('publicAccessToken:', publicAccessToken)
  console.log('apiVersion:', apiVersion)
  
  const items = getCartItems()

  const lines = items.map(item => ({
    merchandiseId: item.variantId,
    quantity: item.quantity,
  }))

  const query = `
    mutation createCart($lines: [CartLineInput!]!) {
      cartCreate(input: {
        lines: $lines
      }) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          message
        }
      }
    }
  `
  
  const res = await fetch(`https://${storeDomain}/api/${apiVersion}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': publicAccessToken,
    },
    body: JSON.stringify({
      query,
      variables: {
        lines,
      },
    }),
  })

  const json = await res.json()
  const cart = json.data?.cartCreate?.cart

  if (!cart?.checkoutUrl) {
    throw new Error('Shopify checkout creation failed: ' + JSON.stringify(json))
  }

  return cart.checkoutUrl
}
