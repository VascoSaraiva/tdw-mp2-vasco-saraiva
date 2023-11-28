"use client";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Item from "./ModalItems";
import MenuIcon from "@mui/icons-material/Menu";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ItemContent from "./ItemContent";

const Navbar = () => {
  return (
    <nav>
      <Item icon={<MenuIcon />} content={<ItemContent typeOfItem={"menu"} />} />

      <div className="flex items-center justify-between gap-[16px]">
        <Item
          icon={<SearchIcon />}
          content={<ItemContent typeOfItem={"search"} />}
        />

        <Item
          icon={<PersonOutlineIcon />}
          content={<ItemContent typeOfItem={"user"} />}
        />
      </div>
    </nav>
  );
};

export default Navbar;
