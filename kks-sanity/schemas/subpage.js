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
          name: 'parameter',
          title: 'Parameter',
          type: 'document',
          fields: [
            {
              name: 'parameter_name',
              title: 'Parameter Name',
              type: 'string',
            },
            {
              name: 'type',
              title: 'Parameter Type',
              type: 'string',
              initialValue: 'string',
              options: {
                list: [
                  {title: 'string', value: 'string'},
                  {title: 'number', value: 'number'},
                  {title: 'Mongoose ObjectId', value: 'Mongoose ObjectId'},
                ],
              },
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'middlewares',
      Title: 'Middlewares',
      type: 'array',
      of: [
        {
          name: 'middleware',
          title: 'Middleware',
          type: 'document',
          fields: [
            {
              name: 'middleware_name',
              title: 'Middleware Name',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'responses',
      title: 'Responses',
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
              name: 'responseData',
              title: 'Response Data',
              type: 'array',
              of: [
                {
                  name: 'responsemessageimage',
                  title: 'Response Message and Example',
                  type: 'document',
                  fields: [
                    {
                      name: 'responseMessage',
                      title: 'Response Message',
                      type: 'string',
                    },
                    {
                      name: 'reason',
                      title: 'Reason',
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
        },
      ],
    },
  ],
}
