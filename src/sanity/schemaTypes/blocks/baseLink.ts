import { defineField } from 'sanity';

export const baseLinkFields = [
  defineField({
    name: 'text',
    title: 'Link Text',
    type: 'string',
    description: 'The text that will be displayed for the link',
  }),
  defineField({
    name: 'url',
    title: 'Outbound URL',
    type: 'string',
    description: 'Supports external links ("https://"), emails ("mailto:"), and phone numbers ("tel:")',
    validation: Rule => Rule.custom(url => {
      if (!url) return true;
      const regex = /^(https?:\/\/|mailto:|tel:)/;
      return regex.test(url) ? true : 'URL must start with "https://", "mailto:", or "tel:"';
    }),
  }),
  defineField({
    name: 'internalPage',
    title: 'Internal Page Reference',
    type: 'reference',
    description: 'If you want to link to an internal page, select the page here.',
    to: [
      { type: 'page' },
      { type: 'blogPost' },
      { type: 'event' },
      { type: 'product' },
    ],
  }),
]; 