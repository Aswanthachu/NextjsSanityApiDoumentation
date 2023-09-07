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
      name: 'subpages',
      title: 'Subpages',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'subpage' }] }],
    },
  ],
};
