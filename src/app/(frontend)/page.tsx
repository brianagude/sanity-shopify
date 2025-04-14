// import {HomePage} from '@/components/HomePage'
import {sanityFetch} from '@/sanity/lib/live'
import {HOME_PAGE_QUERY} from '@/sanity/queries'

export default async function IndexRoute() {
  const {data} = await sanityFetch({query: HOME_PAGE_QUERY})

  console.log(data)

  return <p>Home Page</p>
}