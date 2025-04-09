import { defineField, type SchemaTypeDefinition } from 'sanity'
import {EarthGlobeIcon} from '@sanity/icons'

export const page: SchemaTypeDefinition = {
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: EarthGlobeIcon,
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'seo', title: 'SEO' },
  ],
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
          validation: (Rule) => Rule.max(60).warning('Meta titles should be under 60 characters'),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Default Meta Description',
          type: 'text',
          rows: 3,
          validation: (Rule) => Rule.max(160).warning('Meta descriptions should be under 160 characters'),
        }),
        defineField({
          name: 'metaImage',
          title: 'Default Meta Image',
          type: 'image',
        }),
      ],
    }),
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