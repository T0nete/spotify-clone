import React from "react";
import { routes } from "../constants/route";
import SideBarItem from "./SideBarItem";
import { useLocation } from "react-router-dom";

const SideBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="bg-black-300 rounded-lg p-6">
        <ul className="flex flex-col gap-y-4">
          {routes.map((route) => {
            return (
              <SideBarItem
                key={route.title}
                routeItem={route}
                label={route.title}
                selected={location.pathname === route.path}
              />
            );
          })}
        </ul>
      </div>
      <div className="bg-black-300 flex h-full rounded-lg"></div>
    </div>
  );
};

export default SideBar;
