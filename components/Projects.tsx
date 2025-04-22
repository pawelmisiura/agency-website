import React from "react";
import ProjectCard from "./ui/ProjectCard";

const activeTextHoverGradientStyles =
  "bg-gradient-to-r from-white to-[#83BBF4] text-transparent bg-clip-text w-fit";

const Projects = () => {
  return (
    <div className="space-y-16 py-16 max-w-7xl mx-auto overflow-x-hidden p-3">
      <h2 className={`text-8xl font-poppins ${activeTextHoverGradientStyles}`}>
        Success Stories
      </h2>
      <div className="grid grid-cols-2 gap-8">
        <ProjectCard
          title="Web Application"
          subtitle="This is a great app"
          tags={["React", "Next.js", "Tailwind CSS"]}
          description="This is a description of the project. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <ProjectCard
          title="Web Application"
          subtitle="This is a great app"
          tags={["React", "Next.js", "Tailwind CSS"]}
          description="This is a description of the project. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <ProjectCard
          title="Web Application"
          subtitle="This is a great app"
          tags={["React", "Next.js", "Tailwind CSS"]}
          description="This is a description of the project. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <ProjectCard
          title="Web Application"
          subtitle="This is a great app"
          tags={["React", "Next.js", "Tailwind CSS"]}
          description="This is a description of the project. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
      </div>
    </div>
  );
};

export default Projects;
