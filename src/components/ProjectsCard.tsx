import React from "react";
import FramerWrapper from "./animation/FramerWrapper";

// Define types for the data structure
interface Project {
  img: string;
  title: string;
  description: string;
  tech_stack: string[];
  github_url: string;
  demo_url: string;
}

interface ProjectCardProps {
  list: Project;
  index: number;
}

// Functional component
const ProjectCard: React.FC<ProjectCardProps> = ({ list, index }) => {
  return (
    <FramerWrapper 
      className="max-w-[70%] max-lg:max-w-full" 
      y={0} 
      scale={0.8} 
      delay={index/4} 
      duration={0.15}
    >
      <div className="grid gap-8 mb-16 pb-8 overflow-hidden rounded-lg shadow-lg md:grid-cols-2 md:border-b-0 md:pb-0">
        <div className="flex justify-center items-center">
          <img
            src={list.img}
            alt={list.title}
            className="object-cover h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start mt-4 md:mt-0">
          <h1 className="text-3xl font-normal">{list.title}</h1>
          <br />
          <p className="font-normal text-base text-center md:text-left text-gray-200 mt-2 mb-4 max-w-95%">
            {list.description}
          </p>
          <br />
          <div className="flex flex-wrap justify-center md:justify-start">
            {list.tech_stack.map((tech, idx) => (
              <div
                key={idx}
                className="rounded-lg bg-gray-100 py-1 px-3 m-1 flex items-center justify-center text-base font-normal text-gray-800 shadow-sm"
              >
                {tech}
              </div>
            ))}
          </div>
          <div className="h-16 flex items-center">
            {list.github_url && (
              <a
                className="btn bg-primary text-black px-4 py-2 shadow-md rounded mr-2"
                href={list.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            )}
            <br />
            {list.demo_url && (
              <a
                className="btn bg-primary-sky text-black px-4 py-2 shadow-md rounded"
                href={list.demo_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo ➜
              </a>
            )}
          </div>
        </div>
      </div>
    </FramerWrapper>
  );
};

export default ProjectCard;