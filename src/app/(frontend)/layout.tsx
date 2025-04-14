import {sanityFetch, SanityLive} from '@/sanity/lib/live'
import {SITE_SETTINGS_QUERY} from '@/sanity/queries'
import {urlForOpenGraphImage} from '@/sanity/lib/utils'
import type {Metadata, Viewport} from 'next'
import {toPlainText, VisualEditing} from 'next-sanity'
import {draftMode} from 'next/headers'
import {Toaster} from 'sonner'
import {handleError} from './client-functions'
import {DraftModeToast} from './DraftModeToast'

export async function generateMetadata(): Promise<Metadata> {
  const {data: settings} = await sanityFetch({query: SITE_SETTINGS_QUERY, stega: false})
  
  const seo = settings?.seo
  const ogImage = urlForOpenGraphImage(seo?.metaImage)

  return {
    title: seo?.metaTitle
      ? {
          template: `%s | ${seo?.metaTitle}`,
          default: seo?.metaTitle || 'Personal website',
        }
      : undefined,
    description: seo?.metaDescription ? toPlainText(seo?.metaDescription) : undefined,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

export const viewport: Viewport = {
  themeColor: '#000',
}

export default async function IndexRoute({children}: {children: React.ReactNode}) {
  // const {data} = await sanityFetch({query: settingsQuery})
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <div>{children}</div>
      </main>
      <Toaster />
      <SanityLive onError={handleError} />
      {(await draftMode()).isEnabled && (
        <>
          <DraftModeToast />
          <VisualEditing />
        </>
      )}
    </>
  )
}