export default {
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Phone No',
      name: 'phoneNo',
      type: 'number',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'text',
    },
  ],
}
