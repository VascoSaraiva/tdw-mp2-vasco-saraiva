"use client";

import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const CopyLink = ({ id }: { id: string }) => {
  let [isCopied, setIsCopied] = useState(false);

  let copyLink: string;

  if (process.env.VERCEL_URL) {
    copyLink = "https://" + process.env.VERCEL_URL + "/tour/" + id;
  } else {
    copyLink = "http://localhost:3000" + "/tour/" + id;
  }

  function handleClick() {
    navigator.clipboard.writeText(copyLink);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  }

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
};

export default CopyLink;
