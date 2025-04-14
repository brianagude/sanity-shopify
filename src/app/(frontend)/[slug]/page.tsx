// import {Header} from '@/components/Header'
import {sanityFetch} from '@/sanity/lib/live'
import {PAGE_QUERY, PAGE_SLUGS_QUERY} from '@/sanity/queries'
import type {Metadata, ResolvingMetadata} from 'next'
import {draftMode} from 'next/headers'
import {notFound} from 'next/navigation'

type Props = {
  params: Promise<{slug: string}>
}

export async function generateMetadata(
  {params}: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const {data: page} = await sanityFetch({
    query: PAGE_QUERY,
    params,
    stega: false,
  })

  return {
    title: page?.seo?.metaTitle || (await parent).title,
    description: page?.seo?.metaDescription ? page.seo.metaDescription : (await parent).description,
  }
}

export async function generateStaticParams() {
  const {data} = await sanityFetch({
    query: PAGE_SLUGS_QUERY,
    params: {type: 'page'},
    stega: false,
    perspective: 'published',
  })
  return data
}

export default async function PageSlugRoute({params}: Props) {
  const {data} = await sanityFetch({query: PAGE_QUERY, params})
  
  if (!data?._id && !(await draftMode()).isEnabled) {
    notFound()
  }

  const {title} = data ?? {}

  return (
    <div>
      <h1>Hello, {title}</h1>
      {/* <div className="mb-14">
        <Header
          id={data?._id || null}
          type={data?._type || null}
          path={['overview']}
          title={title || (data?._id ? 'Untitled' : '404 Page Not Found')}
          description={overview}
        />

        {body && (
          <CustomPortableText
            id={data?._id || null}
            type={data?._type || null}
            path={['body']}
            paragraphClasses="font-serif max-w-3xl text-gray-600 text-xl"
            value={body as unknown as PortableTextBlock[]}
          />
        )}
      </div>
      <div className="absolute left-0 w-screen border-t" /> */}
    </div>
  )
}