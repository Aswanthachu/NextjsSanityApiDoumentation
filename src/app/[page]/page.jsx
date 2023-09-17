import { PortableText } from "@portabletext/react";

import { fetchPageData, getAllPages } from "@/lib/pages";
import { components } from "@/utils/componentStyle";
import { UrlBox } from "@/components";

const page = async (context) => {
  const pageData = await fetchPageData(context.params.page);

  return (
    <div className=" p-5 w-8/12 overflow-y-auto">
      {!pageData?.content && <h2 className="text-xl font-bold my-3 underline">{pageData?.title}</h2>}
      <PortableText
        value={pageData?.content ? pageData?.content : pageData?.description}
        components={{ ...components }}
      />

      <UrlBox dataToCopy={pageData?.url}/>
    </div>
  );
};

export async function generateStaticParams() {
  const pages = await getAllPages();

  return pages.map((pge) => ({
    page: pge.slug.current.toString(),
  }));
}

export default page;
