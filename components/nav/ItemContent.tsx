import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";

interface ItemContentProps {
  typeOfItem: string;
}

const ItemContent = ({ typeOfItem }: ItemContentProps) => {
  let content: React.ReactNode;

  switch (typeOfItem) {
    case "menu":
      content = (
        <>
          <button className="flex items-center gap-2">
            <AutoAwesomeIcon className="text-indigo-500" />
            Create new tour
          </button>
          <button className="normalButton">Login or Register</button>
          {/* <button className='text-rose-500 flex'>Sign out -{'>'}</button> */}
        </>
      );
      break;
    case "search":
      content = (
        <>
          <div className="flex flex-col gap-2.5">
            <label htmlFor="city">City</label>
            <input
              className="input"
              type="text"
              name="city"
              id="city"
              placeholder="Lisbon, Portugal"
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <label htmlFor="city">Interests</label>
            <button
              className="input flex justify-between "
              name="city"
              id="city"
            >
              Any
              <KeyboardArrowDownIcon />
            </button>
          </div>

          <button className="normalButton mt-2">Search</button>
        </>
      );
      break;
    case "user":
      content = (
        <>
          <div className="flex gap-2 items-center">
            <Image
              className="rounded-full"
              src={"/user.jpg"}
              alt="User image"
              width={35}
              height={35}
            />
            <h1 className="title">User name</h1>
          </div>

          <button className="text-rose-500 flex">Sign out -{">"}</button>
        </>
      );
      break;
  }

  return <>{content}</>;
};

export default ItemContent;
