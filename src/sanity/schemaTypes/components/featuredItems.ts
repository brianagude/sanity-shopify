import { defineField, SchemaTypeDefinition } from 'sanity'

export const featuredItems: SchemaTypeDefinition = {
  name: 'featuredItems',
  title: 'Featured Items',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'items',
      title: 'Featured Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title Override',
              type: 'string',
              description: 'Optional: Override the default title from the referenced item',
            },
            {
              name: 'description',
              title: 'Description Override',
              type: 'text',
              rows: 2,
              description: 'Optional: Override the default description from the referenced item',
            },
            {
              name: 'image',
              title: 'Image Override',
              type: 'imageComponent',
              description: 'Optional: Override the default image from the referenced item',
            },
            {
              name: 'item',
              title: 'Item',
              type: 'reference',
              to: [
                { type: 'product' },
                { type: 'blogPost' },
                { type: 'event' },
                { type: 'collection' },
              ],
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'ctaText',
              title: 'CTA Text',
              type: 'string',
              description: 'Optional: Override the default CTA text from the referenced item',
            },
            
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).required(),
    }),
    defineField({
      name: 'defaultCtaText',
      title: 'Default CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'Carousel', value: 'carousel' },
          { title: 'Masonry', value: 'masonry' },
          { title: 'List', value: 'list' },
        ],
      },
      initialValue: 'grid',
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: {
        list: [
          { title: '2 Columns', value: 2 },
          { title: '3 Columns', value: 3 },
          { title: '4 Columns', value: 4 },
        ],
      },
      initialValue: 3,
      hidden: ({ parent }) => parent?.layout !== 'grid',
    }),
    defineField({
      name: 'itemLayout',
      title: 'Item Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Card', value: 'card' },
          { title: 'Compact', value: 'compact' },
          { title: 'Minimal', value: 'minimal' },
        ],
      },
      initialValue: 'card',
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'string',
      options: {
        list: [
          { title: 'None', value: 'transparent' },
          { title: 'Light Gray', value: 'lightGray' },
          { title: 'Dark Gray', value: 'darkGray' },
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
        ],
      },
      initialValue: 'none',
    }),
    defineField({
      name: 'showArrows',
      title: 'Show Navigation Arrows',
      type: 'boolean',
      initialValue: true,
      hidden: ({ parent }) => parent?.layout !== 'carousel',
    }),
    defineField({
      name: 'showDots',
      title: 'Show Navigation Dots',
      type: 'boolean',
      initialValue: true,
      hidden: ({ parent }) => parent?.layout !== 'carousel',
    }),
    defineField({
      name: 'autoplay',
      title: 'Autoplay',
      type: 'boolean',
      initialValue: false,
      hidden: ({ parent }) => parent?.layout !== 'carousel',
    }),
    defineField({
      name: 'itemsPerView',
      title: 'Items Per View',
      type: 'number',
      options: {
        list: [
          { title: '2 Items', value: 2 },
          { title: '3 Items', value: 3 },
          { title: '4 Items', value: 4 },
        ],
      },
      initialValue: 3,
      hidden: ({ parent }) => parent?.layout !== 'carousel',
    }),
  ],
  preview: {
    select: {
      layout: 'layout',
      items: 'items',
    },
    prepare({ layout, items }) {
      return {
        title: 'Featured Items Section',
        subtitle: `${items?.length || 0} items, ${layout} layout`,
      }
    },
  },
}
