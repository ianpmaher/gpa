const ActivitySheet = ({ className }) => {
  return (
    <div className={`${className}`}>
      <a
        href="https://docs.google.com/document/d/1V4oBsR17UlikNG7fA0n1-OpF7XZ6VL6Fz1V8XNfYSck/copy?usp=sharing"
        target="_blank"
        className=""
      >
        <h1 className="">Senior Activity Sheet (Brag Sheet)</h1>
        <div className="flex justify-center items-center">
          <div className="">
            <iframe border="1px solid black" className="mt-3 h-[50vh] w-[90vw] md:h-[600px] md:w-[700px]" src="https://f005.backblazeb2.com/file/ianpmaher/_Senior+Activity+Sheet_.pdf"></iframe>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ActivitySheet;
