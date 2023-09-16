import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
  projectId: '3bjwcw6a',
  dataset: 'production',
  // projectId: process.env.PROJECT_ID,
  // dataset: process.env.DATASET,
  baseUrl: "https://cdn.sanity.io",
});

const urlFor = (source) =>
  builder.image(source)
  .auto("format").fit("max").width(720).toString();

export default urlFor