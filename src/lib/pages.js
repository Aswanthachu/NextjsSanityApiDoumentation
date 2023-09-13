import { client } from "@/utils/configSanity";

export async function getData() {
  // const revalidate = 60;

  const query = `*[_type == 'page']
    | order(_createdAt asc)
    {
      slug,
      title,
      "subpages": subpages[]->{
        slug,
        title
      }
    }`;
  const data = await client.fetch(query);
  return data;
}

export async function fetchPageData(slug) {
  // const revalidate = 60;

  const query = `*[_type == "page" && slug.current == $slug][0] {
    content,
  }`;
  const data = await client.fetch(query, { slug },{cache:'no-store'});
  return data;
}

export async function getAllPages() {

  const query = `*[_type == 'page']
    {
      slug,
    }`;
  const data = await client.fetch(query);
  return data;
}
