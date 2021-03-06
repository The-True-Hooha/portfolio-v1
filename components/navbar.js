import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

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

  const [sideNavResponsive, setSideNavResponsive] = useState(false);

  const handleSideNav = () => {
    setSideNavResponsive(!sideNavResponsive);
  };
  return (
    <header
      id="header"
      className={`${hidNavBarState ? "hidden opacity-0" : ""}
      h-20 shadow-lg shadow-neutral-850 opacity-100 fixed z-10 top-0 px-[50px] py-[0px] w-full filter-none pointer-events-auto select-auto backdrop-blur-[20px]`}
    >
      <nav className="flex justify-between items-center w-full h-full px-2  2xl:px-16 mt-4">
      <p className="text-[10px] font-SFMono"> curiosity and perseverance</p>
        <div>
          <ul className="hidden md:flex">
            <Link href="/#about">
              <li className="font-mono ml-9 hover:text-white cursor-pointer text-sm font-semibold">
                {" "}
                <span className="text-white">01. </span>About
              </li>
            </Link>
            <Link href="/#work">
              <li className="font-mono ml-9 hover:text-white cursor-pointer text-sm font-semibold">
                {" "}
                <span className="text-white">02. </span>
                Experience
              </li>
            </Link>
            <Link href="/#projects">
              <li className="font-mono ml-9  hover:text-white text-sm cursor-pointer font-semibold">
                {" "}
                <span className="text-white">03. </span>
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="font-mono ml-9  hover:text-white cursor-pointer text-sm font-semibold">
                {" "}
                <span className="text-white">04. </span>
                Contact
              </li>
            </Link>
            <Link href="/">
              <li className="ml-9 my-[-8px] font-SFMono text-white cursor-pointer hover:bg-[#1b1b1d] text-[20px] font-semibold border px-3 py-2 text-sm border-white rounded mt-[-11px]">
                {" "}
                Blog
              </li>
            </Link>
          </ul>
          <div onClick={handleSideNav} className=" md:hidden">
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </nav>
      <div
        className={
          sideNavResponsive ? "fixed md:hidden right-0 top-0 w-full" : ""
        }
      >
        <div
          className={
            sideNavResponsive
              ? "fixed right-0 top-0 w-[70%] sm:w-[45%] md:w-[26%] h-screen  bg-neutral-800 p-10 ease-in duration-500"
              : "fixed right-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full justify-end">
              <div onClick={handleSideNav} className=" p-3 cursor-pointer">
                <AiOutlineClose size={35} className="mr-[-50px] mt-[-13px]" />
              </div>
            </div>
            <div className="text-center text-[#ffffff] my-[-55px] flex-col font-mono">
              <ul>
                <Link href="/#about">
                  <li className="py-4 font-semibold cursor-pointer">About</li>
                </Link>
                <Link href="/#work">
                  <li className="py-4 font-semibold cursor-pointer">
                    Experience
                  </li>
                </Link>
                <Link href="/#projects">
                  <li className="py-4 cursor-pointer font-semibold">
                    {" "}
                    Projects
                  </li>
                </Link>
                <Link href="/Contact">
                  <li className="py-4 font-semibold cursor-pointer">
                    {" "}
                    Contact
                  </li>
                </Link>
                <Link href="/">
                  <li className="font-semibold cursor-pointer border py-2 text-sm border-white rounded hover:bg-[#1b1b1d]">
                    {" "}
                    Blog{" "}
                  </li>
                </Link>
              </ul>
              <div className="my-[80px]">
                <p className="font-bold font-sans w-full sm:w-[104%] tracking-wide text-white">
                  {" "}
                  Connect With Me
                </p>
                <div className="flex my-4 items-center justify-center ml-8 ">
                  <div className="ease-in duration-500 mr-5 cursor-pointer hover:scale-105">
                    <a
                      target="_blank"
                      href="https://github.com/The-True-Hooha"
                      rel="noreferrer"
                    >
                      <FaGithub size={22} />
                    </a>
                  </div>
                  <div className="ease-in duration-500 mr-5 cursor-pointer hover:scale-105">
                    <a
                      href="https://www.linkedin.com/in/david-ogar/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaLinkedinIn size={22} />
                    </a>
                  </div>
                  <div className="ease-in duration-500 mr-5 cursor-pointer hover:scale-105">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://twitter.com/TheTrueHooha_I"
                    >
                      <FaTwitter size={22} />
                    </a>
                  </div>
                  <div className="ease-in duration-500 mr-5 cursor-pointer hover:scale-105">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="mailto:owogogahhero@outlook.com"
                    >
                      <AiOutlineMail size={22} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;