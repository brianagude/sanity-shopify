import { defineField, defineType } from 'sanity'
import {TagIcon} from '@sanity/icons'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TagIcon,
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'shopify', title: 'Shopify' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      group: 'content',
      description: 'Used to override the product title in the Shopify store',
    }),
    defineField({
      name: 'description',
      title: 'Product Description',
      type: 'simpleBlockContent',
      group: 'content',
      description: 'Used to override the product description in the Shopify store',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'imageComponent' }],
      group: 'content',
      description: 'Used to override the default product image in the Shopify store. The first image will be used as the featured product image.',
    }),
    defineField({
      name: 'productDetails',
      title: 'Product Details',
      group: 'content',
      type: 'array',
      description: 'Additional product details to display on the product page in accordion format',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'subheading', title: 'Subheading', type: 'string' },
            { name: 'text', title: 'Text', type: 'simpleBlockContent' },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Overwrite default SEO settings',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Default Meta Title',
          type: 'string',
          description: 'Used to override the default meta title in settings',
          validation: (Rule) => Rule.max(60).warning('Meta titles should be under 60 characters'),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Default Meta Description',
          type: 'text',
          rows: 3,
          description: 'Used to override the default meta description in settings',
          validation: (Rule) => Rule.min(50).max(160).warning('Meta descriptions should be between 50 and 160 characters'),
        }),
        defineField({
          name: 'metaImage',
          title: 'Default Meta Image',
          type: 'image',
          description: 'Used to override the default meta image in settings. Should be 1200x630px',
        }),
      ],
    }),
    defineField({
      name: 'store',
      title: 'Shopify Product Info',
      type: 'object',
      group: 'shopify',
      readOnly: true,
      fields: [
        { name: 'title', type: 'string', readOnly: true },
        { name: 'slug', type: 'slug', readOnly: true },
        { name: 'descriptionHtml', type: 'text', readOnly: true },
        { name: 'previewImageUrl', type: 'string', readOnly: true },
        { name: 'status', type: 'string', readOnly: true },
        {
          name: 'priceRange',
          type: 'object',
          readOnly: true,
          fields: [
            { name: 'minVariantPrice', type: 'number' },
            { name: 'maxVariantPrice', type: 'number' },
          ]
        },
        {
          name: 'tags',
          title: 'Tags',
          type: 'array',
          hidden: true,
          of: [
            {
              type: 'object',
              name: 'option',
              fields: [
                { name: 'name', type: 'string', readOnly: true },
                {
                  name: 'tags',
                  type: 'array',
                  of: [{ type: 'string' }],
                },
              ],
            },
          ],
        },
        {
          name: 'variants',
          title: 'Variants',
          type: 'array',
          hidden: true,
          of: [
            {
              type: 'reference',
              weak: false,
              to: [{ type: 'productVariant' }],
            },
          ],
        },
        {
          name: 'options',
          title: 'Options',
          type: 'array',
          hidden: true,
          of: [
            {
              type: 'object',
              name: 'option',
              fields: [
                { name: 'name', type: 'string', readOnly: true },
                {
                  name: 'values',
                  type: 'array',
                  of: [{ type: 'string' }],
                  readOnly: true,
                },
              ],
            },
          ],
        },
        { name: 'productType', type: 'string' },
        { name: 'vendor', type: 'string', hidden: true, },
        { name: 'id', type: 'number', hidden: true, },
        { name: 'gid', type: 'string' },
        { 
          name: 'createdAt', 
          type: 'datetime',
          hidden: true,
          options: {
            dateFormat: 'MM-DD-YYYY',
            timeFormat: 'HH:mm',
          } 
        },
        { name: 'isDeleted', type: 'boolean' },
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
      fallbackTitle: 'store.title',
      media: 'images.0',
      slug: 'store.slug.current',
    },
    prepare({ title, media, slug, fallbackTitle }) {
      return {
        title: title || fallbackTitle,
        media: media,
        subtitle: `/shop/${slug}`,
      }
    },
  },
}) 