import { defineType } from 'sanity';
import { LinkIcon } from '@sanity/icons';
import { baseLinkFields } from './baseLink';

export const simpleLink = defineType({
  name: 'simpleLink',
  title: 'Link',
  type: 'object',
  icon: LinkIcon,
  fields: baseLinkFields,
  preview: {
    select: {
      title: 'text',
      url: 'url',
      internalPage: 'internalPage.title',
    },
    prepare({ title, url, internalPage }) {
      return {
        title,
        subtitle: 'Links to: ' + (internalPage || url || 'No URL or internal page'),
      };
    },
  },
});
