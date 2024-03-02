import React from "react";
import { routes } from "@/constants/route";
import SideBarItem from "@/components/SideBarItem";
import { useLocation } from "react-router-dom";

const SideBar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="rounded-lg bg-black-300 p-3">
        <ul className="flex flex-col gap-y-2">
          {routes.map((route) => {
            return (
              <li key={route.title}>
                <SideBarItem routeItem={route} label={route.title} selected={location.pathname === route.path} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex h-full rounded-lg bg-black-300"></div>
    </div>
  );
};

export default SideBar;
