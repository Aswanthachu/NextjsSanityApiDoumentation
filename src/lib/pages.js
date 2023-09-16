import { client } from "@/utils/configSanity";

export async function getData() {
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
  const data = await client.fetch(query, { cache: "no-store" });
  return data;
}

export async function fetchPageData(slug) {
  const query = `*[_type == "page" && slug.current == $slug][0] {
    title,
    content,
    description,
    url
  }`;
  const data = await client.fetch(query, { slug }, { cache: "no-store" });
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

export async function getAllSubPages() {
  const query = `*[_type == 'subpage']
    {
      slug,
    }`;
  const data = await client.fetch(query);
  return data;
}

export async function getSubPageData({ pageSlug, subpageSlug }) {
  const query = `*[_type == 'subpage' &&  slug.current == $subpageSlug][0]
    {
      slug,
      title,
      description,
      method,
      url,
      parameters,
      middlewares,
      responses
    }`;

  //references(*[_type == 'page' && slug.current == $pageSlug]._id) &&

  const data = await client.fetch(
    query,
    { subpageSlug },
    { cache: "no-store" }
  );

  return data;
}
