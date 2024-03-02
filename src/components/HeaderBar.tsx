import NavigationButtons from "@/components/buttons/NavigationButtons";

const HeaderBar = () => {
  return (
    <header className="sticky top-0  flex h-16 flex-row items-center gap-2 rounded-t-lg bg-black-400 px-6">
      <NavigationButtons />
    </header>
  );
};

export default HeaderBar;
