import { defineField, SchemaTypeDefinition } from 'sanity'

export const collectionNavigation: SchemaTypeDefinition = {
  name: 'collectionNavigation',
  title: 'Collection Navigation',
  type: 'object',
  fields: [
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Sidebar', value: 'sidebar' },
          { title: 'Top Bar', value: 'topBar' },
          { title: 'Drawer', value: 'drawer' },
        ],
      },
      initialValue: 'sidebar',
    }),
    defineField({
      name: 'showCategoryTree',
      title: 'Show Category Tree',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'maxDepth',
      title: 'Maximum Category Depth',
      type: 'number',
      options: {
        list: [
          { title: '1 Level', value: 1 },
          { title: '2 Levels', value: 2 },
          { title: '3 Levels', value: 3 },
        ],
      },
      initialValue: 2,
      hidden: ({ parent }) => !parent?.showCategoryTree,
    }),
    defineField({
      name: 'showProductCount',
      title: 'Show Product Count',
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
        { label: 'Featured', value: 'featured' },
        { label: 'Best Selling', value: 'best-selling' },
        { label: 'Price: Low to High', value: 'price-asc' },
        { label: 'Price: High to Low', value: 'price-desc' },
        { label: 'Newest', value: 'newest' },
      ],
      hidden: ({ parent }) => !parent?.showSortOptions,
    }),
    defineField({
      name: 'defaultSort',
      title: 'Default Sort',
      type: 'string',
      initialValue: 'featured',
      hidden: ({ parent }) => !parent?.showSortOptions,
    }),
    defineField({
      name: 'showActiveFilters',
      title: 'Show Active Filters',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showClearFilters',
      title: 'Show Clear Filters',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showMobileFilters',
      title: 'Show Mobile Filters',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'mobileFilterPosition',
      title: 'Mobile Filter Position',
      type: 'string',
      options: {
        list: [
          { title: 'Drawer', value: 'drawer' },
          { title: 'Bottom Sheet', value: 'bottomSheet' },
          { title: 'Full Screen', value: 'fullScreen' },
        ],
      },
      initialValue: 'drawer',
      hidden: ({ parent }) => !parent?.showMobileFilters,
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
      name: 'showResultsCount',
      title: 'Show Results Count',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'showBreadcrumbs',
      title: 'Show Breadcrumbs',
      type: 'boolean',
      initialValue: true,
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
        title: 'Collection Navigation',
        subtitle: `${layout} layout`,
      }
    },
  },
}
