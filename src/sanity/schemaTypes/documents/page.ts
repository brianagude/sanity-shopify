import { type SchemaTypeDefinition } from 'sanity'
import {EarthGlobeIcon} from '@sanity/icons'

export const page: SchemaTypeDefinition = {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: EarthGlobeIcon,
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
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 4,
        },
        {
          name: 'metaImage',
          title: 'Meta Image',
          type: 'image',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'hero.image',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      }
    },
  },
} 