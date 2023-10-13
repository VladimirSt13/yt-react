import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import logo from "../assets/react.svg";
import { Button } from "../components/Button";
import { useState } from "react";

export const PageHeader = () => {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <div className={`${showFullWidthSearch ? "hidden" : "flex"} gap-4 items-center flex-shrink-0`}>
        <Button variant="ghost" size="icon">
          <Menu />
        </Button>

        <a href="/">
          <img src={logo} alt="Logo" className="h-6" />
        </a>
      </div>

      <form
        className={`${!showFullWidthSearch ? "hidden md:flex" : "flex"} gap-4 flex-grow justify-center items-center `}>
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0">
            <ArrowLeft />
          </Button>
        )}

        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search..."
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />

          <Button className="py-2 px-4 rounded-r-full border border-l-0 border-secondary-border flex-shrink-0">
            <Search />
          </Button>
        </div>

        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>

      <div className={`md:gap-2 items-center flex-shrink-0 ${showFullWidthSearch ? "hidden" : "flex"}`}>
        <Button onClick={() => setShowFullWidthSearch(true)} variant="ghost" size="icon" className="md:hidden">
          <Search />
        </Button>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Mic />
        </Button>

        <Button variant="ghost" size="icon">
          <Upload />
        </Button>

        <Button variant="ghost" size="icon">
          <Bell />
        </Button>

        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
};
