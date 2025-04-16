import { defineField, defineType } from 'sanity'
import {TiersIcon} from '@sanity/icons'
export const collection = defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  icon: TiersIcon,
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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      group: 'content',
    }),
    defineField({
      name: 'image',
      title: 'Collection Image',
      type: 'imageComponent',
      group: 'content',
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
      group: 'content',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      fields: [
        {
          name: 'title',
          title: 'SEO Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'SEO Description',
          type: 'text',
          rows: 2,
        },
        {
          name: 'image',
          title: 'SEO Image',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'store',
      title: 'Shopify Collection Info',
      type: 'object',
      readOnly: true,
      group: 'shopify',
      fields: [
        { name: 'title', type: 'string', readOnly: true },
        {
          name: 'slug',
          type: 'slug',
          readOnly: true,
        },
        {
          name: 'descriptionHtml',
          type: 'text',
          readOnly: true,
        },
        {
          name: 'sortOrder',
          type: 'string',
          readOnly: true,
        },
        {
          name: 'gid',
          type: 'string',
          readOnly: true,
        },
        {
          name: 'createdAt',
          type: 'datetime',
          readOnly: true,
          options: {
            dateFormat: 'MM-DD-YYYY',
            timeFormat: 'HH:mm',
          }
        },
        {
          name: 'id',
          type: 'number',
          readOnly: true,
        },
        {
          name: 'isDeleted',
          type: 'boolean',
          readOnly: true,
        },
      ]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      shopifyTitle: 'store.title',
      subtitle: 'description',
      media: 'image',
    },
    prepare({ title, shopifyTitle, subtitle, media }) {
      return {
        title: title || shopifyTitle || 'Untitled Collection',
        subtitle,
        media,
      }
    },
  },
}) 