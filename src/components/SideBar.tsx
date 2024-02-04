import React from "react";
import { routes } from "../constants/route";
import SideBarItem from "./SideBarItem";
// import { useNavigation } from "react-router-dom";

const SideBar: React.FC = () => {
  //   const navigate = useNavigation();
  //   console.log("navigate.name", navigate.location);

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="rounded-lg bg-[#121212] p-6 text-white">
        <ul className="flex flex-col gap-y-4">
          {routes.map((route) => {
            return (
              <SideBarItem
                key={route.title}
                icon={route.icon}
                label={route.title}
                selected={false}
              />
            );
          })}
        </ul>
      </div>
      <div className="flex h-full rounded-lg bg-[#121212]"></div>
    </div>
  );
};

export default SideBar;
