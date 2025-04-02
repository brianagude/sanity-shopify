import { defineField, SchemaTypeDefinition } from 'sanity'

export const newsletter: SchemaTypeDefinition = {
  name: 'newsletter',
  title: 'Newsletter',
  type: 'object',
  fields: [
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
          { title: 'Standard', value: 'standard' },
          { title: 'Compact', value: 'compact' },
          { title: 'Full Width', value: 'fullWidth' },
          { title: 'Card', value: 'card' },
        ],
      },
      initialValue: 'standard',
    }),
    defineField({
      name: 'showTitle',
      title: 'Show Title',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Subscribe to our newsletter',
      hidden: ({ parent }) => !parent?.showTitle,
    }),
    defineField({
      name: 'showDescription',
      title: 'Show Description',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      initialValue: 'Get the latest updates on new products and upcoming sales.',
      hidden: ({ parent }) => !parent?.showDescription,
    }),
    defineField({
      name: 'showMarketingPreferences',
      title: 'Show Marketing Preferences',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'marketingPreferences',
      title: 'Marketing Preferences',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'value',
              title: 'Value',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'checked',
              title: 'Checked by Default',
              type: 'boolean',
              initialValue: false,
            },
          ],
        },
      ],
      initialValue: [
        { label: 'Product Updates', value: 'product_updates', checked: true },
        { label: 'News and Blog Posts', value: 'news', checked: true },
        { label: 'Special Offers', value: 'special_offers', checked: true },
        { label: 'Events and Webinars', value: 'events', checked: false },
      ],
      hidden: ({ parent }) => !parent?.showMarketingPreferences,
    }),
    defineField({
      name: 'showPrivacyPolicy',
      title: 'Show Privacy Policy',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'privacyPolicyText',
      title: 'Privacy Policy Text',
      type: 'text',
      rows: 2,
      initialValue: 'By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.',
      hidden: ({ parent }) => !parent?.showPrivacyPolicy,
    }),
    defineField({
      name: 'privacyPolicyLink',
      title: 'Privacy Policy Link',
      type: 'string',
      initialValue: '/privacy-policy',
      hidden: ({ parent }) => !parent?.showPrivacyPolicy,
    }),
    defineField({
      name: 'showSuccessMessage',
      title: 'Show Success Message',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'text',
      rows: 2,
      initialValue: 'Thank you for subscribing!',
      hidden: ({ parent }) => !parent?.showSuccessMessage,
    }),
    defineField({
      name: 'showErrorMessage',
      title: 'Show Error Message',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'errorMessage',
      title: 'Error Message',
      type: 'text',
      rows: 2,
      initialValue: 'Something went wrong. Please try again.',
      hidden: ({ parent }) => !parent?.showErrorMessage,
    }),
    defineField({
      name: 'showPlaceholder',
      title: 'Show Placeholder',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'placeholder',
      title: 'Placeholder',
      type: 'string',
      initialValue: 'Enter your email',
      hidden: ({ parent }) => !parent?.showPlaceholder,
    }),
    defineField({
      name: 'showButton',
      title: 'Show Button',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Subscribe',
      hidden: ({ parent }) => !parent?.showButton,
    }),
    defineField({
      name: 'buttonStyle',
      title: 'Button Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Outline', value: 'outline' },
          { title: 'Ghost', value: 'ghost' },
        ],
      },
      initialValue: 'primary',
      hidden: ({ parent }) => !parent?.showButton,
    }),
    defineField({
      name: 'showIcon',
      title: 'Show Icon',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Envelope', value: 'envelope' },
          { title: 'Bell', value: 'bell' },
          { title: 'Paper Plane', value: 'paper-plane' },
          { title: 'Send', value: 'send' },
        ],
      },
      initialValue: 'envelope',
      hidden: ({ parent }) => !parent?.showIcon,
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
    },
    prepare({ layout }) {
      return {
        title: 'Newsletter',
        subtitle: `${layout} layout`,
      }
    },
  },
}
