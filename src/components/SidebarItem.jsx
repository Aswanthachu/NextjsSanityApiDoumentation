
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const SidebarItem = ({ item,openList,setOpenList }) => {

  const handleOpen=(slug)=>{
    if(openList.includes(slug)){
      setOpenList(prevState=>prevState.filter(itm=>itm !== slug));
    }else{
      setOpenList(prevState=>([
        ...prevState,slug
      ]))
    }
  }
  
  if (item.subpages) {
    return (
      <li className="list-none">
        <Link href={`/${item.slug.current}`}>
          <div className="py-2 rounded-md bg-[#F5FBFF] text-[#556CD6] px-2 font-semibold text-sm mt-1 flex items-center justify-between">
            <p>{item?.title}</p>
            {item?.subpages?.length > 0 && (
              <ChevronDownIcon
                className={`w-4 mt-1 mr-2 font-bold ${
                  openList.includes(item.slug.current) && "rotate-180"
                }`}
                onClick={() => handleOpen(item.slug.current)}
              />
            )}
          </div>
        </Link>
        <ul>
          {openList.includes(item.slug.current) &&
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
