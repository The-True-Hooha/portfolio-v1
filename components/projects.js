import React from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { BsFolderPlus } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";

const myProject = [
  {
    title: "Calculator",
    projectDescription: "a calculator app  built from scratch",
    github: <AiOutlineGithub size={25} className="mr-6" />,
    stack: "java angular react redis next.js",
    icon: <BsFolderPlus size={25} className="text-white" />,
  },
  {
    title: "ATM Machine",
    projectDescription: "a calculator app  built from scratch",
    github: <AiOutlineGithub size={25} className="mr-6" />,
    stack: "java angular react redis next.js",
    icon: <BsFolderPlus size={25} className="text-white" />,
    stack: "",
  },
  {
    title: "Computer Disc",
    projectDescription: "a calculator app  built from scratch",
    github: <AiOutlineGithub size={25} className="mr-6" />,
    stack: "java angular react redis next.js",
    live: "",
    icon: <BsFolderPlus size={25} className="text-white" />,
  },
  {
    title: "Calculator",
    projectDescription: "a calculator app  built from scratch",
    github: <AiOutlineGithub size={25} className="mr-6" />,
    stack: "java angular react redis next.js",
    icon: <BsFolderPlus size={25} className="text-white" />,
  },
  {
    title: "ATM Machine",
    projectDescription: "a calculator app  built from scratch",
    github: <AiOutlineGithub size={25} className="mr-6" />,
    stack: "java angular react redis next.js",
    live: "",
    icon: <BsFolderPlus size={25} className="text-white" />,
  },
  {
    title: "Computer Disc",
    projectDescription: "a calculator app  built from scratch",
    github: <AiOutlineGithub size={25} className="mr-6" />,
    stack: "java angular react redis next.js",
    live: "",
    icon: <BsFolderPlus size={25} className="text-white" />,
  }
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="px-[60px] lg:py-[2px] w-full text-left lg:px-[200px]"
    >
      <div>
        <h2 className="text-[23px] font-calibre font-semibold mt-[-60px] text-left text-white lg:font-bold">
          <span className="font-SFMono text-white text-[20px] font-normal mr-1 text-sm">
            03.
          </span>
          Projects
        </h2>
        <div className="font-SFMono  flex w-full lg:mt-[4px] ">
          <p className="px-7 text-center justify-center text-[14px] hover:underline font-bold mt-1">
            and other noteworthy contributions...
          </p>
        </div>
        <div className="w-full flex flex-wrap text-justify justify-center  mt-6 gap-[12px]">
          {myProject.map((v, index) => (
            <ProjectCard {...v} key={index} title={v.title} />
          ))}
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
