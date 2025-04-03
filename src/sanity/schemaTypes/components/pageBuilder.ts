import { SchemaTypeDefinition } from 'sanity'

export const pageBuilder: SchemaTypeDefinition = {
  name: 'pageBuilder',
  title: 'Page Builder',
  type: 'array',
  of: [
    {
      type: 'hero',
      title: 'Hero Section',
    },
    {
      type: 'features',
      title: 'Features Section',
    },
    {
      type: 'productGrid',
      title: 'Product Grid',
    },
    {
      type: 'productCarousel',
      title: 'Product Carousel',
    },
    {
      type: 'collectionNavigation',
      title: 'Collection Navigation',
    },
    {
      type: 'featuredItems',
      title: 'Featured Items',
    },
    {
      type: 'newsletter',
      title: 'Newsletter',
    },
    {
      type: 'testimonials',
      title: 'Testimonials',
    },
    {
      type: 'productDetails',
      title: 'Product Details',
    },
    {
      type: 'blockContent',
      title: 'Rich Text',
    },
  ],
}
