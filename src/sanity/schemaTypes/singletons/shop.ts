import { defineField, SchemaTypeDefinition } from 'sanity'

export const shop: SchemaTypeDefinition = { 
  name: 'shop',
  title: 'Shop',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'List', value: 'list' },
          { title: 'Masonry', value: 'masonry' },
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
          { title: '2', value: 2 },
          { title: '3', value: 3 },
          { title: '4', value: 4 },
        ],
      },
      initialValue: 3,
      hidden: ({ parent }) => parent?.layout !== 'grid',
    }),
    defineField({
      name: 'showFilters',
      title: 'Show Filters',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showSort',
      title: 'Show Sort Options',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showPagination',
      title: 'Show Pagination',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'productsPerPage',
      title: 'Products Per Page',
      type: 'number',
      options: {
        list: [
          { title: '12', value: 12 },
          { title: '24', value: 24 },
          { title: '36', value: 36 },
          { title: '48', value: 48 },
        ],
      },
      initialValue: 12,
    }),
    defineField({
      name: 'defaultSort',
      title: 'Default Sort',
      type: 'string',
      options: {
        list: [
          { title: 'Featured', value: 'featured' },
          { title: 'Best Selling', value: 'best-selling' },
          { title: 'Price: Low to High', value: 'price-asc' },
          { title: 'Price: High to Low', value: 'price-desc' },
          { title: 'Newest', value: 'newest' },
        ],
      },
      initialValue: 'featured',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: 'Shop',
        subtitle: title,
      }
    },
  },
}
