import { defineField, SchemaTypeDefinition } from 'sanity'
import { buttonLink } from '../blocks/buttonLink'

export const features: SchemaTypeDefinition = {
  name: 'features',
  title: 'Features',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'None', value: 'none' },
                  { title: 'Check', value: 'check' },
                  { title: 'Star', value: 'star' },
                  { title: 'Heart', value: 'heart' },
                  { title: 'Shield', value: 'shield' },
                  { title: 'Lightning', value: 'lightning' },
                  { title: 'Rocket', value: 'rocket' },
                  { title: 'Gear', value: 'gear' },
                ],
              },
              initialValue: 'none',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'imageComponent',
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).required(),
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fields: buttonLink.fields,
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'List', value: 'list' },
          { title: 'Cards', value: 'cards' },
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
      features: 'features',
    },
    prepare({ layout, features }) {
      return {
        title: 'Features Section',
        subtitle: `${features?.length || 0} features, ${layout} layout`,
      }
    },
  },
}
