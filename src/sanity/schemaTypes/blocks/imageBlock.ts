import { defineType, defineField } from 'sanity';
import { ImageIcon } from '@sanity/icons';

export const image = defineType({
  name: 'imageComponent',
  title: 'Image Component',
  type: 'object',
  icon: ImageIcon,
  description: 'A configurable image with optional aspect ratios, custom dimensions, and styling options.',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Upload an image. Use high-quality images for better visual results.',
      options: {
        hotspot: true,
        metadata: ['lqip', 'palette'],
        accept: 'image/*',
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description:
            'A description of the image for screen readers and accessibility. Imagine a blind person navigating your site. What is the image about?',
          validation: (Rule) =>
            Rule
              .required()
              .min(10)
              .max(150)
              .error('Alt text is required and must be between 10-150 characters.'),
        }),
      ],
    }),
  ],
  preview: {
    select: {
      media: "image",
      altText: "image.alt",
      aspectRatio: "aspectRatio",
      objectFit: "objectFit",
    },
    prepare({ media, altText, aspectRatio, objectFit }) {
      return {
        title: altText || "No Alt Text",
        subtitle: `Aspect Ratio: ${aspectRatio} | Fit: ${objectFit}`,
        media
      };
    },
  },
});
