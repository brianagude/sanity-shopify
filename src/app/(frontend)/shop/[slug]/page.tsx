import {sanityFetch} from '@/sanity/lib/live'
import {PRODUCT_PAGE_QUERY, PRODUCT_SLUGS_QUERY} from '@/sanity/queries'
import type {Metadata, ResolvingMetadata} from 'next'
import {toPlainText} from 'next-sanity'
import {draftMode} from 'next/headers'
import { ImageComponent } from '@/components/ui/ImageComponent'
import {notFound} from 'next/navigation'
import { SimpleBlockContent } from '@/components/inputs/PortableTextComponents'

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

export default async function PageSlugRoute({params}: Props) {
  const {data} = await sanityFetch({query: PRODUCT_PAGE_QUERY, params})
  console.log('data:', data)
  
  if (!data?._id && !(await draftMode()).isEnabled) {
    notFound()
  }

  const {title, description, featuredImage, galleryImages, productDetails, store, pageBuilder} = data ?? {}

  return (
    <div>
      <h1>product info</h1>
      <p>{title ? title : store?.title ? store?.title : ''}</p>
      {description ? <SimpleBlockContent value={description} /> : store?.descriptionHtml ? <p>{store.descriptionHtml}</p> : null} 
      <div>
        {featuredImage?.image?.asset && <ImageComponent image={featuredImage} />}
      </div>
    </div>
  )
}