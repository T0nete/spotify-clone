import { IoPlaySharp } from "react-icons/io5";

interface PlayButtonProps {
  buttonSize?: "sm" | "md" | "lg";
  iconSize?: "sm" | "md" | "lg";
  onClick: () => void;
}
const PlayButton: React.FC<PlayButtonProps> = ({ buttonSize = "sm", iconSize = "sm", onClick }) => {
  const sizeButton = buttonSize === "sm" ? "h-4 w-4" : buttonSize === "md" ? "h-8 w-8" : "h-14 w-14";
  const sizeIcon = iconSize === "sm" ? 8 : iconSize === "md" ? 16 : 24;

  return (
    <button
      className={`${sizeButton} flex items-center justify-center rounded-full bg-[#1fdf64] p-2 hover:scale-105`}
      onClick={onClick}
    >
      <IoPlaySharp color="black" size={sizeIcon} className="ml-1" />
    </button>
  );
};

export default PlayButton;
