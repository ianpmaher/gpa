import Footer from "../components/Footer";
import ActivitySheet from "../components/ActivitySheet";
import TooltipComponent from "../components/TooltipComponent";
import { OpenInNewWindowIcon } from "@radix-ui/react-icons";

const SeniorsPage = () => {
  return (
    <div className="w-full h-screen bg-nauticalGradient dark:bg-gradientDark bg-fixed">
      <div className="dark:bg-dracula-bg bg-paper-bg bg-opacity-90 rounded-2xl text-paper-text dark:text-dracula-text text-center min-h-[90vh] flex flex-col w-[90vw] my-0 mx-auto">
        <div className="mx-auto my-0 center-center text-center">
          <div className="relative w-[90vw] flex flex-col-reverse mt-8 md:m-0">
            <div className="flex md:w-full center-center">
              <div className=" outline outline-4 outline-nautical-blueDark h-full md:w-full mx-auto my-4 self-center flex justify-center rounded-md">
                <ActivitySheet className="w-full" />
              </div>
            </div>
            <div className="md:absolute md:top-[10%] md:right-[10%] ">
              <TooltipComponent
                contentText="Click here to open in a new tab and make a copy 📄"
                className="text-xl text-wrap"
                side="top"
              >
                <a
                  href="https://docs.google.com/document/d/1V4oBsR17UlikNG7fA0n1-OpF7XZ6VL6Fz1V8XNfYSck/copy?usp=sharing"
                  target="_blank"
                  className=""
                >
                  <OpenInNewWindowIcon className="w-16 h-16 center-center center-center hover:scale-125 hover:text-green-800 duration-200 transition-all" />
                </a>
              </TooltipComponent>
            </div>
          </div>
        </div>
        <Footer className="fixed bottom-0 right-0 bg-dracula-blue text-black p-1 rounded-lg" />
      </div>
    </div>
  );
};

export default SeniorsPage;
