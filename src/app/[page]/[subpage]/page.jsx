import { getAllSubPages, getSubPageData } from "@/lib/pages";
import { PortableText } from "@portabletext/react";
import { components } from "@/utils/componentStyle";
import { UrlBox } from "@/components";
import  urlFor  from "@/utils/ImageBuilder";
import Image from "next/image";

const page = async ({ params }) => {

  const pageData = await getSubPageData({
    pageSlug: params.page,
    subpageSlug: params.subpage,
  });

  return (
    <section className="p-5 w-8/12 overflow-y-auto">
      <h1 className="underline text-lg font-semibold mb-2">
        {pageData.title} Controller
      </h1>
      <PortableText
        value={pageData.content ? pageData.content : pageData.description}
        components={{ ...components }}
      />
      <h1 className="mt-5 font-semibold">Method : <span className="text-orange-500 text-xl font-bold">{pageData.method}</span></h1>
      <UrlBox dataToCopy={pageData.url} />
      {pageData.parameters && (
        <div className="mt-5">
          <p className="underline font-semibold mb-4">Parameters Used</p>
          <ol className=" list-decimal px-5">
            {pageData.parameters.map((param, index) => (
              <li key={index} className="">
                <div>
                  <h5 className="font-semibold mb-1 flex">
                    <p className="underline mr-1">{param.parameter_name} </p>(<span className="text-blue-600 ">{param.type}</span>)
                  </h5>
                  <p>{param.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
      {pageData.middlewares && (
        <div className="mt-5">
          <p className="underline font-semibold mb-4">Middlewares Used</p>
          <ul className=" list-disc px-5">
            {pageData.middlewares.map((param, index) => (
              <li key={index} className="">
                <div>
                  <h5 className="font-semibold underline mb-1">
                    {param.middleware_name}
                  </h5>
                  <p>{param.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {pageData.responses && (
        <div className="mt-5">
          <p className="underline font-semibold mb-4">Responses</p>
          <ul className="list-disc px-5">
            {pageData.responses.map((resp, index) => (
              <li key={index}>
                <div className="my-3 space-y-3">
                  <h5 className={`${(typeof resp.statusCode === "number" && resp.statusCode >= 200 && resp.statusCode < 300 )? "text-green-400" :"text-red-600"} text-xl font-semibold`}>{resp.statusCode}</h5>
                  <ol className="list-decimal  px-3 space-y-5">
                  {
                    resp.responseData.map((respData,indx)=>(
                      <li key={indx} className="space-y-3">
                        <p className=" font-bold">{respData.responseMessage}</p>
                        {respData.reason && <p><span className="font-semibold">Reason</span> : {respData.reason}</p>}
                        <Image src={urlFor(respData.images.asset._ref)} alt="statusExample" height={400} width={700} />
                      </li>
                    ))
                  }
                  </ol>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

// export async function generateStaticParams() {
//   const pages = await getAllSubPages();

//   return pages.map((pge) => ({
//     subpage: pge?.slug?.current.toString(),
//   }));
// }

export default page;
