import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-screen px-[300px]">
      <div className="max-w[1240px] w-full h-full mx-auto py-[200px] justify-center place-items-start">
        <div>
          <h2 className="text-white text-lg font-SFMono my-[-18h2x]">
            {" "}
            Hello, my name is
          </h2>
          <h2 className="font-calibre font-bold text-[60px] mt-6 text-white">
            David Ogar.
          </h2>
          <p className="text-2xl py-8 max-w-[70%] text-left m-auto ml-1">
            I'm a software engineer specializing in server-side development.
            Currently I'm focused in building and learning more about scalable web technological solutions, design patterns
            and how I can further utilize my creativity and problem-solving skill to help propel innovation.

            I spend my free time learning more about reverse and autonomous engineering, and make meaningful open source contributions.
          </p>
          <div className="py-6">
            <button> My Resume </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
