import NavigationButtons from "./buttons/NavigationButtons";

const HeaderBar = () => {
  return (
    <header className="flex h-16 flex-row items-center gap-2 rounded-t-lg bg-black-400 px-6">
      <NavigationButtons />
    </header>
  );
};

export default HeaderBar;
