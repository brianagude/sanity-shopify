import { defineType, defineField } from 'sanity';
import { LinkIcon } from '@sanity/icons';
import { baseLinkFields } from './baseLink';

export const buttonLink = defineType({
  name: 'buttonLink',
  title: 'Button Link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    ...baseLinkFields,
    defineField({
      name: 'style',
      title: 'Button Style',
      type: 'string',
      description: 'Select the button style.',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
          { title: 'Ghost', value: 'ghost' },
          { title: 'Text', value: 'text' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      initialValue: 'primary',
    }),
    defineField({
      name: 'size',
      title: 'Button Size',
      type: 'string',
      description: 'Select the button size.',
      options: {
        list: [
          { title: 'Default', value: 'default' },
          { title: 'Small', value: 'small' },
          { title: 'Large', value: 'large' }
        ],
        layout: 'radio',
        direction: 'horizontal'
      },
      initialValue: 'default',
    }),
  ],
  preview: {
    select: {
      title: 'text',
      url: 'url',
      internalPage: 'internalPage.title',
      style: 'style',
      size: 'size',
    },
    prepare({ title, url, internalPage, style, size }) {
      return {
        title: title + ' (' + style + ' - ' + size + ')',
        subtitle: 'Links to: ' + (internalPage || url || 'No URL or internal page'),
      };
    },
  },
});
