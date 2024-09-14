import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const pages = [
  {
    title: "home",
    destination: "/",
  },
  {
    title: "I already know my GPA",
    destination: "/10through12",
  },
  {
    title: "12th",
    destination: "/seniors",
  },
  {
    title: "import-csv",
    destination: "/import",
  },
  {
    title: "table",
    destination: "/table",
  },
];

const Nav = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const variant = {
    open: { opacity: 1, x: "-50%", scale: 1 },
    closed: { opacity: 1, x: 0, scale: 1 },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${className} flex flex-row items-center justify-center center-center gap-3`}>
      {/* Hamburger Menu for Small Screens */}
      <motion.div className="md:hidden flex justify-center w-screen items-center center-center"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={variant}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <button onClick={toggleMenu} className="text-white hover:text-gray-50 focus:outline-white">
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="#fff"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </motion.div>

      {/* Menu Links */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex flex flex-row items-center gap-2 md:gap-6 p-[0.1rem] md:p-0 md:max-w-[50vw] justify-center center-center`}
      >
        {pages.map((page) => (
          <div
            key={page.destination}
            className="sm:max-w-24 max-w-12 outline text-center h-full text-xs p-[0.05rem] bg-transparent dark:hover:bg-nautical-accent hover:bg-nautical-blueLight md:text-sm text-white hover:text-black rounded-sm transition-all duration-100 ease-in-out"
          >
            <Link to={page.destination} className="">
              {page.title}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
