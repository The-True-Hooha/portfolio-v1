import React from "react";
import Link from "next/link";

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
    <div id="projects" className="px-[60px] lg:py-[2px] w-full text-left lg:px-[290px]">
      <div>
        <h2 className="text-[23px] font-calibre font-semibold mt-[-60px] tracking-wide sm:text-[32px] text-left text-white lg:font-bold ">
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
        <div className="w-full flex flex-wrap text-justify justify-center gap-[12px] mt-6">
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
      <div className="font-SFMono text-[20px] mt-10 font-semibold justify-center flex text-white lg:mt-[60px]">
        <Link className="" href="/">
          <a
            target="_blank"
            className="border hover:bg-[#1b1b1d] px-6 py-3 text-[15px] border-white rounded"
          >
            See More
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Projects;
