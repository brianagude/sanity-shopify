import { defineField, SchemaTypeDefinition } from 'sanity'
import { buttonLink } from '../blocks/buttonLink'

export const productDetails: SchemaTypeDefinition = {
  name: 'productDetails',
  title: 'Product Details',
  type: 'object',
  fields: [
    defineField({
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{ type: 'product' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Standard', value: 'standard' },
          { title: 'Gallery', value: 'gallery' },
          { title: 'Sticky', value: 'sticky' },
          { title: 'Full Width', value: 'fullWidth' },
        ],
      },
      initialValue: 'standard',
    }),
    defineField({
      name: 'galleryLayout',
      title: 'Gallery Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'Thumbnails', value: 'thumbnails' },
          { title: 'Stack', value: 'stack' },
        ],
      },
      initialValue: 'thumbnails',
      hidden: ({ parent }) => parent?.layout === 'fullWidth',
    }),
    defineField({
      name: 'showThumbnails',
      title: 'Show Thumbnails',
      type: 'boolean',
      initialValue: true,
      hidden: ({ parent }) => parent?.layout === 'fullWidth',
    }),
    defineField({
      name: 'showZoom',
      title: 'Show Zoom',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showQuantity',
      title: 'Show Quantity Selector',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showVariantSelector',
      title: 'Show Variant Selector',
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
      name: 'showShare',
      title: 'Show Share',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showStock',
      title: 'Show Stock Status',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showSKU',
      title: 'Show SKU',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'showVendor',
      title: 'Show Vendor',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'showTags',
      title: 'Show Tags',
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
      product: 'product.title',
      layout: 'layout',
    },
    prepare({ product, layout }) {
      return {
        title: 'Product Details',
        subtitle: `${product || 'No product selected'}, ${layout} layout`,
      }
    },
  },
}
