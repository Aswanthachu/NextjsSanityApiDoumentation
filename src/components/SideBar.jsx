"use client";

import { BoltIcon, ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import { SidebarItem } from ".";
import { getData } from "@/lib/pages";
import { useEffect, useState } from "react";

const SideBar =() => {

  const [data,setData]=useState([]);
  const [openList,setOpenList]=useState([]);

  useEffect(() => {
    async function get() {
      const dataFromDb = await getData();
      setData(dataFromDb);
    }
    get();
  }, []);

  return (
    <section className="w-[250px] border-r border-gray-300 h-screen flex flex-col">
      <div className="flex items-center gap-2 font-bold p-5">
        <h1 className="text-2xl text-gray-600">KKS</h1>
        <span className="text-xl text-blue-400">API</span>
        <h2 className="text-lg">Docs</h2>
        <BoltIcon className="w-4 text-gray-400" />
      </div>
      <div className="p-4 flex-grow">
        {data?.map((item, index) => (
          <SidebarItem key={index} item={item} openList={openList} setOpenList={setOpenList}/>
        ))}
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
