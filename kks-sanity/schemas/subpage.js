// schemas/page.js
export default {
  name: 'subpage',
  title: 'SubPage',
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
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'method',
      title: 'Method',
      type: 'string',
      initialValue: 'GET',
      options: {
        list: [
          {title: 'GET', value: 'GET'},
          {title: 'POST', value: 'POST'},
          {title: 'PATCH', value: 'PATCH'},
          {title: 'DELETE', value: 'DELETE'},
          {title: 'PUT', value: 'PUT'},
        ],
      },
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
    },
    {
      name: 'parameters',
      Title: 'Parameters',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'statusCodes',
      title: 'Status Codes',
      type: 'array',
      of: [
        {
          name: 'apiStatusCode',
          title: 'API Status Code',
          type: 'document',
          fields: [
            {
              name: 'statusCode',
              title: 'Status Code',
              type: 'number',
            },
            {
              name: 'responseMessage',
              title: 'Response Message',
              type: 'string',
            },
            {
              name: 'images',
              title: 'Images',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
  ],
}
