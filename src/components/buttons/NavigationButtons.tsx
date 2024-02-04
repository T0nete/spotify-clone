import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const NavigationButtons = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="bg-6100 rounded-full p-1">
        <IoChevronBackOutline className="text-white" size={24} />
      </div>
      <div className="bg-black-500 rounded-full p-1">
        <IoChevronForwardOutline className="" size={24} />
      </div>
    </div>
  );
};

export default NavigationButtons;
