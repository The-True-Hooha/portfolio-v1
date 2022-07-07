import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { RiCopyrightLine } from "react-icons/ri";

const Contact = () => {
  return (
    <div id="contact" className="py-[80px] px-[60px] w-auto">
      <div className="lg:hidden">
        <div className="flex my-4  items-center justify-center ml-8">
          <div className="ease-in duration-500 mr-5 cursor-pointer hover:scale-105">
            <FaGithub size={22} />
          </div>
          <div className="ease-in duration-500 mr-5 cursor-pointer hover:scale-105">
            <FaLinkedinIn size={22} />
          </div>
          <div className="ease-in duration-500 mr-5 cursor-pointer hover:scale-105">
            <FaTwitter size={22} />
          </div>
          <div className="ease-in duration-500 mr-5 cursor-pointer hover:scale-105">
            <AiOutlineMail size={22} />
          </div>
        </div>
        <p className="flex justify-center font-SFMono text-sm font-bold">
          {" "}
          Curiosity and Perseverance{" "}
        </p>
      </div>
      <div>
        <div className="hidden lg:flex">
          <div className="pt-[-20px]">
            <div className="ease-in duration-300 mr-5 cursor-pointer hover:scale-150">
              <FaGithub className="mb-4" size={25} />
            </div>
            <div className="ease-in duration-300 cursor-pointer hover:scale-150">
              <FaLinkedinIn className="mb-4" size={25} />
            </div>
            <div className="ease-in-out transition duration-300 cursor-pointer hover:scale-150">
              <FaTwitter className="mb-4" size={25} />
            </div>
            <div className="ease-in-out transition duration-300 cursor-pointer hover:scale-150">
              <AiOutlineMail size={25} />
            </div>
          </div>
        </div>
        <p className="lg:flex hidden mt-[-50px] justify-center text-white font-SFMono text-sm font-bold">
          {" "}
          Curiosity and Perseverance{" "}
        </p>
        <div>
          <p className="flex justify-center mt-2 font-SFMono font-semibold">
            David Ogar
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
