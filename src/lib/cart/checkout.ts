import { getCartItems } from '@/lib/cart/actions'
import { storeDomain, publicAccessToken, apiVersion } from '@/shopify/env';

export async function createShopifyCart() {
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
