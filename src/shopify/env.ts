export const publicAccessToken = assertValue(
  process.env.SHOPIFY_PUBLIC_ACCESS_TOKEN,
  'Missing environment variable: SHOPIFY_PUBLIC_ACCESS_TOKEN'
)

export const storeDomain = assertValue(
  process.env.SHOPIFY_STORE_DOMAIN,
  'Missing environment variable: SHOPIFY_STORE_DOMAIN'
)


function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
