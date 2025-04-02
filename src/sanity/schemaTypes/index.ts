import { type SchemaTypeDefinition } from 'sanity'

// Documents
import { siteSettings } from './documents/siteSettings'
import { page } from './documents/page'
import { blogPost } from './documents/blogPost'
import { category } from './documents/category'
import { collection } from './documents/collection'
import { events } from './documents/events'
import { product } from './documents/product'
import { team } from './documents/team'
import { menu } from './documents/menu'
import { cart } from './documents/cart'
import { checkout } from './documents/checkout'
import { search } from './documents/search'
import { shop } from './documents/shop'
import { blog } from './documents/blog'
import { event } from './documents/event'
import { faq } from './documents/faq'
import { contactForm } from './documents/contactForm'

// Components
import { productCarousel } from './components/productCarousel'
import { productGrid } from './components/productGrid'
import { collectionNavigation } from './components/collectionNavigation'
import { features } from './components/features'
import { hero } from './components/hero'
import { featuredItems } from './components/featuredItems'
import { newsletter } from './components/newsletter'
import { testimonials } from './components/testimonials'
import { productDetails } from './components/productDetails'

// Blocks
import { editorialBlockContent } from './blocks/editorialBlockContent'
import { blockContent } from './blocks/blockContent'
import { buttonLink } from './blocks/buttonLink'
import { simpleLink } from './blocks/simpleLink'
import { image } from './blocks/image'



const documentTypes = [siteSettings, page, blogPost, category, event, product, team, menu, collection, cart, checkout, search, events, shop, blog, faq, contactForm]

const componentTypes = [productCarousel, productGrid, collectionNavigation, features, hero, featuredItems, newsletter, testimonials, productDetails]

const blockTypes = [blockContent, buttonLink, simpleLink, image, editorialBlockContent]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...documentTypes, ...blockTypes, ...componentTypes],
}