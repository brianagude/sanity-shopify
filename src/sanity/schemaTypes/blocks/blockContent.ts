import {defineType, defineArrayMember} from 'sanity'

export const blockContent = defineType({
  title: 'Block Content',
  name: 'blockContent',
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
        {title: 'Large Text', value: 'large'},
        {title: 'Small Text', value: 'small'},
        {title: 'Lead Text', value: 'lead'},
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
          {title: 'Highlight', value: 'highlight'},
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
          }
        ],
      },
    }),
  ],
})
