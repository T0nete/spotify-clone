import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IconType } from "react-icons";

export interface Route {
  path: string;
  title: string;
  icon: IconType;
}
export const routes: Route[] = [
  {
    path: "/",
    title: "Home",
    icon: MdHomeFilled,
  },
  {
    path: "/search",
    title: "Search",
    icon: CiSearch,
  },
];
