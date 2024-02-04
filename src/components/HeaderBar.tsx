import NavigationButtons from "./buttons/NavigationButtons";

const HeaderBar = () => {
  return (
    <div className="bg-black-300 flex h-16 flex-row items-center gap-2 rounded-t-lg px-6">
      <NavigationButtons />
    </div>
  );
};

export default HeaderBar;
