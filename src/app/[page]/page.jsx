import { PortableText } from "@portabletext/react";

import { fetchPageData, getAllPages } from "@/lib/pages";
import { components } from "@/utils/componentStyle";
import { Tooltip } from "@/components";

const page = async (context) => {
  const pageData = await fetchPageData(context.params.page);

  return (
    <div className=" p-5 w-8/12">
      {!pageData.content && <h2 className="text-xl font-bold my-3 underline">{pageData.title}</h2>}
      <PortableText
        value={pageData.content ? pageData.content : pageData.description}
        components={{ ...components }}
      />

      <div className="rounded-lg  bg-[#3c4257] w-1/2 text-[#c1c9d2]">
        <div className="border-b px-5 py-2 text-sm font-semibold flex justify-between hover:cursor-pointer">
          <p>Base URL</p>
          <div >
            <Tooltip  dataToCopy={pageData.url}/>
          </div>
        </div>
        <div className="px-5 py-2 overflow-x-auto font-semibold bg-[#4f566b] no-scrollbar rounded-b-lg">{pageData.url}</div>
      </div>
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
