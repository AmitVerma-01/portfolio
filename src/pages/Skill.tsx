import { skills } from "../assets/skills";
import SkillCard from "../components/SkillCard";

const Skill = () => {
  return (
    <div id="Skills" className="md:h-[calc(100vh-64px)] md:pt-5 w-full">
      <div className="mt-16 Skills">
        <div className="text-3xl font-bold text-center">Skills</div>
        <p className="text-center md:mt-5 ">My skills</p>
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-7 sm:p-10 md:p-14 xl:px-32  lg:p-16 lg:grid-cols-5 xl:grid-cols-6 items-center justify-items-center">
        {skills.map((skill) => (
          <SkillCard
            skill={skill.skillName}
            svg={skill.svg}
            key={skill.skillName}
          />
        ))}
      </div>
    </div>
  );
};

export default Skill;
