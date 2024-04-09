const Home = () => {
  return (
    <div
      id="main"
      className="bg-[#4D403D] md:pt-16 w-full h-screen overflow-hidden flex justify-center items-center flex-col md:flex-row"
    >
      <div className=" p-5 h-1/2 md:w-1/2 md:h-full flex justify-center flex-col items-center w-full">
        <h1 className="text-white text-2xl md:text-5xl font-bold text-center">
          Amit Verma - Full Stack Developer
        </h1>
        <p className="text-white text-sm md:text-md p-5">
          I am a Full Stack Developer with 2 years of experience in building web
          applications. I specialize in JavaScript and have professional
          experience working with React, Node, and Express. I am also familiar
          with TypeScript, GraphQL, and MongoDB. I am passionate about learning
          new technologies and building products that provide value to users. I
          am currently looking for new opportunities to work on exciting
          projects.{" "}
        </p>
        <div className="mt-5">
          <button className="px-5 mx-2 py-3 rounded-md text-white border border-white">
            {" "}
            Resume{" "}
          </button>
          <button className="bg-white mx-2 px-5 py-3 rounded-md">
            <a href="#Contact"> Contact </a>
          </button>
        </div>
      </div>
      <div className="h-1/2 md:h-full  md:w-1/2 flex justify-center items-center w-full">
        <img
          src="https://res.cloudinary.com/detcorvmf/image/upload/f_auto,q_auto/v1/Portfolio/yaya"
          className="h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
