export default {
  name: 'howItWorks',
  title: 'How It Works',
  type: 'document',
  fields: [
    {
      name: 'host',
      title: 'Host',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'guest',
      title: 'Guest',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
