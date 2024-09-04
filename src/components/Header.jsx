import Contact from "../components/Contact";
import IconCard from "../components/IconCard";

const Header = (props) => {
  return (
    <header id="top" className={props.className}>
      {/* <div className="  rounded-2xl px-1 md:px-3 py-1 w-fit">
                <h1 className=" text-3xl md:text-5xl">Ian Maher</h1>
                <h2 className=" text-2xl md:text-3xl">Full Stack Developer & Education Advocate</h2>
            </div> */}
      <div className="absolute top-3 mx-auto my-0 flex md:flex-col justify-around gap-2">
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-4 gap-2 xl:py-0">
          <a href="/" className="">
            <IconCard variant="text">home</IconCard>
          </a>
          <a href="/blog" className="">
            <IconCard variant="text">blog</IconCard>
          </a>
          <a href="/keyboards" className="">
            <IconCard variant="text">keyboards</IconCard>
          </a>
        </div>
        <div className="mx-auto my-0 flex md:flex-row gap-3">
          <Contact />
        </div>
      </div>
      {/* <Navbar /> */}
      {/* <NewNavMenu className="fixed top-[5vh] flex flex-col gap- md:text-lg" /> */}
    </header>
  );
};

export default Header;
