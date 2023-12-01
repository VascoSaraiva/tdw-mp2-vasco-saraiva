"use client";

import { Menu } from "@headlessui/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

const SearchItem = () => {
  return (
    <Menu>
      <Menu.Button className="focus:outline-none flex items-center">
        <SearchIcon />
      </Menu.Button>

      <Menu.Items className="modal">
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
          <button className="input flex justify-between " name="city" id="city">
            Any
            <KeyboardArrowDownIcon />
          </button>
        </div>

        <Menu.Item>
          <button className="normalButton mt-2">Search</button>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default SearchItem;
