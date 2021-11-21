export default {
  name: 'cta',
  type: 'object',
  title: 'Call to Action',
  fields: [
    {
      title: 'Title',
      type: 'string',
      name: 'title',
      description: 'Use descriptive title like "Read description" rather than something generic like "Learn more"'
    },
    {
      name: 'link',
      type: 'object',
      title: 'External link',
      fields: [
        {
          name: 'href',
          type: 'url',
          title: 'URL'
        },
        {
          title: 'Open in new tab',
          name: 'blank',
          type: 'boolean'
        }
      ]
    },
    {
      name: 'internalLink',
      type: 'object',
      title: 'Internal link',
      fields: [
        {
          name: 'reference',
          type: 'reference',
          title: 'Reference',
          to: [
            { type: 'page' },
            { type: 'pamphlet' },
            { type: 'service' }
          ]
        }
      ]
    },
    {
      name: 'color',
      type: 'color'
    }
  ]
}