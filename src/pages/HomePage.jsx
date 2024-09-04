import GPACalculator from "../components/GPACalculator";

const HomePage = () => {
  return (
    <div className="dark:bg-dracula-bg bg-paper-bg bg-opacity-90 rounded-2xl text-paper-text dark:text-dracula-text font-karla text-center min-h-screen flex flex-col max-w-[99vw] my-0 mx-auto">
      <div className="mx-auto my-0 center-center text-center">
        <div className="bg-paper-bg text-paper-text h-full md:w-full mx-auto my-8 self-center flex justify-center rounded-md">
          <GPACalculator />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
