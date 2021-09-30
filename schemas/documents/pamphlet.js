export default {
  name: 'pamphlet',
  title: 'Pamphlet',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Publication Title',
      type: 'string'
    },
    {
      name: 'image',
      type: 'mainImage'
    },
    {
      name: 'date',
      type: 'datetime',
      title: 'Published At'
    },
    {
      name: 'description',
      title: 'description',
      type: 'text'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    },
    {
      name: 'file',
      title: 'File',
      type: 'file'
    }
  ]
}