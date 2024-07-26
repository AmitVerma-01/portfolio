import { motion } from "framer-motion";

const container1 = {
  hidden: { opacity: 1, scale: 0 },
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

const Navbar = ({ className }: { className: string }) => {
  const navList = ["Home", "Skills", "Projects", "About", "Contact"];

  return (
    <div
      className={`md:flex md:justify-between md:px-6 items-center z-30  fixed md:top-0 md:bg-opacity-100 md:rounded-none bg-[#4D403D]/50 py-4 text-white bg-opacity-70 text-md h-14 md:h-16 font-semibold ${className}`}
    >
      <div className="hidden md:block mr-7 font-bold text-2xl">Amit Verma</div>
      <motion.div
        variants={container1}
        initial="hidden"
        animate="visible"
       className="flex justify-around md:justify-between md:space-x-10 items-center container1">
        {navList.map((navItem) => (
          <motion.div key={navItem} className="item" variants={item}>
            <a href={navItem === "Home" ? "#" : `#${navItem}`}>{navItem}</a>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default Navbar;
