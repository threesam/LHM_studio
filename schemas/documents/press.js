export default {
  name: 'press',
  title: 'Press',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Publication Title',
      type: 'string'
    },
    {
      name: 'reviewer',
      title: 'Review Author',
      type: 'string'
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Published At'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    }
  ]
}