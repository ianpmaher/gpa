const ActivitySheet = ({ className }) => {
  return (
    <div className={`${className}`}>
      <a href="https://docs.google.com/document/d/1V4oBsR17UlikNG7fA0n1-OpF7XZ6VL6Fz1V8XNfYSck/copy?usp=sharing" target="_blank">
      <h1 className="">Activity Sheet</h1>
        <iframe
          className="h-[80vh] w-[60vw] p-1 rounded-md"
          src="https://docs.google.com/document/d/1V4oBsR17UlikNG7fA0n1-OpF7XZ6VL6Fz1V8XNfYSck/pub?embedded=true"
          loading="lazy"
          sandbox=""
        ></iframe>
      </a>
    </div>
  );
};

export default ActivitySheet;
