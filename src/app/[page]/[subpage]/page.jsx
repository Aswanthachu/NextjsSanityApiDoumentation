import { getAllSubPages, getSubPageData } from "@/lib/pages";

const page = async ({ params }) => {
  const pageData = await getSubPageData({
    pageSlug: params.page,
    subpageSlug: params.subpage,
  });
  return <section className="p-5 w-8/12">page</section>;
};

export async function generateStaticParams() {
  const pages = await getAllSubPages();

  return pages.map((pge) => ({
    subpage: pge?.slug?.current.toString(),
  }));
}

export default page;
