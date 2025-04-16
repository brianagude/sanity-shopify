import { defineField, defineType } from 'sanity'

export const productCarousel = defineType({
  name: 'productCarousel',
  title: 'Product Carousel',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Block Text',
      type: 'blockContent',
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
    }),
    defineField({
      name: 'productsPerView',
      title: 'Products Per View',
      type: 'number',
      options: {
        list: [
          { title: '2 Products', value: 2 },
          { title: '3 Products', value: 3 },
          { title: '4 Products', value: 4 },
        ],
      },
      initialValue: 3,
    }),
    defineField({
      name: 'showArrows',
      title: 'Show Navigation Arrows',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showDots',
      title: 'Show Navigation Dots',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'autoplaySpeed',
      title: 'Autoplay Speed (ms)',
      type: 'number',
      initialValue: 3000,
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'buttonLink',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      products: 'products',
    },
    prepare({ title, subtitle, products }) {
      return {
        title: title || 'Product Carousel',
        subtitle: subtitle || `${products?.length || 0} products`,
      }
    },
  },
}) 