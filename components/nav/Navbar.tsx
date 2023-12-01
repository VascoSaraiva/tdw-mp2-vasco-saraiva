import MenuItem from "./MenuItem";
import SearchItem from "./SearchItem";
import UserItem from "./UserItem";

const Navbar = () => {
  return (
    <div className="navbar">
      <MenuItem />
      <div className="flex items-center justify-between gap-[18px]">
        <SearchItem />
        <UserItem />
      </div>
    </div>
  );
};

export default Navbar;
