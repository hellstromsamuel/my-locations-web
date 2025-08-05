import ThemeToggleButtons from "../theme/ThemeToggleButtons";

function Header() {
  return (
    <div className="h-16 px-4 w-full flex justify-between items-center border-b bg-white dark:bg-gray-900">
      <h1 className="font-semibold text-xl">My locations</h1>
      <ThemeToggleButtons />
    </div>
  );
}

export default Header;
