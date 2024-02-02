import React from "react";
import { IconType } from "react-icons";

interface SideBarItemProps {
  key: string;
  icon: IconType;
  label: string;
}
const SideBarItem: React.FC<SideBarItemProps> = ({
  key,
  icon: Icon,
  label,
}) => {
  return (
    <li
      key={key}
      className="flex cursor-pointer flex-row items-center gap-x-4 rounded-lg p-2 text-[#B3B3B3] transition-all duration-500 ease-linear hover:text-white"
    >
      <Icon size={32} />
      <p className="text-lg font-semibold">{label}</p>
    </li>
  );
};

export default SideBarItem;
