import Footer from "../components/Footer";
import GPACalculator from "../components/GPACalculator";

const HomePage = () => {
  return (
    <div className="w-full h-screen bg-nauticalGradient dark:bg-gradientDark bg-fixed">
      <div className="dark:bg-dracula-bg bg-paper-bg bg-opacity-90 rounded-2xl text-paper-text dark:text-dracula-text font-karla text-center min-h-[90vh] flex flex-col w-[90vw] my-0 mx-auto">
        <div className="flex flex-col justify-center "></div>
        <div className="mx-auto my-0 center-center text-center">
          <h1 className="text-3xl font-bold text-black dark:text-white p-2 mt-4">Calculate your GPA</h1>
          <div className=" outline outline-4 outline-nautical-blueDark h-full md:w-full mx-auto my-4 self-center flex justify-center rounded-md">
            <GPACalculator />
          </div>
        </div>
        <Footer className="fixed bottom-0 right-0 bg-dracula-blue text-black p-1 rounded-lg" />
      </div>
    </div>
  );
};

export default HomePage;
