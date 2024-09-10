import { Link } from "react-router-dom";

const pages = [
  {
    title: "home",
    destination: "/",
  },
  {
    title: "about",
    destination: "/about",
  },
  {
    title: "12th",
    destination: "/seniors",
  },
  {
    title: "import-csv",
    destination: "/import",
  },
];

const Nav = ({ className }) => {
  return (
    <nav className={`${className} flex items-center justify-center gap-6`}>
      {pages.map((page) => (
        <div key={page.destination} className="p-[0.1rem] bg-transparent dark:hover:bg-nautical-accent hover:bg-nautical-blueLight text-sm text-white hover:text-black rounded-sm transition-all duration-50 ease-in-out">
          <Link
            to={page.destination}
            className=" "
          >
            {page.title}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Nav;
