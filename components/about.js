import React from "react";

const About = () => {
  return (
    <div id="about" className="pt-[60px] h-full mt-[-70px] px-[60px] text-left lg:px-[150px] flex-auto sm:flex-auto lg:max-w-[900px]">
      <div>
        <h2 className="text-[23px] font-semibold font-calibre tracking-wide sm:text-[32px] text-left text-white lg:font-bold ">
          {" "}
          <span className="font-SFMono text-white text-[20px] font-normal text-sm ">
            01.
          </span>{" "}
          About Me
        </h2>
      </div>
      <div className="mt-6 text-[#617278] font-airlight text-justify text-[16px] font-light">
        <p>
          I&apos;ve had the privilege of working in a startup and also collaborating
          with different teams as an{" "}
          <span className="text-white">open-source contributor</span> where I&apos;ve
          worked on products with{" "}
          <span className="text-white">monolithic and micro-services</span>{" "}
          based architectures with large codebase.
        </p>
        <p className="mt-4">
          My main focus these days are building and learning more about{" "}
          <span className="text-white">
            scaling web technological solutions, design patterns
          </span>{" "}
          and how I can further utilize my{" "}
          <span className="text-white">
            creativity and problem-solving skill
          </span>{" "}
          to help propel innovation.
        </p>
        <p className="mt-4 text-left justify-center">
          I document my thoughts on my{" "}
          <span className="text-white">blog and newsletter</span> where I talk
          about the little things that interest me.
        </p>
        <h3 className="text-white text-center hover:underline mt-[45px] text-[20px]">
          Core Technologies
        </h3>
        <div className="mt-[10px] max-w-full">
          <ul className="list-disc list-outside gap-1 justify-center grid grid-cols-3 text-justify font-SFMon text-[14px] mt-2">
            <li className="mr-6"> Java </li>
            <li className="mr-8"> Micronaut </li>
            <li className="mr-8"> Docker </li>
            <li className="mr-8"> Kubernetes</li>
            <li className="mr-8"> Maven </li>
            <li className="mr-8"> Gradle </li>
            <li className="mr-8"> Picoli </li>
            <li className="mr-8"> Jenkins </li>
            <li className="mr-8"> JUnit5 </li>
            <li className="mr-8"> SQL </li>
            <li className="mr-8"> Node.js </li>
            <li className="mr-8"> Javascript[ES6+] </li>
            <li className="mr-8"> AWS </li>
            <li className="mr-8"> React </li>
            <li className="mr-8"> Next.js </li>
            <li className="mr-8">  Spring/Springboot</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
