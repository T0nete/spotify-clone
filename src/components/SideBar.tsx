import React from "react";
import { routes } from "@/constants/route";
import SideBarItem from "@/components/SideBarItem";
import { Link, useLocation, useParams } from "react-router-dom";
import { LuLibrary } from "react-icons/lu";
import { IoAddOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import { playlist } from "@/constants/playlist";

const SideBar: React.FC = () => {
  const location = useLocation();
  const { id } = useParams();

  console.log("id", id);

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
      <div className="flex h-full flex-col overflow-hidden rounded-lg bg-black-300 ">
        <div className="sticky top-0 z-10 flex gap-x-2 bg-black-300 px-6 py-4">
          <div className="flex flex-1 flex-row gap-x-2">
            <LuLibrary size={24} />
            <p className="text-md font-semibold">Your Library</p>
          </div>
          <IoAddOutline size={24} />
          <GoArrowRight size={24} />
        </div>
        <div className="mt-2 flex flex-col overflow-y-auto">
          {playlist.map((item) => {
            return (
              <Link
                key={`${item.id}_${item.title}`}
                to={`/playlist/${item.id}`}
                className={`hover:bg-black-50 flex flex-row items-center rounded-lg hover:cursor-pointer ${id === item.id ? "bg-black-100" : ""}`}
              >
                <div className=" flex flex-row gap-x-2 rounded-md px-6 py-2 hover:cursor-pointer">
                  <img src={item.cover} alt={item.title} className="h-12 w-12 rounded-md" />
                  <div className="flex flex-col justify-center">
                    <p className="text-md">{item.title}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
