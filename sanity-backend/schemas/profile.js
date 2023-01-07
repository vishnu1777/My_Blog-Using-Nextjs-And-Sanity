export default {
  name: 'profile',
  type: 'document',
  title: 'Profile',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },

    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      title: 'FaceBook Url',
      name: 'fburl',
      type: 'url',
    },
    {
      title: 'Twitter Url',
      name: 'twitterurl',
      type: 'url',
    },
    {
      title: 'Instagram Url',
      name: 'instaurl',
      type: 'url',
    },
    {
      title: 'Status',
      name: 'status',
      type: 'string',
    },
    {
      name: 'intro',
      title: 'Your Breif Introduction',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
                    be they blind, color-blind, low-sighted; 
                    alternative text is of great help for those 
                    people that can rely on it to have a good idea of 
                    what\'s on your page.`,
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
