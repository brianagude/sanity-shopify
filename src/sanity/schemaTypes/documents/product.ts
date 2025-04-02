import { type SchemaTypeDefinition } from 'sanity'
import {TagIcon} from '@sanity/icons'
export const product: SchemaTypeDefinition = {
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: TagIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'imageComponent'
        },
      ],
    },
    {
      name: 'shopifyId',
      title: 'Shopify ID',
      type: 'string',
      description: 'The ID of the product in Shopify',
    },
    {
      name: 'shopifyHandle',
      title: 'Shopify Handle',
      type: 'string',
      description: 'The handle of the product in Shopify',
    },
    {
      name: 'inventory',
      title: 'Inventory',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      }
    },
  },
} 