export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Short and sweet description of the service'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
      description: 'Case Study'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}