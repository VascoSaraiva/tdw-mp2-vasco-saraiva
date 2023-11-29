import MenuItem from "./MenuItem";
import SearchItem from "./SearchItem";
import UserItem from "./UserItem";

const Navbar = () => {

  return (
    <nav>
      <MenuItem />
      <div className="flex items-center justify-between gap-[16px]">
        <SearchItem />
        <UserItem />
      </div>
    </nav>
  );
};

export default Navbar;
