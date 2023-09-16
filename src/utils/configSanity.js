import { createClient } from "next-sanity";

// const PROJECT_ID = process.env.PROJECT_ID
// const DATASET = process.env.DATASET


export const client = createClient({
//   projectId: PROJECT_ID,
//   dataset: DATASET,
  projectId: '3bjwcw6a',
  dataset: 'production',
  apiVersion: "2021-10-21",
  useCdn: true,
});
