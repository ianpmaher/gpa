import Footer from "../components/Footer";
import GPACalcRefactored from "../components/GPACalcRefactored";
// import GoogleSheets from "../components/GoogleSheets";
import GPACalculator from "../components/GPACalculator";
import HotTableTest from "../components/HotTableTest";
import { initialCourses } from "../utils/InitialCourses";

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-nautical-blueDark dark:bg-dev-midnight bg-fixed">
      <div className="dark:bg-dev-midnight bg-paper-bg bg-opacity-90 rounded-2xl text-paper-text dark:text-dracula-text text-center min-h-[90vh] flex flex-col w-[90vw] my-0 mx-auto">
        <div className="flex flex-col justify-center "></div>
        <div className="mx-auto my-0 center-center text-center">
          <h1 className="text-3xl font-bold text-black dark:text-white p-2 mt-4">Calculate your GPA</h1>
          <div className=" outline outline-4 outline-nautical-blueDark h-full md:w-full mx-auto my-4 self-center flex justify-center rounded-md">
            {/* <GPACalculator courseData={initialCourses} numRows={7} /> */}
            <GPACalcRefactored courseData={["9", "pottery", 1, "A", 5]} />
          </div>
          {/* <div className=" outline outline-4 outline-nautical-blueDark h-full md:w-full mx-auto my-4 self-center flex justify-center rounded-md">
            <GoogleSheets />
          </div> */}
        </div>
        <Footer className="fixed bottom-0 right-0 bg-dracula-blue text-black p-1 rounded-lg" />
      </div>
    </div>
  );
};

export default HomePage;
