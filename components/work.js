import React, { useState } from "react";

const myExperienceData = [
  {
    id: 1,
    title: "Researcher (Intern)",
    startDate: "Feb 2022",
    endDate: "Jun 2022", // can be null
    company: "FUPRE",
    exps: [
      "Contributed extensively with my professor and participated in research on workflow for Hybrid Oil Spill Detection.",
      "Queried and sorted large data to produce results and computed graphs to provide detailed analysis of test cases.",
      "Participated in review sessions and thesis defense during the entire period of my internship.",
      "Independently performed research to handle project tests, and received guidance on complex problems from my professor.",
      "Contributed to writing grant proposals for project funding."
    ]
  },
  {
    id: 2,
    title: "Software Engineer(Java/Node.js)",
    startDate: "Jan 2021 ",
    endDate: "Dec 2021", // can be null
    company: "Team Eloquent",
    exps: [
      "Participated in the entire application lifecycle to build organizational-based internal software.",
      "Focused on building the web layers and APIs for web applications.",
      "Provided recommendations for cloud infrastructure needs (cloud provider: AWS)",
      "Worked in a cross-functional and agile team and collaborated with UI/UX designers and other developers.",
    ]
  },
  {
    id: 3,
    title: "Web Developer",
    startDate: "SEPT 2019",
    endDate: null, // can be null
    company: "Get Digital",
    exps: [
      "Designed and implemented WordPress sites for SMEs to put their businesses online.",
      "Consulted to manage the online presence of new businesses with a functional website, branding, and consulting, including associated social media accounts."
    ]
  },
  {
    id: 4,
    title: "Data Analyst",
    startDate: "Oct 2016",
    endDate: "AUG 2017",
    company: "OneLink Dynamic Concepts",
    exps: [
      "Gathered data and communicated the results to the team lead which significantly improved team performance and business profits by 15%.",
      "Created and reviewed structured databases to handle and collect data, sorting them into categories as they relate to each other."
    ]
  }
];

const Work = () => {
  const [expIndex, setExpIndex] = useState(0);
  const handleTabChange = (idx) => {
    setExpIndex(idx);
  };
  return (
    <div id="work" className="w-full px-[60px] lg:px-[150px] py-[115px]">
      <div className="w-6/12 mb-[10px] flex flex-row items-center">
        <div className="mr-[12px]">
          {" "}
          <h2 className="text-[23px] font-semibold tracking-wide sm:text-[32px] text-left text-white lg:font-bold font-calibre ">
            <span className="font-SFMono text-white mr-1 text-[20px] font-normal text-sm ">
              02.
            </span>
            Experience
          </h2>
        </div>
        <div className=" mt-[10px] h-[1px] w-full bg-white"></div>
      </div>
      <div className="w-full md:w-8/12 mt-[35px] flex flex-col md:flex-row items-start min-h-[300px]">
        <ul className="w-full md:w-3/12 flex flex-row md:flex-col border-l-[1px] border-solid lg:border-l-2 border-[#1b1b1d]">
          {myExperienceData.map(({ id, company }, index) => (
            <li
              onClick={() => handleTabChange(index)}
              key={`${index}-${id}`}
              className={`px-[8px] duration-600 ease-in-out transition text-[12px]  py-[10px] font-SFMono cursor-pointer hover:bg-[#617278]${
                expIndex === index
                  ? "bg-gray-900  border-l-[3px] text-white border-solid border-white relative -left-[2px]"
                  : ""
              }`}
            >
              {company}
            </li>
          ))}
        </ul>
        <div className="w-full md:w-9/12 md:pl-[16px] pt-[10px] md:p-0">
          {
            <div>
              <h2 className="font-semibold text-white text-[15px]">
                {myExperienceData[expIndex].title}
              </h2>
              <p className="mt-1 font-SFMono text-white text-[12px]">
                {myExperienceData[expIndex].startDate} -{" "}
                {myExperienceData[expIndex].endDate || "Present"}
              </p>
              <ul>
                {myExperienceData[expIndex].exps.map((v, idx) => (
                  <li
                    key={`li-${idx}`}
                    className="my-[8px] list-disc duration-500 transition ease-in-out text-[#617278] lg:max-w-[420px]  font-calibre text-justify text-[13px]"
                  >
                    {v}
                  </li>
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
