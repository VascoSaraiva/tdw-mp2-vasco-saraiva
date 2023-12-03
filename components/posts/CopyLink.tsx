"use client";

import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const CopyLink = ({ id }: { id: number }) => {
  let [isCopied, setIsCopied] = useState(false);

  let copyLink: string = process.env.NEXT_PUBLIC_VERCEL_URL + "/tour/" + id;
  

  function handleClick() {
    navigator.clipboard.writeText(copyLink);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  }

  if(id){
    return (
      <>
        {!isCopied ? (
          <ShareIcon
            onClick={handleClick}
            className="text-black cursor-pointer"
          />
        ) : (
          <div className="flex gap-1 items-center text-indigo-500 bg-indigo-100 py-2 px-3 rounded-full">
            <CheckCircleOutlinedIcon fontSize="small" />
            <p className="font-semibold text-sm cursor-default">Link Copiado</p>
          </div>
        )}
      </>
    );
  }
  
};

export default CopyLink;
