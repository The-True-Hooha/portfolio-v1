import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [hidNavBarState, setHidNavBarState] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 80) {
        setHidNavBarState(true);
      } else {
        setHidNavBarState(false);
      }
    });
  }, []);
  return (
    <header
      className={`${
        hidNavBarState ? "hidden opacity-0" : ""
      }
      transition-all ease-in-out duration-1000 drop-shadow-lg shadow-black opacity-100 fixed z-11 top-0 px-[50px] py-[40px] w-full bg-neutral-850 filter-none pointer-events-auto select-auto backdrop-blur-[10px]`}
    >
      <div className="flex align-middle">
        </div>
    </header>
  );
};

export default Navbar;
