import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const NavigationButtons = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleForward = () => {
    navigate(1);
  };

  return (
    <div className="flex flex-row gap-2">
      <button className="bg-6100 rounded-full p-1" onClick={handleBack} title="Go back" aria-label="Go back">
        <IoChevronBackOutline className="text-white" size={24} />
      </button>
      <button
        className="rounded-full bg-black-500 p-1"
        onClick={handleForward}
        title="Go forward"
        aria-label="Go forward"
      >
        <IoChevronForwardOutline className="" size={24} />
      </button>
    </div>
  );
};

export default NavigationButtons;
