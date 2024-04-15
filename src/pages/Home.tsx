const Home = () => {
  return (
    <div
      id="main"
      className="bg-[#4D403D] pt-5 md:pt-16 w-full max-h-screen md:h-screen overflow-hidden flex justify-center items-center flex-col md:flex-row"
    >
      <div className=" h-[50vh]  md:w-1/2 md:h-full flex justify-center flex-col items-center w-full">
        <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-bold text-center md:px-4">
          Amit Verma - Full Stack Developer
        </h1>
        <p className="text-white text-sm md:text-md p-2 md:p-5">
          I am a Full Stack Developer with 2 years of experience in building web
          applications. I specialize in JavaScript and have professional
          experience working with React, Node, and Express. I am also familiar
          with TypeScript, GraphQL, and MongoDB. I am passionate about learning
          new technologies and building products that provide value to users. I
          am currently looking for new opportunities to work on exciting
          projects.{" "}
        </p>
        <div className="mt-2 md:mt-5">
          <button className="px-4 md:px-5 hover:bg-white hover:text-black md:py-3 mx-2 py-2 m rounded-md text-white border border-white">
            {" "}
            Resume{" "}
          </button>
          <button className="bg-white mx-2 px-4 py-2 md:px-5 md:py-3 rounded-md hover:bg-transparent hover:text-white border">
            <a href="#Contact"> Contact </a>
          </button>
        </div>
      </div>
      <div className="max-h-[50vh] md:min-h-full  md:w-1/2 flex justify-center  w-full">
        <img
          src="https://res.cloudinary.com/detcorvmf/image/upload/f_auto,q_auto/v1/Portfolio/yaya"
          className="h-screen md:h-screen"
          alt="hero-image"
        />
      </div>
    </div>
  );
};

export default Home;
