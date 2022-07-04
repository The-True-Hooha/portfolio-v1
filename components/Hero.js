import React from "react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div id="home" className="py-[180px] px-[60px] text-left sm:px-[60px] lg:px-[290px] flex-auto sm:flex-auto lg:flex-auto">
      <div className="text-justify">
        <h1 className="font-SFMono text-[16px] sm:text-[20px]">
          Hello, my name is
        </h1>
        <h2 className="text-white font-calibre text-[40px] sm:text-[70px] sm:mt-[20px] font-bold mt-[8px]">
          David Ogar.
        </h2>
        <h2 className="font-calibre text-[25px] font-semibold sm:text-[45px] sm:mt-[35px] mt-[15px]">
          A Software Engineer
        </h2>
        <p className="mt-[5px] max-w-[400px] text-[15px] sm:max-w-[600px] sm:mt-[10px] text-white">
          with specialization in developing server-side applications. I spend my
          free time learning about reverse and autonomous engineering.
        </p>
      </div>
      <div className="font-SFMono text-[20px] text-white sm:text-[25px] lg:mt-[30px] mt-6">
        <Link href="/">
          <a
            target="_blank"
            className="border hover:bg-[#9db03c] px-8 py-4 text-[15px] border-white rounded"
          >
            Resume
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
