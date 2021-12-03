export default {
  name: 'banner',
  type: 'document',
  title: 'Banner',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { value: 'white', title: 'White' },
          { value: 'black', title: 'Black' },
          { value: 'darkBlue', title: 'Dark Blue' }
        ]
      }
    },
    {
      name: 'size',
      description: 'Choose only one',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { value: 'full', title: 'Full' },
          { value: 'half', title: 'Half' },
          { value: 'thirds', title: 'Two Thirds' }
        ]
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'mainImage'
    },
    {
      name: 'video',
      type: 'file',
      title: 'Video',
      description: 'Will override image if set.'
    },
    {
      title: 'CTA',
      name: 'cta',
      type: 'cta'
    }
  ]
}