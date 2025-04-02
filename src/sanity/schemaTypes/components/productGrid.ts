import { defineField, SchemaTypeDefinition } from 'sanity'
import { buttonLink } from '../blocks/buttonLink'

export const productGrid: SchemaTypeDefinition = {
  name: 'productGrid',
  title: 'Product Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'collection',
      title: 'Collection',
      type: 'reference',
      to: [{ type: 'collection' }],
      description: 'Select a collection to display products from',
    }),
    defineField({
      name: 'products',
      title: 'Specific Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
      description: 'Select specific products to display (overrides collection)',
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
          { title: '2 Columns', value: 2 },
          { title: '3 Columns', value: 3 },
          { title: '4 Columns', value: 4 },
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
      name: 'filterOptions',
      title: 'Filter Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Filter Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'type',
              title: 'Filter Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Price Range', value: 'price' },
                  { title: 'Vendor', value: 'vendor' },
                  { title: 'Product Type', value: 'productType' },
                  { title: 'Tags', value: 'tags' },
                  { title: 'Availability', value: 'availability' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'defaultValue',
              title: 'Default Value',
              type: 'string',
              description: 'Optional: Set a default value for this filter',
            },
          ],
        },
      ],
      hidden: ({ parent }) => !parent?.showFilters,
    }),
    defineField({
      name: 'sortOptions',
      title: 'Sort Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      initialValue: [
        { label: 'Featured', value: 'featured' },
        { label: 'Best Selling', value: 'best-selling' },
        { label: 'Price: Low to High', value: 'price-asc' },
        { label: 'Price: High to Low', value: 'price-desc' },
        { label: 'Newest', value: 'newest' },
      ],
    }),
    defineField({
      name: 'defaultSort',
      title: 'Default Sort',
      type: 'string',
      initialValue: 'featured',
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
      name: 'showQuickView',
      title: 'Show Quick View',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showAddToCart',
      title: 'Show Add to Cart',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showPrice',
      title: 'Show Price',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showCompare',
      title: 'Show Compare',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: buttonLink.fields,
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
  ],
  preview: {
    select: {
      layout: 'layout',
      collection: 'collection.title',
      products: 'products',
    },
    prepare({ layout, collection, products }) {
      return {
        title: 'Product Grid',
        subtitle: `${collection ? `Collection: ${collection}` : `${products?.length || 0} products`}, ${layout} layout`,
      }
    },
  },
}
