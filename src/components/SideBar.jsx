import { BoltIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import { client } from "@/utils/configSanity";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'page']
  | order(_createdAt asc)
  {
    title,
    "subpageTitles": subpages[]->{
      title
    }
  }`;
  const data = await client.fetch(query);
  return data;
}

const SideBar = async () => {
  const data = await getData();
  console.log(data);
  return (
    <section className="w-[250px] border-r border-gray-300 h-screen flex flex-col">
      <div className="flex items-center gap-2 font-bold p-5">
        <h1 className="text-2xl text-gray-600">KKS</h1>
        <span className="text-xl text-blue-400">API</span>
        <h2 className="text-lg">Docs</h2>
        <BoltIcon className="w-4 text-gray-400" />
      </div>
      <div className="p-4 flex-grow">
        <ul >
          {data?.map((item, index) => (
            <Link href={'/user'}>
              <li
                className="py-2 rounded-md bg-[#F5FBFF] text-[#556CD6] px-2 font-semibold text-sm mt-1"
                key={index}
              >
                {item?.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="top-auto border-t w-full px-5 py-2 border-gray-300">
        <Button className="bg-inherit text-[#556CD6] hover:bg-inherit flex justify-center gap-2">
          <p>Sign In</p> <ArrowLongRightIcon className="w-5 mt-1" />
        </Button>
      </div>
    </section>
  );
};

export default SideBar;
