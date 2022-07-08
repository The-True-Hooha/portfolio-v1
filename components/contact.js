import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiCopyrightLine } from "react-icons/ri";
import { CgGitFork } from "react-icons/cg";

const Contact = () => {
  return (
    <div id="contact" className="py-[80px] px-[60px] w-auto">
      <div className="lg:hidden">
        <div className="flex my-4  items-center justify-center ml-8">
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
        <p className="flex justify-center font-SFMono text-sm font-bold">
          {" "}
          Curiosity and Perseverance{" "}
        </p>
      </div>
      <div className="">
        <div className="hidden md:flex">
          <div className="text-white">
            <div className="ease-in duration-300 cursor-pointer hover:scale-150">
              <a
                target="_blank"
                href="https://github.com/The-True-Hooha"
                rel="noreferrer"
              >
                <FaGithub size={26} />
              </a>
            </div>
            <div className="ease-in duration-300 mt-3 cursor-pointer hover:scale-150">
              <a
                href="https://www.linkedin.com/in/david-ogar/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={26} />
              </a>
            </div>
            <div className="ease-in-out mt-3 transition duration-300 cursor-pointer hover:scale-150">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/TheTrueHooha_I"
              >
                <FaTwitter size={26} />
              </a>
            </div>
            <div className="ease-in-out mt-3 transition duration-300 cursor-pointer hover:scale-150">
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:owogogahhero@outlook.com"
              >
                <AiOutlineMail size={26} />
              </a>
            </div>
          </div>
        </div>
        <p className="lg:flex hidden mt-[-50px] justify-center text-white font-SFMono text-sm font-bold">
          {" "}
          Curiosity and Perseverance{" "}
        </p>
        <div className="mt-6">
          <p className="flex justify-center mt-2 font-SFMono hover:text-white font-semibold">
          <CgGitFork size={25}/>
            {" "}
            <a href="https://github.com/The-True-Hooha/portfolio-v1.git">
              David Ogar
            </a>
          </p>
          <p className="flex justify-center font-SFMono font-bold">
            <RiCopyrightLine className="mt-1 mr-1" />
            2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;