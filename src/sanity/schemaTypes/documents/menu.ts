import { defineField, defineType } from 'sanity'
import {MenuIcon} from '@sanity/icons'

export const menu = defineType({
  name: 'menu',
  title: 'Menu',
  type: 'document',
  icon: MenuIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Menu Location',
      type: 'string',
      options: {
        list: [
          { title: 'Header', value: 'header' },
          { title: 'Footer', value: 'footer' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'items',
      title: 'Menu Items',
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
              name: 'link',
              title: 'Link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'isMegaMenu',
              title: 'Enable Mega Menu',
              type: 'boolean',
              initialValue: false,
              hidden: ({ document }) => document?.location !== 'header',
            },
            {
              name: 'megaMenuContent',
              title: 'Mega Menu Content',
              type: 'object',
              hidden: ({ parent, document }) => 
                document?.location !== 'header' || !parent?.isMegaMenu,
              fields: [
                {
                  name: 'columns',
                  title: 'Columns',
                  type: 'array',
                  of: [
                    {
                      type: 'object',
                      fields: [
                        {
                          name: 'title',
                          title: 'Column Title',
                          type: 'string',
                        },
                        {
                          name: 'links',
                          title: 'Links',
                          type: 'array',
                          of: [
                            {
                              type: 'object',
                              fields: [
                                {
                                  name: 'title',
                                  title: 'Link Title',
                                  type: 'string',
                                  validation: (Rule) => Rule.required(),
                                },
                                {
                                  name: 'link',
                                  title: 'Link URL',
                                  type: 'string',
                                  validation: (Rule) => Rule.required(),
                                },
                              ],
                            },
                          ],
                        },
                        {
                          name: 'featuredImage',
                          title: 'Featured Image',
                          type: 'imageComponent',
                        },
                        {
                          name: 'featuredText',
                          title: 'Featured Text',
                          type: 'text',
                          rows: 2,
                        },
                      ],
                    },
                  ],
                },
                {
                  name: 'featuredProduct',
                  title: 'Featured Product',
                  type: 'reference',
                  to: [{ type: 'product' }],
                },
                {
                  name: 'promotion',
                  title: 'Promotion',
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Promotion Title',
                      type: 'string',
                    },
                    {
                      name: 'description',
                      title: 'Promotion Description',
                      type: 'text',
                      rows: 2,
                    },
                    {
                      name: 'image',
                      title: 'Promotion Image',
                      type: 'image',
                      options: {
                        hotspot: true,
                      },
                    },
                    {
                      name: 'link',
                      title: 'Promotion Link',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
            {
              name: 'subItems',
              title: 'Sub Items',
              type: 'array',
              hidden: ({ parent, document }) => 
                document?.location === 'header' && parent?.isMegaMenu,
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
                      name: 'link',
                      title: 'Link',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `Location: ${subtitle}`,
      }
    },
  },
}) 