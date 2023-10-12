import { Menu } from "lucide-react";
import logo from "../assets/react.svg";

export const PageHeader = () => {
  return (
    <div className="flex gap-10 lg:gap-20 justify-between">
      <div className="flex gap-4 items-center flex-shrink-0">
        <button>
          <Menu />
        </button>
        <a href="/">
          <img src={logo} alt="Logo" className="h-6" />
        </a>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
};
