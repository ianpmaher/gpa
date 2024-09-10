import Footer from "../components/Footer";
import GPACalculator from "../components/GPACalculator";
import { seniorInitialCourses } from "../utils/InitialCourses";

const ImportPage = () => {
  return (
    <div>
      <div className="w-full h-screen bg-nauticalGradient dark:bg-gradientDark bg-fixed">
        <div className="dark:bg-dracula-bg bg-paper-bg bg-opacity-90 rounded-2xl text-paper-text dark:text-dracula-text text-center min-h-[90vh] flex flex-col w-[90vw] my-0 mx-auto">
          <div className="flex flex-col justify-center "></div>
          <div className="mx-auto my-0 center-center text-center">
            <h1 className="text-2xl font-bold text-black dark:text-white p-2 mt-4">Import CSV</h1>
            <table className="min-w-fit mx-auto my-2 text-md table-auto  border-2 border-gray-700">
              <thead>
                <tr className="border border-paper-text font-extrabold">
                  <th className="border border-paper-text w-1/12 dark:bg-white dark:text-black bg-black text-white italic font-mono">
                    header
                  </th>
                  <th className="border border-paper-text w-1/12">courseYear</th>
                  <th className="border border-paper-text w-1/12">courseName</th>
                  <th className="border border-paper-text w-1/12">level</th>
                  <th className="border border-paper-text w-1/12">grade</th>
                  <th className="border border-paper-text w-1/12">credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-paper-text ">
                  <th className="border border-paper-text w-1/12 dark:bg-white dark:text-black bg-black text-white italic font-mono">
                    e.g.
                  </th>
                  <th className="border border-paper-text w-1/12">9</th>
                  <th className="border border-paper-text w-1/12 font-medium">Visual Design</th>
                  <th className="border border-paper-text w-1/12">1</th>
                  <th className="border border-paper-text w-1/12">A-</th>
                  <th className="border border-paper-text w-1/12">5</th>
                </tr>
              </tbody>
            </table>
            <div className=" outline outline-4 outline-nautical-blueDark h-full md:w-full mx-auto my-4 self-center flex justify-center rounded-md">
              <GPACalculator courseData={seniorInitialCourses} numRows={7} />
            </div>
          </div>
          <Footer className="fixed bottom-0 right-0 bg-dracula-blue text-black p-1 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ImportPage;
