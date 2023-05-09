export default {
  name: 'icons',
  title: 'Icons',
  type: 'document',
  fields: [
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
    {
      name: 'altText',
      title: 'Alt Text',
      type: 'string',
    },
  ],
}
