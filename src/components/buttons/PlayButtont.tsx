import { IoPlaySharp } from "react-icons/io5";

interface PlayButtonProps {
  size: "sm" | "md" | "lg";
  onClick: () => void;
}
const PlayButton: React.FC<PlayButtonProps> = ({ size, onClick }) => {
  const iconSize = size === "sm" ? 16 : size === "md" ? 24 : 32;
  return (
    <button
      className={`flex items-center justify-center rounded-full bg-[#1fdf64] p-2 hover:scale-105`}
      onClick={onClick}
    >
      <IoPlaySharp color="black" size={iconSize} />
    </button>
  );
};

export default PlayButton;
