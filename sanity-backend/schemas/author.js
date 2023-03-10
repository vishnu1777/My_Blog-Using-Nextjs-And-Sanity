export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'desc',
      type: 'string',
      title: 'About',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}
