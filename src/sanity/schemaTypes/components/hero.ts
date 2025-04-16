import { defineField, SchemaTypeDefinition } from 'sanity'
import { buttonLink } from '../blocks/buttonLink'

export const hero: SchemaTypeDefinition = {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'imageComponent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "overlay",
      title: "Overlay",
      description: "Optional: Add an overlay to the image.",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        list: [
          { title: "Top Left", value: "top-left" },
          { title: "Top Right", value: "top-right" },
          { title: "Bottom Left", value: "bottom-left" },
          { title: "Bottom Right", value: "bottom-right" },
          { title: "Full - 10%", value: "full-10" },
          { title: "Full - 20%", value: "full-20" },
          { title: "Full - 30%", value: "full-30" },
          { title: "Full - 40%", value: "full-40" },
        ],
        layout: "grid",
      },
    }),
    defineField({
      name: 'ctas',
      title: 'Call to Actions',
      type: 'array',
      of: [{ type: 'object', fields: buttonLink.fields }],
      validation: (Rule) => Rule.max(2).warning('Too many CTAs may affect mobile usability'),
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Left Aligned', value: 'left' },
          { title: 'Center Aligned', value: 'center' },
          { title: 'Right Aligned', value: 'right' },
        ],
      },
      initialValue: 'left',
    }),
    defineField({
      name: 'height',
      title: 'Section Height',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'small' },
          { title: 'Medium', value: 'medium' },
          { title: 'Large', value: 'large' },
          { title: 'Full Screen', value: 'fullScreen' },
        ],
      },
      initialValue: 'medium',
    }),
  ],
  preview: {
    select: {
      title: 'content',
      subtitle: 'layout',
      media: 'image',
    },
    prepare({ subtitle, media }) {
      return {
        title: 'Hero Section',
        subtitle: `Layout: ${subtitle}`,
        media,
      }
    },
  },
}
