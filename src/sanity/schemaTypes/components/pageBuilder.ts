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
      type: 'blockContent',
      title: 'Rich Text',
    },
  ],
}
