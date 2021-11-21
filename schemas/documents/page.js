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
      name: 'banner',
      type: 'reference',
      title: 'Banner',
      to: [{ type: 'banner' }]
    },
    {
      name: 'quote',
      type: 'reference',
      title: 'Quote',
      to: [{ type: 'quote' }]
    },
    {
      name: 'textBlock',
      type: 'reference',
      title: 'Text Block',
      to: [
        { type: 'textBlock' }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}