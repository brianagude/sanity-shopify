import { defineField, SchemaTypeDefinition } from 'sanity'

export const search: SchemaTypeDefinition = {
  name: 'search',
  title: 'Search',
  type: 'document',
  fields: [
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Full Page', value: 'fullPage' },
          { title: 'Drawer', value: 'drawer' },
          { title: 'Modal', value: 'modal' },
        ],
      },
      initialValue: 'fullPage',
    }),
    defineField({
      name: 'searchPlaceholder',
      title: 'Search Placeholder',
      type: 'string',
      initialValue: 'Search products...',
    }),
    defineField({
      name: 'showSearchIcon',
      title: 'Show Search Icon',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showClearButton',
      title: 'Show Clear Button',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showFilters',
      title: 'Show Filters',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'filterOptions',
      title: 'Filter Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Filter Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'type',
              title: 'Filter Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Price Range', value: 'price' },
                  { title: 'Vendor', value: 'vendor' },
                  { title: 'Product Type', value: 'productType' },
                  { title: 'Tags', value: 'tags' },
                  { title: 'Availability', value: 'availability' },
                  { title: 'Rating', value: 'rating' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'defaultValue',
              title: 'Default Value',
              type: 'string',
              description: 'Optional: Set a default value for this filter',
            },
          ],
        },
      ],
      hidden: ({ parent }) => !parent?.showFilters,
    }),
    defineField({
      name: 'showSortOptions',
      title: 'Show Sort Options',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'sortOptions',
      title: 'Sort Options',
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
          ],
        },
      ],
      initialValue: [
        { label: 'Relevance', value: 'relevance' },
        { label: 'Price: Low to High', value: 'price-asc' },
        { label: 'Price: High to Low', value: 'price-desc' },
        { label: 'Newest', value: 'newest' },
        { label: 'Best Selling', value: 'best-selling' },
      ],
      hidden: ({ parent }) => !parent?.showSortOptions,
    }),
    defineField({
      name: 'defaultSort',
      title: 'Default Sort',
      type: 'string',
      initialValue: 'relevance',
      hidden: ({ parent }) => !parent?.showSortOptions,
    }),
    defineField({
      name: 'showResultsCount',
      title: 'Show Results Count',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showPagination',
      title: 'Show Pagination',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'productsPerPage',
      title: 'Products Per Page',
      type: 'number',
      options: {
        list: [
          { title: '12', value: 12 },
          { title: '24', value: 24 },
          { title: '36', value: 36 },
          { title: '48', value: 48 },
        ],
      },
      initialValue: 12,
      hidden: ({ parent }) => !parent?.showPagination,
    }),
    defineField({
      name: 'showSuggestions',
      title: 'Show Search Suggestions',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'suggestionTypes',
      title: 'Suggestion Types',
      type: 'array',
      of: [
        {
          type: 'string',
          options: {
            list: [
              { title: 'Products', value: 'products' },
              { title: 'Collections', value: 'collections' },
              { title: 'Articles', value: 'articles' },
              { title: 'Pages', value: 'pages' },
            ],
          },
        },
      ],
      initialValue: ['products', 'collections'],
      hidden: ({ parent }) => !parent?.showSuggestions,
    }),
    defineField({
      name: 'showRecentSearches',
      title: 'Show Recent Searches',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'maxRecentSearches',
      title: 'Max Recent Searches',
      type: 'number',
      options: {
        list: [
          { title: '3', value: 3 },
          { title: '5', value: 5 },
          { title: '10', value: 10 },
        ],
      },
      initialValue: 5,
      hidden: ({ parent }) => !parent?.showRecentSearches,
    }),
    defineField({
      name: 'showPopularSearches',
      title: 'Show Popular Searches',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'popularSearches',
      title: 'Popular Searches',
      type: 'array',
      of: [{ type: 'string' }],
      hidden: ({ parent }) => !parent?.showPopularSearches,
    }),
    defineField({
      name: 'noResultsMessage',
      title: 'No Results Message',
      type: 'blockContent',
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
        title: 'Search',
        subtitle: `${layout} layout`,
      }
    },
  },
}
