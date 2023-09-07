export default {
  name: 'pet',
  type: 'document',
  title: 'Pet',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
