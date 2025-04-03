import { defineField, defineType } from 'sanity'
import {TagIcon} from '@sanity/icons'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TagIcon,
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'shopify', title: 'Shopify' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'text',
      type: 'simpleBlockContent',
      group: 'content',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'imageComponent' }],
      group: 'content',
    }),
    defineField({
      name: 'productDetails',
      title: 'Product Details',
      group: 'content',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'text', title: 'Text', type: 'simpleBlockContent' },
          ],
        },
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
          readOnly: true,
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
                  readOnly: true,
                },
              ],
            },
          ],
        },
        {
          name: 'variants',
          title: 'Variants',
          type: 'array',
          of: [
            {
              type: 'reference',
              weak: false,
              to: [{ type: 'productVariant' }],
            },
          ],
          readOnly: true,
        },
        {
          name: 'options',
          title: 'Options',
          type: 'array',
          readOnly: true,
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
        { name: 'productType', type: 'string', readOnly: true },
        { name: 'vendor', type: 'string', readOnly: true },
        { name: 'id', type: 'number', readOnly: true },
        { name: 'gid', type: 'string', readOnly: true },
        { 
          name: 'createdAt', 
          type: 'datetime',
          readOnly: true,
          options: {
            dateFormat: 'MM-DD-YYYY',
            timeFormat: 'HH:mm',
          } 
        },
        { name: 'isDeleted', type: 'boolean', readOnly: true },
      ]
    })
  ],
  preview: {
    select: {
      title: 'store.title',
      media: 'images.0',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      }
    },
  },
}) 