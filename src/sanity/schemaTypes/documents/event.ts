import { defineField, SchemaTypeDefinition } from 'sanity'
import {DocumentsIcon} from '@sanity/icons'

export const event: SchemaTypeDefinition = {
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: DocumentsIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'List', value: 'list' },
          { title: 'Calendar', value: 'calendar' },
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
          { title: '2', value: 2 },
          { title: '3', value: 3 },
          { title: '4', value: 4 },
        ],
      },
      initialValue: 3,
      hidden: ({ parent }) => parent?.layout !== 'grid',
    }),
    defineField({
      name: 'showCategories',
      title: 'Show Categories',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showTags',
      title: 'Show Tags',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showDate',
      title: 'Show Date',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showLocation',
      title: 'Show Location',
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
      name: 'showCapacity',
      title: 'Show Capacity',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'eventsPerPage',
      title: 'Events Per Page',
      type: 'number',
      options: {
        list: [
          { title: '6', value: 6 },
          { title: '9', value: 9 },
          { title: '12', value: 12 },
          { title: '15', value: 15 },
        ],
      },
      initialValue: 9,
    }),
    defineField({
      name: 'defaultSort',
      title: 'Default Sort',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Past', value: 'past' },
          { title: 'Featured', value: 'featured' },
        ],
      },
      initialValue: 'upcoming',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: 'Event',
        subtitle: title,
      }
    },
  },
}
