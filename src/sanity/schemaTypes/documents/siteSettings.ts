import { defineType, defineField } from 'sanity'
import { CogIcon } from '@sanity/icons'
import { buttonLink } from '../blocks/buttonLink'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    { name: 'navigation', title: 'Navigation' },
    { name: 'seo', title: 'SEO' },
    { name: 'social', title: 'Social' },
    { name: 'settings', title: 'Settings' },
  ],
  fields: [
    // Company Information
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      group: 'settings',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'homePage',
      title: 'Home Page',
      type: 'reference',
      to: [{ type: 'page' }],
      description: 'Select which page should be treated as the home page',
      group: 'settings',
      validation: (Rule) => Rule.required(),
    }),

    // Header Settings
    defineField({
      name: 'header',
      title: 'Header Settings',
      type: 'object',
      group: 'navigation',
      fields: [
        defineField({
          name: 'logo',
          title: 'Header Logo',
          type: 'image',
          options: {
            hotspot: true,
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'mainMenu',
          title: 'Main Navigation Menu',
          type: 'reference',
          to: [{ type: 'menu' }],
          description: 'Select the menu to use for the main navigation',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'headerButtons',
          title: 'Header Buttons',
          type: 'array',
          of: [{ type: 'object', fields: buttonLink.fields }],
          validation: (Rule) => Rule.max(2).warning('Too many buttons may affect mobile usability'),
        }),
      ],
    }),

    // Footer Settings
    defineField({
      name: 'footer',
      title: 'Footer Settings',
      type: 'object',
      group: 'navigation',
      fields: [
        defineField({
          name: 'logo',
          title: 'Footer Logo',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'logoCaption',
          title: 'Logo Caption',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'footerMenu',
          title: 'Footer Menu',
          type: 'reference',
          to: [{ type: 'menu' }],
          description: 'Select the menu to use for the footer navigation',
        }),
        defineField({
          name: 'newsletter',
          title: 'Newsletter Settings',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Newsletter Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Newsletter Description',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'klaviyoListId',
              title: 'Klaviyo List ID',
              type: 'string',
              description: 'The Klaviyo list ID for newsletter signups',
            }),
          ],
        }),
        defineField({
          name: 'footerButtons',
          title: 'Footer CTA Buttons',
          type: 'array',
          of: [{ type: 'object', fields: buttonLink.fields }],
          validation: (Rule) => Rule.max(2).warning('Too many buttons may affect mobile usability'),
        }),
        defineField({
          name: 'footerText',
          title: 'Footer Text',
          type: 'array',
          of: [{ type: 'block' }],
        }),
      ],
    }),

    // Default SEO Settings
    defineField({
      name: 'defaultSeo',
      title: 'Default SEO Settings',
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
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    // Social Media Links
    defineField({
      name: 'socialMedia',
      title: 'Social Media Links',
      type: 'object',
      group: 'social',
      fields: [
        defineField({
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        }),
        defineField({
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'companyName',
      media: 'header.logo',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Site Settings',
        media,
      }
    },
  },
}) 