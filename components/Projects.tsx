import React from "react";
import ProjectCard from "./ui/ProjectCard";

const activeTextHoverGradientStyles =
  "bg-gradient-to-r from-white to-[#83BBF4] text-transparent bg-clip-text w-fit";

const Projects = () => {
  return (
    <div
      id="projects"
      className="space-y-8 md:space-y-16 py-8 md:py-16 max-w-7xl mx-auto overflow-x-hidden px-4 sm:px-6 lg:px-8"
    >
      <h2
        className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-poppins ${activeTextHoverGradientStyles} mx-auto md:mx-0`}
      >
        Our Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <ProjectCard
          image="/project-images/email-improver/image1.png"
          title="AI Email Improver"
          subtitle="A email improver that uses AI to improve your email"
          tags={["React", "Next.js", "Tailwind CSS", "OpenAI"]}
          description="A tool built using the MERN stack as well as OpenAI's GPT-4 API to help anyone feel more confident about their emails."
        />
        <ProjectCard
          image="/project-images/calorie-counter/image2.png"
          title="Ricecake: AI Calorie Counter"
          subtitle="A calorie counter that uses AI to help you count your calories with natural language"
          tags={["React Native", "Expo", "Tailwind CSS", "OpenAI"]}
          description="A calorie counter that uses AI to help you count your calories with natural language. This app is built using React Native and Expo."
        />
        {/* <ProjectCard
          image=""
          title="The Hanimator Website"
          subtitle="A website for a video editor/animator"
          tags={["React", "Next.js", "Tailwind CSS"]}
          description="A website for a video editor/animator. This website is built using React and Next.js."
        /> */}
      </div>
    </div>
  );
};

export default Projects;
