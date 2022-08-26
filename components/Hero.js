import React from "react";
import Link from "next/link";
import Image from "next/image";
const HeroSection = () => {
  return (
    <div>
    <div
      id="home"
      className="w-full px-[60px] py-[120px] lg:px-[150px] md:py-[200px]"
    >
      
        <div className="text-justify">
          <h2 className="font-SFMono text-[16px] ">Hello, my name is</h2>
          <h1 className="text-white font-calibre lg:text-[50px] text-[38px] font-bold mt-[8px]">
            David Ogar.
          </h1>
          <h2 className="font-calibre text-[20px] lg:text-[28px] font-semibold mt-[15px]">
            A Software Engineer
          </h2>
          <p className="mt-[5px] max-w-[400px] text-[15px] md:max-w-[600px] md:mt-[10px] text-white">
            with specialization in developing server-side applications. I spend
            my free time learning about reverse and autonomous engineering.
          </p>
        </div>
        <div className="font-SFMono text-[20px] text-white md:text-[25px] lg:mt-[30px] mt-10">
          <Link href="https://drive.google.com/file/d/1zIf4M7n7ieJMZsErzU9EGMQL2kpg44iO/view?usp=sharing">
            <a
              target="_blank"
              className="border hover:bg-[#1b1b1d] px-6 py-3 text-[15px] border-white rounded"
            >
              Resume
            </a>
          </Link>
        </div>
    </div>
    </div>
  );
};

export default HeroSection;