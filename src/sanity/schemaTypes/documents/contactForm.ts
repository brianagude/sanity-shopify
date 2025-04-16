import { defineField, SchemaTypeDefinition } from 'sanity'
import { FeedbackIcon } from '@sanity/icons'

const fieldTypes = [
  { title: 'Text', value: 'text' },
  { title: 'Email', value: 'email' },
  { title: 'Phone', value: 'phone' },
  { title: 'Text Area', value: 'textarea' },
  { title: 'Select', value: 'select' },
]

export const contactForm: SchemaTypeDefinition = {
  name: 'contactForm',
  title: 'Contact Forms',
  type: 'document',
  icon: FeedbackIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Form Title',
      type: 'string',
      description: 'Used for internal purposes only',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'klaviyoListId',
      title: 'Klaviyo List ID',
      type: 'string',
      description: 'The Klaviyo list ID where form submissions will be sent',
    }),
    defineField({
      name: 'fields',
      title: 'Form Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Field Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'label',
              title: 'Field Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'type',
              title: 'Field Type',
              type: 'string',
              options: {
                list: fieldTypes,
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'placeholder',
              title: 'Placeholder Text',
              type: 'string',
            }),
            defineField({
              name: 'required',
              title: 'Required Field',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'options',
              title: 'Select Options',
              type: 'array',
              of: [{ type: 'string' }],
              hidden: ({ parent }) => parent?.type !== 'select',
            }),
            defineField({
              name: 'validation',
              title: 'Validation Rules',
              type: 'object',
              fields: [
                {
                  name: 'pattern',
                  title: 'Pattern (Regex)',
                  type: 'string',
                  description: 'Regular expression for validation',
                },
                {
                  name: 'message',
                  title: 'Error Message',
                  type: 'string',
                  description: 'Custom error message for validation',
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'text',
      rows: 2,
      initialValue: 'Thank you for your submission!',
    }),
    defineField({
      name: 'errorMessage',
      title: 'Error Message',
      type: 'text',
      rows: 2,
      initialValue: 'There was an error submitting the form. Please try again.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'klaviyoListId',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `Klaviyo List: ${subtitle}` : 'No Klaviyo List Set',
      }
    },
  },
} 