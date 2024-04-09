const SkillCard = ({ skill, svg }: { skill: string; svg: string }) => {
  return (
    <div className="bg-gray-100 m-3 sm:m-2 lg:m-4 xl:m-5 hover:border hover:border-black w-32 sm:w-36 md:w-40  h-28 rounded-lg flex justify-center items-center">
      <div>
        <div className="md:text-xl">{skill}</div>
        <div
          className="h-6 w-6 m-auto mt-2"
          dangerouslySetInnerHTML={{ __html: svg }}
        ></div>
      </div>
    </div>
  );
};

export default SkillCard;
