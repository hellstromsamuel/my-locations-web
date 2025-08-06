import { cn } from "../../lib/utils";
import ThemeToggleButtons from "../theme/ThemeToggleButtons";

interface Props {
  className?: string;
}

function Header({ className }: Props) {
  return (
    <div
      className={cn(
        "h-16 px-4 w-full flex justify-between items-center",
        className
      )}
    >
      <h1 className="font-semibold text-xl">My locations</h1>
      <ThemeToggleButtons />
    </div>
  );
}

export default Header;
