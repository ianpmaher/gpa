import Nav from "./Nav";

const Header = (props) => {
  return (
    <header id="top" className={props.className}>
      {/* <div className="  rounded-2xl px-1 md:px-3 py-1 w-fit">
                <h1 className=" text-3xl md:text-5xl">Ian Maher</h1>
                <h2 className=" text-2xl md:text-3xl">Full Stack Developer & Education Advocate</h2>
            </div> */}
      <div className="absolute top-1 mx-auto my-0 flex md:flex-col justify-around gap-1 bg-transparent">
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-4 gap-2 xl:py-0">
          <Nav className="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
