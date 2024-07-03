import ProjectCard from "../components/ProjectCard";
import { projectArray } from "../projectDetailed";
const Projects = () => {
  return (
    <div id="Projects" className="lg:h-screen h-fit pt-16">
      <div className="text-3xl font-bold text-center pb-3 ">Projects</div>
      <div className="grid lg:grid-cols-2">
        {projectArray.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
