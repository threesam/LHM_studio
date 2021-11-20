export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Banner Image',
      type: 'mainImage'
    },
    {
      name: 'description',
      title: 'Page Description',
      type: 'text'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}