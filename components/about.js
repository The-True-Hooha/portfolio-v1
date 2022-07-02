import React from "react";

const About = () => {
  return (
    <div className="py-[1px] mt-[-50px] px-[60px] text-left lg:px-[330px] flex-auto sm:flex-auto lg:max-w-[1200px]">
      <div>
        <h2 className="text-[25px] tracking-wide sm:text-[32px] text-left text-white lg:font-bold ">
          {" "}
          <span className="font-SFMono text-white text-[20px] font-normal text-sm ">
            01.
          </span>{" "}
          About Me
        </h2>
      </div>
      <div className="mt-8 font-calibre ">
        <p>
          I’ve had the privilege of working in a startup and also collaborating
          with different teams as an open-source contributor where I've worked
          on products with monolithic and micro-service based architectures with
          large codebase.
        </p>
        <p className="mt-4">
          My main focus these days are building and learning more about scaling
          web technological solutions, design patterns and how I can further
          utilize my creativity and problem-solving skill to help propel
          innovation.
        </p>
        <p className="mt-4 text-left justify-center">
          I document my thoughts on my blog and newsletter where I talk about
          the little things that interest me.
        </p>
      </div>
    </div>
  );
};

export default About;
