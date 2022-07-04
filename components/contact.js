import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="py-[80px] px-[60px] lg:py-[150px] w-full">
      <div className="flex my-4 items-center justify-center ml-8 ">
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
      <p className="flex justify-center font-SFMono text-sm font-bold"> Curiosity and Perseverance </p>
    </div>
  );
};

export default Contact;
