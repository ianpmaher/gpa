import { useState } from "react";
import SelectMenu from "./SelectMenu"; // Assuming you have this component set up
import CSVDownloaderUtil from "../utils/CSVDownloaderUtil"; // Import the CSV downloader component
import { CopyIcon, FileTextIcon, MinusCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import PDFDownloaderUtil from "../utils/PDFDownloaderUtil";
import PDFViewerUtil from "../utils/PDFViewerUtil";
import TooltipComponent from "./TooltipComponent";
import IconCard from "./IconCard";
// import CSVImporterUtil from "../utils/CSVImporterUtil";
import { initialCourses } from "../utils/InitialCourses";

const gradePointsTable = {
  AP: {
    "A+": 5.3,
    A: 5.0,
    "A-": 4.7,
    "B+": 4.3,
    B: 4.0,
    "B-": 3.7,
    "C+": 3.3,
    C: 3.0,
    "C-": 2.7,
    "D+": 2.3,
    D: 2.0,
    F: 0.0,
  },
  H: {
    "A+": 4.8,
    A: 4.5,
    "A-": 4.2,
    "B+": 3.8,
    B: 3.5,
    "B-": 3.2,
    "C+": 2.8,
    C: 2.5,
    "C-": 2.2,
    "D+": 1.8,
    D: 1.5,
    F: 0.0,
  },
  1: {
    "A+": 4.3,
    A: 4.0,
    "A-": 3.7,
    "B+": 3.3,
    B: 3.0,
    "B-": 2.7,
    "C+": 2.3,
    C: 2.0,
    "C-": 1.7,
    "D+": 1.3,
    D: 1.0,
    F: 0.0,
  },
  2: {
    "A+": 3.8,
    A: 3.5,
    "A-": 3.2,
    "B+": 2.8,
    B: 2.5,
    "B-": 2.2,
    "C+": 1.8,
    C: 1.5,
    "C-": 1.2,
    "D+": 0.8,
    D: 0.5,
    F: 0.0,
  },
  3: {
    "A+": 3.3,
    A: 3.0,
    "A-": 2.7,
    "B+": 2.3,
    B: 2.0,
    "B-": 1.7,
    "C+": 1.3,
    C: 1.0,
    "C-": 0.7,
    "D+": 0.3,
    D: 0.2,
    F: 0.0,
  },
};

// no longer needed, imported from utils/InitialCourses.jsx
// const initialCourse = {
//   courseYear: "",
//   courseName: "",
//   level: "",
//   grade: "",
//   credits: "",
//   gradePoints: 0,
//   qualityPoints: 0,
// };

const GPACalculator = (props) => {
  const [courses, setCourses] = useState(Array(props.numRows).fill({ ...props.courseData }));
  const [gpa, setGpa] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);
  const [displayPDF, setDisplayPDF] = useState(false);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    updateCourse(index, name, value);
  };

  const handleSelectChange = (index, name, value) => {
    updateCourse(index, name, value);
  };

  const updateCourse = (index, name, value) => {
    const updatedCourses = courses.map((course, i) => {
      if (i === index) {
        const updatedCourse = { ...course, [name]: value };
        const gradePoints = gradePointsTable[updatedCourse.level]?.[updatedCourse.grade] || 0;
        const qualityPoints = gradePoints * (updatedCourse.credits || 0);
        return { ...updatedCourse, gradePoints, qualityPoints };
      }
      return course;
    });
    setCourses(updatedCourses);
    calculateGPA(updatedCourses);
  };

  const calculateGPA = (courses) => {
    let totalQualityPoints = 0;
    let totalCredits = 0;
    courses.forEach((course) => {
      // Only factor in rows that have valid values
      if (course.level && course.grade && course.credits) {
        totalQualityPoints += course.qualityPoints || 0;
        totalCredits += parseFloat(course.credits) || 0;
      }
    });

    setGpa(totalCredits ? totalQualityPoints / totalCredits : 0);
  };

  const addRow = () => {
    setCourses([...courses, { ...initialCourses }]);
  };

  const removeRow = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
    calculateGPA(updatedCourses);
  };

  // CSV import handler
  // const handleCSVImport = (importedCourses) => {
  //   setCourses(importedCourses);
  // };

  const handleCopy = () => {
    navigator.clipboard.writeText(gpa.toFixed(2));
    setCopySuccess(true);
    // set a timeout to remove the "copied" message
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  // Format data for CSV download
  const formatCSVData = () => {
    return courses.map((course) => ({
      CourseYear: course.courseYear || "N/A",
      CourseName: course.courseName || "N/A",
      Level: course.level || "N/A",
      Grade: course.grade || "N/A",
      Credits: course.credits || "N/A",
      GradePoints: course.gradePoints.toFixed(2),
      QualityPoints: course.qualityPoints.toFixed(2),
    }));
  };

  const handleDisplayPDF = () => {
    setDisplayPDF(!displayPDF);
  };

  return (
    <div className="flex flex-col self-start justify-self-center sm:p-2">
      <table className="table-auto border-collapse mt-6 min-w-fit md:w-[80vw]">
        <thead className=" text-wrap">
          <tr>
            <th>Year</th>
            <th>Class</th>
            <th>Level</th>
            <th>Grade</th>
            <th>Credits</th>
            <th>Grade Points</th>
            <th>Quality Points</th>
            <th className="text-red-500">Remove Row</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {courses.map((course, index) => (
            <tr key={index} className="odd:bg-opacity-50 odd:bg-dracula-purple">
              <td className="border border-paper-text">
                <SelectMenu
                  data={["9", "10", "11", "12"]}
                  selected={course.courseYear}
                  onChange={(value) => handleSelectChange(index, "courseYear", value)}
                />
              </td>

              <td className="border border-paper-text w-1/2">
                <input
                  type="text"
                  name="courseName"
                  value={course.courseName}
                  placeholder="English 9, Math 9, etc."
                  onChange={(event) => handleInputChange(index, event)}
                  className="bg-paper-sub text-black placeholder:text-gray-500 dark:bg-paper-main dark:text-paper-bg bg-opacity-60 w-full md:h-auto text-center focus:bg-sky-200 text-sm md:text-md text-wrap"
                />
              </td>
              <td className="border border-paper-text">
                <SelectMenu
                  data={["AP", "H", "1", "2", "3"]}
                  selected={course.level}
                  onChange={(value) => handleSelectChange(index, "level", value)}
                />
              </td>
              <td className="border border-paper-text">
                <SelectMenu
                  data={Object.keys(gradePointsTable[course.level] || {})}
                  selected={course.grade}
                  onChange={(value) => handleSelectChange(index, "grade", value)}
                />
              </td>
              <td className="border border-paper-text w-1/12">
                <SelectMenu
                  data={["2.5", "5", "6"]}
                  selected={course.credits.toString()}
                  onChange={(value) => handleSelectChange(index, "credits", parseFloat(value))}
                />
              </td>
              <td className="border border-paper-text w-1/12">{course.gradePoints.toFixed(2)}</td>
              <td className="border border-paper-text w-1/12">{course.qualityPoints.toFixed(2)}</td>
              <td className="border border-paper-text w-1/12">
                <button
                  onClick={() => removeRow(index)}
                  className="py-1 text-red-500 hover:outline rounded-sm transition-all hover:scale-125 duration-100"
                >
                  <MinusCircledIcon className="h-5 w-5 center-center" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="relative mt-3">
        <TooltipComponent contentText="Add a new row to input more courses">
          <div
            onClick={addRow}
            className="hover:scale-125 hover:transition-all duration-200 hover:ring-2 hover:ring-green-800 p-2 bg-green-500 text-white rounded-lg max-w-fit self-center transition-all"
          >
            <PlusCircledIcon className="h-5 w-5 center-center" />
          </div>
        </TooltipComponent>
      </div>
      <div className=" mt-4 text-lg">
        Your GPA is: &nbsp;
        <span className=" bg-paper-bg text-paper-text dark:bg-paper-text dark:text-white rounded-md p-1 text-xl font-bold mr-4">
          {gpa.toFixed(2)}
          {copySuccess && <div className="text-green-500 p-2 inline">Copied!</div>}
        </span>
        <IconCard variant="container" className="text-sm max-w-fit max-h-fit center-center inline-flex self-center">
          <TooltipComponent contentText="Copy GPA to clipboard" className="">
            <CopyIcon
              className="h-6 w-6 center-center hover:scale-125 hover:text-sky-800 duration-200 transition-all"
              onClick={handleCopy}
              aria-label="copy gpa to clipboard"
            />
          </TooltipComponent>
        </IconCard>
      </div>

      {/* CSV Download Button */}
      {/* <div className="flex justify-around items-baseline my-10">
        <IconCard variant="container" className="">
          <div className="text-sm text-wrap">Import CSV: &nbsp;</div>
          <CSVImporterUtil onCSVImport={handleCSVImport} />
        </IconCard>
      </div> */}
      <div className="flex justify-evenly items-baseline">
        <IconCard variant="container" className="">
          <div className="text-sm text-wrap">Download for Excel / Google Sheets: &nbsp;</div>
          <CSVDownloaderUtil data={formatCSVData()} />
        </IconCard>
        {/* PDF Download Button */}
        <IconCard variant="container" className="">
          <div className="text-sm mt-">Download as a PDF: &nbsp;</div>
          <PDFDownloaderUtil data={formatCSVData()} gpa={gpa} />
        </IconCard>
        <IconCard variant="container" className="text-sm">
          View as a PDF: &nbsp;
          <FileTextIcon
            onClick={handleDisplayPDF}
            className="center-center w-8 h-8 center-center hover:scale-125 hover:text-sky-800 duration-200 transition-all"
          />
        </IconCard>
      </div>
      {displayPDF && <PDFViewerUtil data={formatCSVData()} gpa={gpa} />}
    </div>
  );
};

export default GPACalculator;
