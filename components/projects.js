import React from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { BsFolderPlus } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";

const myProject = [
  {
    title: "Payment Microservice",
    projectDescription: "Explore a startup idea, and build it with a microservice architecture.",
    github: <AiOutlineGithub size={25} className="mr-6" />,
    stack: "Java springboot-2.5.7 Maven MySQL Eureka Cloud-Gateway Hystrix",
    icon: <BsFolderPlus size={25} className="text-white" />,
  },
  {
    title: "Datafaker",
    projectDescription: "Open source contributor. A Java library similar to other fake data generators",
    github: <AiOutlineGithub size={25} className="mr-6" />,
    stack: "Java 8+",
    icon: <BsFolderPlus size={25} className="text-white" />,
  },
  {
    title: "Crypto History Dashboard",
    projectDescription: "Consumed the crypto ranking api from Rapid API. What this does is to display crypto market rates for different crypto coins",
    github: <AiOutlineGithub size={25} className="mr-6" />,
    stack: "Java Springboot-2.7.0 Redis-stack Gradle Next.js Javascript (ES6+)  ",
    live: "",
    icon: <BsFolderPlus size={25} className="text-white" />,
  },
  {
    title: "ReadMe CLI Generator",
    projectDescription: "A command line application to generate markdown templates for your readme",
    github: <AiOutlineGithub size={25} className="mr-6" />,
    stack: "Java Micronaut Picocli Maven",
    icon: <BsFolderPlus size={25} className="text-white" />,
  },
  {
    title: "Typesense Demo",
    projectDescription: "Spun a cluster on Typesense cloud to perform a search query on json data with other features",
    github: <AiOutlineGithub size={25} className="mr-6" />,
    stack: "Javascript Nodejs Express Typesense Typesense-js",
    live: "",
    icon: <BsFolderPlus size={25} className="text-white" />,
  },
  {
    title: "Snake Xenzia",
    projectDescription: "Build a snake game with java",
    github: <AiOutlineGithub size={25} className="mr-6" />,
    stack: "Java JavaFx",
    live: "",
    icon: <BsFolderPlus size={25} className="text-white" />,
  },
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
          <p className="px-7 text-center justify-center text-[14px] hover:underline hover:text-white font-bold mt-1">
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
