const Navbar = ({ className }: { className: string }) => {
  const navList = ["Home", "Skills", "Projects", "About", "Contact"];

  return (
    <div
      className={`md:flex md:justify-between md:px-6 items-center  fixed md:top-0 md:bg-opacity-100 md:rounded-none bg-[#4D403D] py-5 text-white bg-opacity-70 text-md h-16 font-semibold ${className}`}
    >
      <div className="hidden md:block mr-7">Amit verma</div>
      <div className="flex justify-around md:justify-between md:space-x-10 items-center">
        {navList.map((navItem) => (
          <div key={navItem}>
            <a href={navItem === "Home" ? "#" : `#${navItem}`}>{navItem}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
