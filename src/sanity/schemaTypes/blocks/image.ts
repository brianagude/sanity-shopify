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
            'A description of the image for screen readers and accessibility. It should describe the content or purpose of the image.',
          validation: (Rule) =>
            Rule
              .required()
              .min(10)
              .max(150)
              .error('Alt text is required and must be between 10-150 characters.'),
        }),
        defineField({
          name: "priority",
          type: "boolean",
          title: "Load Immediately (Priority)",
          description: "Enable if this is the first image that shows up on the page.",
          initialValue: false,
        }),
        defineField({
          name: "caption",
          type: "string",
          title: "Image Caption",
          description: "Optional caption to display below the image.",
          validation: (Rule) => Rule.max(200).warning('Captions should be concise.'),
        }),
      ],
    }),
    defineField({
      name: "aspectRatio",
      title: "Aspect Ratio",
      type: "string",
      description: "Select a predefined aspect ratio or use custom dimensions.",
      options: {
        list: [
          { title: "Auto", value: "auto" },
          { title: "Square (1:1)", value: "1:1" },
          { title: "Portrait (4:5)", value: "4:5" },
          { title: "Landscape (16:9)", value: "16:9" },
          { title: "Wide (21:9)", value: "21:9" },
        ],
        layout: "radio",
      },
      initialValue: "auto",
    }),
    defineField({
      name: "objectFit",
      title: "Object Fit",
      type: "string",
      description: "How the image should be fitted within its container.",
      options: {
        list: [
          { title: "Cover", value: "cover" },
          { title: "Contain", value: "contain" },
          { title: "Fill", value: "fill" },
        ],
        layout: "radio",
      },
      initialValue: "cover",
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
