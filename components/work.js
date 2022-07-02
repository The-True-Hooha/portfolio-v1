import React, { useState } from "react";

const myExperienceData = [
  {
    id: 1,
    title: "Software Engineer",
    startDate: "12/24/2022",
    endDate: "12/24/2022", // can be null
    company: "SOFTESCU",
    exps: [
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
    ],
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    startDate: "12/24/2022",
    endDate: null, // can be null
    company: "GOOGLE",
    exps: [
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
    ],
  },
  {
    id: 3,
    title: "Senior Software Engineer",
    startDate: "12/24/2022",
    endDate: null, // can be null
    company: "GOOGLE",
    exps: [
      "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
    ],
  },
];

const Work = () => {
  const [expIndex, setExpIndex] = useState(0);
  const handleTabChange = (idx) => {
    setExpIndex(idx);
  };
  return (
    <div className="w-full px-[60px] lg:px-[330px] py-[80px] text-white">
      <div className="w-6/12 mb-[10px] flex flex-row items-center">
        <div className="mr-[12px]">
          {" "}
          <h2 className="text-[25px] tracking-wide sm:text-[32px] text-left text-white lg:font-bold ">
            <span className="font-SFMono text-white text-[20px] font-normal text-sm ">
              01.
            </span>
            Experience
          </h2>
        </div>
        <div className=" mt-[10px] h-[1px] w-full bg-white"></div>
      </div>
      <div className="w-full md:w-8/12 mt-[50px] flex flex-col md:flex-row items-start min-h-[300px]">
        <ul className="w-full md:w-3/12 flex flex-row md:flex-col border-l-[1px] border-solid border-white">
          {myExperienceData.map(({ id, company }, index) => (
            <li
              onClick={() => handleTabChange(index)}
              key={`${index}-${id}`}
              className={`text-white px-[8px] py-[10px] cursor-pointer hover:bg-gray-900 hover:text-white transition ease-in-out${
                expIndex === index ? "bg-gray-900 text-white border-l-[3px] border-solid border-white relative -left-[2px]" : ""
              }`}
            >
              {company}
            </li>
          ))}
        </ul>
        <div className="w-full md:w-9/12 md:pl-[16px] pt-[10px] md:p-0">
          {
            <div>
              <h2>{myExperienceData[expIndex].title}</h2>
              <h2>{myExperienceData[expIndex].company}</h2>
              <p>
                {myExperienceData[expIndex].startDate} -{" "}
                {myExperienceData[expIndex].endDate || "Present"}
              </p>
              <ul>
                {myExperienceData[expIndex].exps.map((v, idx) => (
                  <li key={`li-${idx}`} className="my-[8px]">{v}</li>
                ))}
              </ul>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Work;
