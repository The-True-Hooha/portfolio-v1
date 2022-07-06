const ProjectCard = ({icon, title, projectDescription, github, stack}) => {
  return (
    <div className="h-[300px] drop-shadow-xl hover:text-[#617278] text-white w-[300px] duration-300 bg-[#1b1b1d] cursor-pointer hover:mt-[-8px]">
      <div className="pl-6 pt-6">
        <div className="flex justify-between">
        {icon} {github}
        </div>
        
        <h2 className="text-[20px] font-semibold font-calibre mt-4">
         {title}
        </h2>
        <p className="text-white text-[15px] font-calibre text-justify font-normal">{projectDescription}</p>
        <p className="absolute mb-9 text-[12px] opacity-50 bottom-0 font-SFMono font-light"> {stack}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
