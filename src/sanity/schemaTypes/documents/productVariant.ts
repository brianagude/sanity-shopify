import { defineField, defineType } from 'sanity'
import {TiersIcon} from '@sanity/icons'

export const productVariant = defineType({
  name: 'productVariant',
  title: 'Variants',
  type: 'document',
  icon: TiersIcon,
  fields: [
    defineField({
      name: 'store',
      title: 'Shopify Variant Info',
      type: 'object',
      readOnly: true,
      fields: [
        { name: 'title', type: 'string', readOnly: true },
        { name: 'status', type: 'string', readOnly: true },
        { name: 'sku', type: 'string', readOnly: true },
        { name: 'price', type: 'number', readOnly: true },
        { name: 'compareAtPrice', type: 'number', readOnly: true },
        { name: 'availableForSale', type: 'boolean', readOnly: true },
        { name: 'isDeleted', type: 'boolean', readOnly: true },
        { name: 'id', type: 'number', readOnly: true },
        { name: 'productId', type: 'number', readOnly: true },
        { name: 'gid', type: 'string', readOnly: true },
        { name: 'productGid', type: 'string', readOnly: true },
        {
          name: 'inventory',
          title: 'Inventory Info',
          type: 'object',
          readOnly: true,
          fields: [
            { name: 'isAvailable', type: 'boolean', readOnly: true },
            { name: 'management', type: 'string', readOnly: true },
            { name: 'policy', type: 'string', readOnly: true },
          ]
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
        { name: 'option1', type: 'string', readOnly: true, hidden: true },
        { name: 'option2', type: 'string', readOnly: true, hidden: true },
        { name: 'option3', type: 'string', readOnly: true, hidden: true },
      ],
    }),
    
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