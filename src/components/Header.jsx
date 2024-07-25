// src/components/Header.js
import React from "react";
import FlipLink from "./FlipLink";
import Social from "./Social";

const Header = ({ theme, handleThemeSwitch }) => {
  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="black"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );
  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  const supportsBackdropFilter = CSS.supports("backdrop-filter", "blur(10px)");
  const headerStyle = supportsBackdropFilter
    ? "backdrop-blur-md fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4"
    : "bg-background bg-opacity-5 dark:bg-opacity-40 fixed top-0 left-0 w-full z-50 flex justify-between items-center p-4";

  return (
    <header className={headerStyle}>
      <div className="flex flex-row ml-10">
        {/* <button
          type="button"
          onClick={handleThemeSwitch}
          className="p-2 bg-[#242F40] dark:bg-orange-300 text-lg rounded-md"
        >
          {theme === "dark" ? sun : moon}
        </button> */}
        <h1 className="hidden md:block pl-2 text-2xl font-bold">
          Ali <span className="text-primary hover:underline">Bardide</span>
        </h1>
        <h1 className="md:hidden pl-2 text-2xl font-bold text-secondary">B.</h1>
      </div>
      <Social />
    </header>
  );
};

export default Header;
