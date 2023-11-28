import { Popover } from "@headlessui/react";

interface MenuProps {
  icon: any;
  content: React.ReactNode;
}

const Item = ({ icon, content }: MenuProps) => {
  return (
    <Popover>
      <Popover.Button className="focus:outline-none">{icon}</Popover.Button>

      <Popover.Panel className="modal">{content}</Popover.Panel>
    </Popover>
  );
};

export default Item;
