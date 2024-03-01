import { IoPauseSharp, IoPlaySharp, IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from "react-icons/io5";
import { LuClock3, LuHeart, LuRepeat2 } from "react-icons/lu";
import { TiArrowShuffle } from "react-icons/ti";

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
  shuffle: {
    icon: TiArrowShuffle,
    iconColor: "#b3b3b3",
    buttonClassName: "flex items-center justify-center p-1 hover:scale-105 text-default-color hover:text-white",
  },
  skipBack: {
    icon: IoPlaySkipBackSharp,
    iconColor: "#b3b3b3",
    buttonClassName: "flex items-center justify-center p-1 hover:scale-105 text-default-color hover:text-white",
  },
  skipForward: {
    icon: IoPlaySkipForwardSharp,
    iconColor: "#b3b3b3",
    buttonClassName: "flex items-center justify-center p-1 hover:scale-105 text-default-color hover:text-white",
  },
  pause: {
    icon: IoPauseSharp,
    iconColor: "#b3b3b3",
    buttonClassName: "flex items-center justify-center p-1 hover:scale-105 text-black-900 rounded-full",
  },
  repeat: {
    icon: LuRepeat2,
    iconColor: "#b3b3b3",
    buttonClassName: "flex items-center justify-center p-1 hover:scale-105 text-default-color hover:text-white",
  },
};
