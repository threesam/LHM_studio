export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  __experimental_actions: ['update', /*'create', 'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'about',
      type: 'blockContent',
      title: 'About'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Image'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'tags',
    },
    {
      name: 'contact',
      type: 'contactInfo'
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'text'
    },
    {
      name: 'founders',
      type: 'array',
      title: 'Founders',
      of: [{ type: 'reference', to: [{ type: 'editor' }] }]
    }
  ]
}
