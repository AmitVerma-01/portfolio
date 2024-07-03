import { useEffect } from "react";
import { skills } from "../assets/skills";
import SkillCard from "../components/SkillCard";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const container1 = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const Skill = () => {
  const controls = useAnimation();
const { ref, inView } = useInView({
  // triggerOnce: true, 
  threshold: 0.5, 
});
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div id="Skills" className="md:h-[calc(100vh-64px)] md:pt-5 w-full">
      <div className="mt-16 Skills">
        <div className="text-3xl font-bold text-center">Skills</div>
        <p className="text-center md:mt-5 ">My skills</p>
      </div>
      <motion.div 
      ref={ref}
      variants={container1}
      initial='hidden'
      animate={controls}
      className="container1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 p-7 sm:p-10 md:p-14 xl:px-32  lg:p-16 lg:grid-cols-5 xl:grid-cols-6 items-center justify-items-center">
        {skills.map((skill,i) => (
          <motion.div className="item"
          variants={item}
          key={i}>
          <SkillCard
            skill={skill.skillName}
            svg={skill.svg}
            key={skill.skillName}
          />
          </motion.div>
        ))}

      </motion.div>
    </div>
  );
};

export default Skill;
