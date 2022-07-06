const ProjectCard = ({icon, title, projectDescription}) => {
  return (
    <div className="h-[300px] text-white w-[300px] bg-[#1b1b1d] cursor-pointer hover:mt-[-8px]">
      <div className="pl-6 pt-6">
        {icon}
        <h2 className="text-[20px] text-[#617278] hover:text-white font-semibold font-calibre mt-4">
         {title}
        </h2>
        <p>{projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
