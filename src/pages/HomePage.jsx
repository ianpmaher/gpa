import Footer from "../components/Footer";
import GPACalculator from "../components/GPACalculator";
// import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="w-full h-screen waves-maroon">
      <div className="dark:bg-dracula-bg bg-paper-bg bg-opacity-90 rounded-2xl text-paper-text dark:text-dracula-text font-karla text-center h-[80vh] flex flex-col w-[90vw] my-0 mx-auto">
        {/* <div className="flex flex-col justify-center ">
        <Header className="flex flex-col items-center justify-center mx-auto my-2 gap-4" />
        </div> */}
        <div className="mx-auto my-0 center-center text-center">
          <div className="bg-paper-bg text-paper-text h-full md:w-full mx-auto my-8 self-center flex justify-center rounded-md">
            <GPACalculator />
          </div>
        </div>
        <Footer className="fixed bottom-0 right-0 bg-dracula-blue text-black p-1 rounded-lg" />
      </div>
    </div>
  );
};

export default HomePage;
