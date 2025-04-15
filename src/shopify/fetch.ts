export async function shopifyFetch({ query, variables }: { query: string; variables?: Record<string, any> }) {
  const storeDomain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
  const publicAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_PUBLIC_ACCESS_TOKEN
  const apiVersion = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION

  if (!storeDomain || !publicAccessToken || !apiVersion) {
    throw new Error('Missing Shopify environment variables')
  }

  const res = await fetch(`https://${storeDomain}/api/${apiVersion}/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': publicAccessToken,
    },
    body: JSON.stringify({ query, variables }),
  })

  const json = await res.json()
  if (json.errors) throw new Error(JSON.stringify(json.errors))
  return json.data
}
