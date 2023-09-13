"use client";

import { ClipboardIcon } from "@heroicons/react/24/solid";

import copy from "copy-to-clipboard";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";

const CustomTooltip = ({ dataToCopy }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    copy(dataToCopy);
    setCopied(true);
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <ClipboardIcon className="w-5" onClick={handleCopy} />
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">{copied ? "Copied!" : "Copy URL"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CustomTooltip;
