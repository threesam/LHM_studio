export default {
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'object',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'url'
    },
    {
      name: 'socials',
      title: 'Social Media Handles',
      type: 'array',
      of: [{ type: 'url' }]
    },
    {
      name: 'mobile',
      title: 'Mobile',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text'
    }
  ]
}