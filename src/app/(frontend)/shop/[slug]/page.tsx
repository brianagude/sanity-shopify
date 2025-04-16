// /shop/[slug]

import {sanityFetch} from '@/sanity/lib/live'
import {PRODUCT_PAGE_QUERY, PRODUCT_SLUGS_QUERY} from '@/sanity/queries'
import type {Metadata, ResolvingMetadata} from 'next'
import {toPlainText} from 'next-sanity'
import {draftMode} from 'next/headers'
import {notFound} from 'next/navigation'
import { ProductInfo } from '@/components/ProductInfo'
import { shopifyFetch } from '@/shopify/fetch'
import { PRODUCT_BY_ID_QUERY } from '@/shopify/queries'

type Props = {
  params: Promise<{slug: string}>
}

export async function generateMetadata(
  {params}: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const {data: page} = await sanityFetch({
    query: PRODUCT_PAGE_QUERY,
    params,
    stega: false,
    perspective: 'published',
  })

  return {
    title: page?.title || page?.seo?.metaTitle || page?.store?.title || (await parent).title,
    description: page?.seo?.metaDescription ? toPlainText(page.seo.metaDescription) : page?.store?.descriptionHtml ? page.store?.descriptionHtml : (await parent).description,
  }
}

export async function generateStaticParams() {
  const {data} = await sanityFetch({
    query: PRODUCT_SLUGS_QUERY,
    params: {type: 'product'},
    stega: false,
    perspective: 'published',
  })
  return data
}

export default async function ProductPage({ params }: Props) {
  const { data } = await sanityFetch({ query: PRODUCT_PAGE_QUERY, params })

  if (!data?._id && !(await draftMode()).isEnabled) { notFound() }
  const { title, description, store, previewImageUrl } = data ?? {}

  console.log('Preview Image URL:', previewImageUrl)

  if (!store?.gid) {
    throw new Error('Product store ID is missing')
  }

  const shopifyData = await shopifyFetch({
    query: PRODUCT_BY_ID_QUERY,
    variables: { id: store.gid },
  })
 
  return (
    <ProductInfo
      title={title ?? ''}
      description={description ?? []}
      shopifyProduct={shopifyData}
      featuredImage={previewImageUrl || ''}
    />
  )
}