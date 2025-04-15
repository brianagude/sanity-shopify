export const apiVersion = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION || "2025-07"

export const publicAccessToken = assertValue(
  process.env.NEXT_PUBLIC_SHOPIFY_PUBLIC_ACCESS_TOKEN,
  'Missing environment variable: NEXT_PUBLIC_SHOPIFY_PUBLIC_ACCESS_TOKEN'
)

export const storeDomain = assertValue(
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN,
  'Missing environment variable: NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN'
)


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
