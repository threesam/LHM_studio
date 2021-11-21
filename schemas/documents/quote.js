export default {
  name: 'quote',
  type: 'document',
  title: 'Quote',
  fields: [
    {
      name: 'text',
      type: 'text',
      title: 'Text',
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author'
    },
    {
      name: 'color',
      type: 'color'
    }
  ]
}