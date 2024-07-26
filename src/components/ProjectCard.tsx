import { FaGithubAlt } from "react-icons/fa6";
import { RxResume } from "react-icons/rx";

interface Props {
  name: string;
  description: string;
  img: string;
  github: string;
  link: string;
}

const ProjectCard = (props: Props) => {
  return (
    <div className="">
      <div className="bg-[#4D403D]/10 md:flex justify-between items-center hover:border hover:border-black rounded-lg shadow-lg p-4 m-4">
        <div className="md:w-52 md:h-40 flex justify-center items-center">
          <img
            src={`/${props.img}.png`}
            alt="project img"
            className="rounded-lg w-full "
          />
        </div>
        <div className=" md:w-1/2">
          <h2 className="text-xl font-bold">{props.name}</h2>
          <p className="text-gray-600  h-28">
            {props.description.slice(0, 150)}
            <a href="" className="text-blue-600">
              <span className="underline"> learn more</span>...
            </a>
          </p>
        </div>
        <div className="space-y-1 flex md:flex-col  justify-around items-center">
          <a href={props.github} target="_blank">
            <button className="border hover:text-white flex justify-around items-center w-28 border-black gap-x-1 hover:bg-[#4D403D] rounded-lg p-2">
              <FaGithubAlt className="" /> Github
            </button>
          </a>
          <a href={props.link} target="_blank">
            <button className="border border-black rounded-lg p-2 flex justify-around w-28 items-center gap-x-1">
              <RxResume /> Live demo
            </button>
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
