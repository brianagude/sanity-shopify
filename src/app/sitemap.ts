// import { MetadataRoute } from 'next'
// import { client } from '@/sanity/lib/client'
// import { SITEMAP_QUERY } from '@/sanity/lib/queries'

// type SanityDocument = {
//   _id: string
//   _type: string
//   template?: string
//   slug?: string
//   _updatedAt: string
//   lastModified?: string
// }

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const baseUrl = 'https://www.simberobotics.com'

//   // 1. Static routes
//   const staticRoutes: MetadataRoute.Sitemap = [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: 'daily',
//       priority: 1,
//     },
//   ]

//   // 2. Get all content from Sanity
//   const sanityDocs = await client.fetch<SanityDocument[]>(SITEMAP_QUERY)

//   // 3. Transform Sanity documents into sitemap entries
//   const dynamicRoutes: MetadataRoute.Sitemap = sanityDocs.map((doc) => {
//     let path: string
//     let priority: number

//     // Helper function to get the last modified date
//     const getLastModified = (doc: SanityDocument) => {
//       return new Date(doc.lastModified || doc._updatedAt)
//     }

//     // Determine the path and priority based on document type and template
//     switch (doc._type) {
//       case 'article':
//         // Handle article routes based on template
//         if (doc.template === 'news' || doc.template === 'press') {
//           path = `${baseUrl}/about/newsroom/${doc.slug}`
//         } else {
//           path = `${baseUrl}/resources/customer-stories/${doc.slug}`
//         }
//         priority = 0.7
//         break

//       case 'page':
//         // Handle page routes based on template
//         if (doc.template === 'standard' || doc.template === 'text-content') {
//           path = `${baseUrl}/${doc.slug}`
//         } else {
//           path = `${baseUrl}/${doc.template}/${doc.slug}`
//         }
//         priority = 0.8
//         break

//       // Handle static route types
//       case 'customer-stories':
//         path = `${baseUrl}/resources/customer-stories/${doc.slug}`
//         priority = 0.7
//         break

//       case 'industries':
//         path = `${baseUrl}/industries/${doc.slug}`
//         priority = 0.8
//         break

//       case 'use-cases':
//         path = `${baseUrl}/use-cases/${doc.slug}`
//         priority = 0.8
//         break

//       case 'resources':
//         path = `${baseUrl}/resources/${doc.slug}`
//         priority = 0.7
//         break

//       case 'store-intelligence':
//         path = `${baseUrl}/store-intelligence/${doc.slug}`
//         priority = 0.8
//         break

//       case 'glossary':
//       case 'glossaryPage':
//         path = `${baseUrl}/glossary/${doc.slug}`
//         priority = 0.6
//         break

//       case 'newsroom':
//         path = `${baseUrl}/about/newsroom/${doc.slug}`
//         priority = 0.7
//         break

//       default:
//         path = `${baseUrl}/${doc.slug}`
//         priority = 0.5
//     }

//     return {
//       url: path,
//       lastModified: getLastModified(doc),
//       changeFrequency: 'weekly',
//       priority,
//     }
//   })

//   return [...staticRoutes, ...dynamicRoutes]
// }
