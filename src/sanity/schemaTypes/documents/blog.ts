import { defineField, SchemaTypeDefinition } from 'sanity'
import {ComposeIcon} from '@sanity/icons'
export const blog: SchemaTypeDefinition = {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  icon: ComposeIcon,
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
          { title: 'Masonry', value: 'masonry' },
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
      name: 'showAuthor',
      title: 'Show Author',
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
      name: 'showExcerpt',
      title: 'Show Excerpt',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'postsPerPage',
      title: 'Posts Per Page',
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
          { title: 'Latest', value: 'latest' },
          { title: 'Featured', value: 'featured' },
          { title: 'Popular', value: 'popular' },
        ],
      },
      initialValue: 'latest',
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
          type: 'imageComponent',
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
        title: 'Blog',
        subtitle: title,
      }
    },
  },
}
