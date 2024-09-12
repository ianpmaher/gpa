import CumulativeGPACalc from "../components/CumulativeGPACalc";

const UpperclassmenPage = () => {
  return (
    <div>
      <h1>Upperclassmen Page</h1>
      <div className="mx-auto my-0 center-center text-center">
          <h1 className="text-3xl font-bold text-black dark:text-white p-2 mt-4">Calculate your GPA</h1>
          <div className=" outline outline-4 outline-nautical-blueDark h-full md:w-full mx-auto my-4 self-center flex justify-center rounded-md">
            <CumulativeGPACalc numRows={7} />
          </div>
        </div>

    </div>
  );
}

export default UpperclassmenPage;