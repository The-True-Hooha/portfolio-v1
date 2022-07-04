import React from "react";

const myProject = [
  {
    title: "Calculator",
    projectDescription: "a calculator app  built from scratch",
    github: "", //can be null
    techStack: "Java + Java + AWS + Java",
    live: "",
  },
  {
    title: "ATM Machine",
    projectDescription: "a calculator app  built from scratch",
    github: "", //can be null
    techStack: "Java + Java + AWS + Java",
    live: "",
  },
  {
    title: "Computer Disc",
    projectDescription: "a calculator app  built from scratch",
    github: "", //can be null
    techStack: "Java + Java + AWS + Java",
    live: "",
  },
];

const Projects = () => {
  return (
    <div className="py-[40px] px-[60px] lg:py-[2px] w-full text-left sm:px-[60px] lg:px-[290px]">
      <div>
        <h2 className="text-[23px] font-calibre font-semibold tracking-wide sm:text-[32px] text-left text-white lg:font-bold ">
          <span className="font-SFMono text-white text-[20px] font-normal mr-1 text-sm">
            03.
          </span>
          Projects
        </h2>
        <div className="font-SFMono  flex flex-center w-full lg:mt-[4px] ">
          <p className="px-7 text-center justify-center text-[14px] hover:underline font-bold mt-1">
            and other noteworthy contributions...
          </p>
        </div>
        <div className="w-full flex flex-wrap items-center gap-[12px] mt-6">
          <div className="h-[300px] w-[300px] bg-[#1b1b1d] cursor-pointer transition ease-in-out duration-500 hover:scale-[120%]">
            <h2 className="text-white text-[20px]"> Project Name</h2>
            <p>lorem ipsum dolor </p>
          </div>
          <div className="h-[300px] w-[300px] bg-[#1b1b1d] cursor-pointer transition ease-in-out duration-500 hover:scale-[120%]">
            <h2 className="text-white text-[20px]"> Project Name</h2>
            <p>lorem ipsum dolor </p>
          </div>
          <div className="h-[300px] w-[300px] bg-[#1b1b1d] cursor-pointer transition ease-in-out duration-500 hover:scale-[120%]">
            <h2 className="text-white text-[20px]"> Project Name</h2>
            <p>lorem ipsum dolor </p>
          </div>
          <div className="h-[300px] w-[300px] bg-[#1b1b1d] cursor-pointer transition ease-in-out duration-500 hover:scale-[120%]">
            <h2 className="text-white text-[20px]"> Project Name</h2>
            <p>lorem ipsum dolor </p>
          </div>
          <div className="h-[300px] w-[300px] bg-[#1b1b1d] cursor-pointer transition ease-in-out duration-500 hover:scale-[120%]">
            <h2 className="text-white text-[20px]"> Project Name</h2>
            <p>lorem ipsum dolor </p>
          </div>
          <div className="h-[300px] w-[300px] bg-[#1b1b1d] cursor-pointer transition ease-in-out duration-500 hover:scale-[120%]">
            <h2 className="text-white text-[20px]"> Project Name</h2>
            <p>lorem ipsum dolor </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
