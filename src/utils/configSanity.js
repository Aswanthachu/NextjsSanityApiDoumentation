import { createClient } from "next-sanity";

export const client = createClient({
  projectId: '4iobo6mp',
  dataset: 'production',
  // projectId: `${process.env.PROJECT_ID}`,
  // dataset: `${process.env.DATASET}`,
  apiVersion: "2021-10-21",
  useCdn: true,
});
