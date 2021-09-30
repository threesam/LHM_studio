export default {
  name: 'editor',
  title: 'Editor',
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
      name: 'bio',
      title: 'Bio',
      type: 'blockContent'
    },
    {
      name: 'contact',
      type: 'contactInfo'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
