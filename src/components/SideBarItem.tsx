import React from "react";
import { Link } from "react-router-dom";
import { Route } from "../constants/route";

interface SideBarItemProps {
  routeItem: Route;
  label: string;
  selected: boolean;
}
const SideBarItem: React.FC<SideBarItemProps> = ({ routeItem, label, selected }) => {
  return (
    <Link to={routeItem.path}>
      <li
        className={`flex cursor-pointer flex-row  items-center gap-x-4 rounded-lg p-2 ${selected && "text-white"}  duration-400 transition-all ease-linear hover:text-white`}
      >
        <routeItem.icon size={32} />
        <p className="text-lg font-semibold">{label}</p>
      </li>
    </Link>
  );
};

export default SideBarItem;
