export default {
  name: 'textBlock',
  title: 'Text Block',
  type: 'document',
  fields: [
    {
      title: 'Title',
      type: 'string',
      name: 'title',
      description: 'For referential purposes only - not rendered on the site'
    },
    {
      name: 'text',
      type: 'blockContent',
      title: 'Text'
    },
    {
      type: 'mainImage',
      name: 'image',
      title: 'Background Image'
    },
    {
      type: 'color',
      name: 'color'
    }
  ]
}