"use client";

import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const SidebarItem = ({ item }) => {
  const [openItem, setOpenItem] = useState("");
  if (item.subpages) {
    return (
      <li className="list-none">
        <Link href={`/${item.slug.current}`}>
          <div className="py-2 rounded-md bg-[#F5FBFF] text-[#556CD6] px-2 font-semibold text-sm mt-1 flex items-center justify-between">
            <p>{item?.title}</p>
            {item?.subpages?.length > 0 && (
              <ChevronDownIcon
                className={`w-4 mt-1 mr-2 font-bold ${
                  openItem === item.slug.current && "rotate-180"
                }`}
                onClick={() => setOpenItem(item.slug.current)}
              />
            )}
          </div>
        </Link>
        <ul>
          {openItem === item.slug.current &&
            item?.subpages?.map((subpage, indx) => (
              <Link
                href={`/${item.slug.current}/${subpage?.slug.current}`}
                key={indx}
              >
                <li className="py-2 rounded-md bg-[#F5FBFF] text-[#556CD6] px-5 font-semibold text-xs mt-1">
                  {subpage?.title}
                </li>
              </Link>
            ))}
        </ul>
      </li>
    );
  } else {
    return (
      <Link href={`/${item.slug.current}`}>
        <p className="py-2 rounded-md bg-[#F5FBFF] text-[#556CD6] px-2 font-semibold text-sm mt-1">
          {item?.title}
        </p>
      </Link>
    );
  }
};

export default SidebarItem;
