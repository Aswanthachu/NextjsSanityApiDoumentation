import { fetchPageData } from "@/lib/pages";
import { components } from "@/utils/componentStyle";
import { PortableText } from "@portabletext/react";

const page = async (context) => {
  const pageData = await fetchPageData(context.params.page);

  return (
    <div className=" p-5 w-8/12">
      <PortableText value={pageData.content} components={{ ...components }} />
    </div>
  );
};

export default page;
