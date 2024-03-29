import React from "react";
import Link from "next/link";
// import Image from "next/image";
const HeroSection = () => {
  return (
    <div
      id="home"
      className="px-[50px] py-[100px] w-full lg:px-[150px] md:py-[200px]"
    >
      
          <h2 className="font-SFMono text-[16px] ">Hello, my name is</h2>
          <h1 className="text-white font-calibre lg:text-[50px] text-[33px] font-bold mt-[8px]">
            David Ogar
          </h1>
          <h2 className="font-calibre text-[20px] lg:text-[28px] font-semibold mt-[15px]">
            A Software Engineer
          </h2>
          <p className="mt-[5px] max-w-[400px] text-[15px] md:max-w-[600px] md:mt-[10px] text-white">
            with specialization in developing server-side applications. I spend
            my free time learning about reverse and autonomous engineering.
          </p>
        
        <div className="font-SFMono text-[15px] text-white md:text-[25px] lg:mt-[30px] mt-10">
          <Link href="https://drive.google.com/file/d/1TYUoQ9suUB8GuZbtSWVsaqcm5JD4ljoJ/view?usp=sharing">
            <a
              target="_blank"
              className="border hover:bg-[#1b1b1d] px-4 py-2 text-[15px] border-white rounded"
            >
              Resume
            </a>
          </Link>
        </div> 
    </div>
  );
};

export default HeroSection;