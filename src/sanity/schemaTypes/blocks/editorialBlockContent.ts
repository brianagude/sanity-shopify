import {defineType, defineArrayMember} from 'sanity'

export const editorialBlockContent = defineType({
  title: 'Editorial Block Content',
  name: 'editorialBlockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'H5', value: 'h5'},
        {title: 'H6', value: 'h6'},
        {title: 'Quote', value: 'blockquote'},
        {title: 'Pull Quote', value: 'pullQuote'},
        {title: 'Caption', value: 'caption'},
        {title: 'Caption Large', value: 'captionLarge'},
        {title: 'Caption Small', value: 'captionSmall'},
        {title: 'Large Text', value: 'large'},
        {title: 'Small Text', value: 'small'},
        {title: 'Code Block', value: 'code'},
        {title: 'Footnote', value: 'footnote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
        {title: 'Checklist', value: 'check'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike', value: 'strike'},
          {title: 'Code', value: 'code'},
          {title: 'Superscript', value: 'sup'},
          {title: 'Subscript', value: 'sub'},
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
                validation: Rule => Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel']
                })
              },
              {
                name: 'target',
                type: 'string',
                title: 'Target',
                options: {
                  list: [
                    {title: 'Same Window', value: '_self'},
                    {title: 'New Window', value: '_blank'},
                  ],
                },
                initialValue: '_self',
              },
            ]
          },
          {
            name: 'reference',
            type: 'object',
            title: 'Reference',
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [
                  {type: 'product'},
                  {type: 'blogPost'},
                  {type: 'event'},
                ],
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          validation: Rule => Rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'size',
          type: 'string',
          title: 'Size',
          options: {
            list: [
              {title: 'Small', value: 'small'},
              {title: 'Medium', value: 'medium'},
              {title: 'Large', value: 'large'},
              {title: 'Full Width', value: 'fullWidth'},
            ],
          },
          initialValue: 'medium',
        },
        {
          name: 'alignment',
          type: 'string',
          title: 'Alignment',
          options: {
            list: [
              {title: 'Left', value: 'left'},
              {title: 'Center', value: 'center'},
              {title: 'Right', value: 'right'},
            ],
          },
          initialValue: 'center',
        },
      ]
    }),
    defineArrayMember({
      type: 'object',
      name: 'callout',
      title: 'Callout',
      fields: [
        {
          name: 'content',
          type: 'array',
          title: 'Content',
          of: [{type: 'block'}],
        },
        {
          name: 'type',
          type: 'string',
          title: 'Type',
          options: {
            list: [
              {title: 'Info', value: 'info'},
              {title: 'Warning', value: 'warning'},
              {title: 'Success', value: 'success'},
              {title: 'Error', value: 'error'},
              {title: 'Tip', value: 'tip'},
            ],
          },
          initialValue: 'info',
        },
      ],
    }),
    defineArrayMember({
      type: 'object',
      name: 'codeBlock',
      title: 'Code Block',
      fields: [
        {
          name: 'code',
          type: 'text',
          title: 'Code',
        },
        {
          name: 'language',
          type: 'string',
          title: 'Language',
          options: {
            list: [
              {title: 'JavaScript', value: 'javascript'},
              {title: 'TypeScript', value: 'typescript'},
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
              {title: 'JSON', value: 'json'},
              {title: 'Markdown', value: 'markdown'},
            ],
          },
        },
      ],
    }),
  ],
})
