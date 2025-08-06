import ThemeToggleButtons from "../theme/ThemeToggleButtons";

function Header() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="h-16 px-4 w-full flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="font-semibold text-xl">My locations</h1>
        <ThemeToggleButtons />
      </div>
    </div>
  );
}

export default Header;
