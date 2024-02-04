import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const NavigationButtons = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="bg-black-100 rounded-full p-1">
        <IoChevronBackOutline className="text-white" size={24} />
      </div>
      <div className="bg-black-200 rounded-full p-1">
        <IoChevronForwardOutline className="" size={24} />
      </div>
    </div>
  );
};

export default NavigationButtons;
