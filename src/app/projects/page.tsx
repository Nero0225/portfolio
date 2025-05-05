import FramerWrapper from "@/components/animation/FramerWrapper";
import Heading from "@/components/Heading";
import ProjectCards from "@/components/ProjectsCard";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio.config";

const projectsPage = () => {
  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <Layers className="h-4 w-4" />
        Projects
      </Badge>
      <div className="flex flex-col gap-3 mb-16">
        <Heading>My Projects</Heading>
        <FramerWrapper y={0} x={200}>
          <p className=" font-poppins text-lg w-full text-primary max-sm:text-base">
            Developed and enhanced multiple web and mobile applications, including standalone products and responsive interfaces, utilizing technologies like React, Next.js, and React Native, while integrating cryptocurrency functionalities and optimizing performance through strategic backend development.
          </p>
        </FramerWrapper>
      </div>

      <div className=" w-full flex flex-row flex-wrap gap-3 max-lg:flex-col m-auto">
        {portfolioConfig.projects.map((val, indx) => {
          return <ProjectCards key={indx} list={val} index={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;
