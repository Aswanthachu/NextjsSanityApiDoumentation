import { Tooltip } from ".";

const UrlBox = ({dataToCopy}) => {
  return (
    <div className="rounded-lg  bg-[#3c4257] w-1/2 text-[#c1c9d2] mt-5">
      <div className="border-b px-5 py-2 text-sm font-semibold flex justify-between hover:cursor-pointer">
        <p>Base URL</p>
        <div>
          <Tooltip dataToCopy={dataToCopy} />
        </div>
      </div>
      <div className="px-5 py-2 overflow-x-auto font-semibold bg-[#4f566b] no-scrollbar rounded-b-lg">
        {dataToCopy}
      </div>
    </div>
  );
};

export default UrlBox;
