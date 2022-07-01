import React from "react";

const HeroSection = () => {
  return (
    <section className="flex-col items-start flex flex-wrap min-h-full my-[150px] mx-[290px]">
      <h1 className="font-SFMono text-[20px]">Hello, my name is</h1>
      <h2 className="text-white font-calibre text-[70px] font-bold pt-[30px]">
        David Ogar,
      </h2>
      <h2 className="font-calibre text-[45px] font-semibold pt-[40px]">
        I'm a Software Engineer.
      </h2>
      <p className="pt-4 max-w-[600px] text-[20px]">
        specializing in developing{" "}
        <span className="text-white pr-1">server-side applications,</span>
        in creating <span className="text-white">scalable technological solutions</span> to help build and propel
        innovation.
      </p>
    </section>
  );
};

export default HeroSection;
