import {defineType, defineArrayMember} from 'sanity'

export const simpleBlockContent = defineType({
  title: 'Simple Block Content',
  name: 'simpleBlockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        
        {title: 'Normal', value: 'normal'},
        {title: 'Large Text', value: 'large'},
        {title: 'Small Text', value: 'small'},
        {title: 'Lead Text', value: 'lead'},
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
