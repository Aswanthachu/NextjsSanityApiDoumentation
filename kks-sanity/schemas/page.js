// schemas/page.js

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name:'slug',
      title:'Slug',
      type:'slug'
    },

    {
      name:'description',
      title:'Description',
      type:'array',
      of: [{type: 'block'}]
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
    },
    {
      name:'content',
      title:'Content',
      type:'array',
      of: [{type: 'block'}]
    },
    {
      name: 'subpages',
      title: 'Subpages',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'subpage' }] }],
    },
  ],
};
