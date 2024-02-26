import { IoPlaySharp } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";

export const buttonsDefinitions = {
  play: {
    icon: IoPlaySharp,
    iconColor: "black",
    buttonClassName: "flex items-center justify-center text-black-900 rounded-full bg-[#1fdf64] p-2 hover:scale-105",
  },
  heart: {
    icon: LuHeart,
    iconColor: "#b3b3b3",
    buttonClassName: "flex items-center justify-center p-2 hover:scale-105 text-default-color hover:text-white",
  },
};
