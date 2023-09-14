"use client";
import { useState } from "react";
import { SidebarItem } from ".";

const SidebarMenu = ({data}) => {
  const [openList, setOpenList] = useState([]);

  return (
    <div className="p-4 flex-grow">
      {data?.map((item, index) => (
        <SidebarItem
          key={index}
          item={item}
          openList={openList}
          setOpenList={setOpenList}
        />
      ))}
    </div>
  );
};

export default SidebarMenu;
