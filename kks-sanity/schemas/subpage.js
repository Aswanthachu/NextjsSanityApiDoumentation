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
        name:'slug',
        title:'Slug',
        type:'slug'
      },
      {
        name : "name",
        title:'Name',
        type:"string"
      },
      // {
      //   name : "Content",
      //   title:'Name',
      //   type:"string"
      // }
    ],
  };
  