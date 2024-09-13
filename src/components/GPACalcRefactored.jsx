import { useState, useRef } from "react";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";
import SelectMenu from "./SelectMenu"; // Assuming you have this component set up
import CSVDownloaderUtil from "../utils/CSVDownloaderUtil"; // Import the CSV downloader component
import { CopyIcon, FileTextIcon, GridIcon, MinusCircledIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import PDFDownloaderUtil from "../utils/PDFDownloaderUtil";
import PDFViewerUtil from "../utils/PDFViewerUtil";
import TooltipComponent from "./TooltipComponent";
import IconCard from "./IconCard";

registerAllModules();

const gradePointsTable = {
  AP: { 'A+': 5.3, A: 5.0, 'A-': 4.7, 'B+': 4.3, B: 4.0, 'B-': 3.7, 'C+': 3.3, C: 3.0, 'C-': 2.7, 'D+': 2.3, D: 2.0, F: 0.0 },
  H: { 'A+': 4.8, A: 4.5, 'A-': 4.2, 'B+': 3.8, B: 3.5, 'B-': 3.2, 'C+': 2.8, C: 2.5, 'C-': 2.2, 'D+': 1.8, D: 1.5, F: 0.0 },
  1: { 'A+': 4.3, A: 4.0, 'A-': 3.7, 'B+': 3.3, B: 3.0, 'B-': 2.7, 'C+': 2.3, C: 2.0, 'C-': 1.7, 'D+': 1.3, D: 1.0, F: 0.0 },
  2: { 'A+': 3.8, A: 3.5, 'A-': 3.2, 'B+': 2.8, B: 2.5, 'B-': 2.2, 'C+': 1.8, C: 1.5, 'C-': 1.2, 'D+': 0.8, D: 0.5, F: 0.0 },
  3: { 'A+': 3.3, A: 3.0, 'A-': 2.7, 'B+': 2.3, B: 2.0, 'B-': 1.7, 'C+': 1.3, C: 1.0, 'C-': 0.7, 'D+': 0.3, D: 0.2, F: 0.0 },
};

const GPACalcRefactored = ({ numRows = 3, courseData= {} }) => {
  const [tableData, setTableData] = useState(() =>
    Array.from({ length: numRows }, () => ({ ...courseData }))
  );
  const [gpa, setGpa] = useState(0);
  const [copySuccess, setCopySuccess] = useState(false);
  const [displayPDF, setDisplayPDF] = useState(false);
  const hotTableRef = useRef(null);  // Use useRef to store the Handsontable instance

  
  const isRowComplete = (row) => {
    return row.courseYear && row.courseName && row.level && row.grade && row.credits;
  };

  const calculateGPA = () => {
    const hotInstance = hotTableRef.current.hotInstance;
    const data = hotInstance.getSourceData();

    let totalQualityPoints = 0;
    let totalCredits = 0;

    const updatedData = data.map((course) => {
      if (Object.values(course).some((value) => value !== null && value !== undefined && value !== "")) {
        const gradePoints = gradePointsTable[course.level]?.[course.grade] || 0;
        const qualityPoints = gradePoints * (parseFloat(course.credits) || 0);
        // Update the course object
        const updatedCourse = { ...course, gradePoints, qualityPoints };

        if (isRowComplete(updatedCourse)) {
          totalQualityPoints += updatedCourse.qualityPoints || 0;
          totalCredits += parseFloat(updatedCourse.credits) || 0;
        }

        return updatedCourse;
      } else {
        return course;
      }
    });

    setGpa(totalCredits ? totalQualityPoints / totalCredits : 0);
    setTableData(updatedData);
  };

  const handleTableChange = (changes, source) => {
    if (changes && source !== "loadData") {
      calculateGPA();
    }
  };

  const addRow = () => {
    const newRow = {
      courseYear: '',
      courseName: '',
      level: '',
      grade: '',
      credits: '',
      gradePoints: 0,
      qualityPoints: 0,
    };
    setTableData([...tableData, newRow]);
  };

  const handleDisplayPDF = () => {
    setDisplayPDF(!displayPDF);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(gpa.toFixed(2));
    setCopySuccess(true);
    // set a timeout to remove the "copied" message
    setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
  };

  // download CSV
  const downloadCSV = () => {
    const hotInstance = hotTableRef.current?.hotInstance;
    const exportPlugin = hotInstance?.getPlugin('exportFile');
  
    exportPlugin?.downloadFile('csv', {
      bom: false,
      columnDelimiter: ',',
      columnHeaders: true,
      exportHiddenColumns: false,
      exportHiddenRows: false,
      fileExtension: 'csv',
      filename: 'myGPA_[YYYY]-[MM]-[DD]',
      mimeType: 'text/csv',
      rowDelimiter: '\r\n',
      rowHeaders: false,
    });
  };

  return (
    <div className="flex flex-col self-start justify-self-center sm:p-2">
      {/* Handsontable component */}
      <div className="flex justify-center items-center">
        <HotTable
          data={tableData}
          afterChange={handleTableChange}
          dataSchema={{
            courseYear: "",
            courseName: "",
            level: "",
            grade: "",
            credits: "",
            gradePoints: 0,
            qualityPoints: 0,
          }}
          ariaTags={false}
          colHeaders={["Year", "Course", "Level", "Grade", "Credits", "Grade Points", "Quality Points", "Actions"]}
          columns={[
            { data: "courseYear", type: "dropdown", source: ["9", "10", "11", "12"] },
            { data: "courseName", type: "text" },
            { data: "level", type: "dropdown", source: ["AP", "H", "1", "2", "3"] },
            { data: "grade", type: "dropdown", source: ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "F"] },
            { data: "credits", type: "numeric" },
            { data: "gradePoints", readOnly: true },
            { data: "qualityPoints", readOnly: true },
          ]}          
          rowHeaders={true}
          width="80vw"
          height="auto"
          colWidths={[100, 300, 100, 100, 100, 100, 100]}
          minSpareRows={0}
          licenseKey="non-commercial-and-evaluation"
          allowInsertRow={true}
          allowRemoveRow={true}
          contextMenu={['remove_row', 'redo', 'undo', 'copy', 'cut', 'paste', 'alignment', 'row_above', 'row_below']}
          className=""
          ref={hotTableRef}
        />
      </div>
      
      <div className="flex justify-around my-4">
      <button
            onClick={addRow}
            className="hover:scale-125 hover:transition-all duration-200 hover:ring-2 hover:ring-green-800 p-2 bg-green-500 text-white rounded-lg max-w-fit self-center transition-all"
          >
            <PlusCircledIcon className="h-5 w-5 center-center" />
      </button>
      </div>
      <div className=" my-6 text-lg">
        Your GPA is: &nbsp;
        <span className=" bg-paper-bg text-paper-text dark:bg-paper-text dark:text-white rounded-md p-1 text-xl font-bold mr-4">
          {gpa.toFixed(4)}
          {copySuccess && <div className="text-green-500 p-2 inline">Copied!</div>}
        </span>
        <IconCard variant="container" className="text-sm max-w-fit max-h-fit center-center inline-flex self-center">
          <TooltipComponent contentText="Copy GPA to clipboard" className="" side="top">
            <CopyIcon
              className="h-6 w-6 center-center hover:scale-125 hover:text-sky-800 duration-200 transition-all"
              onClick={handleCopy}
              aria-label="copy gpa to clipboard"
            />
          </TooltipComponent>
        </IconCard>
      </div>

      <div className="flex justify-evenly items-baseline">
        <IconCard variant="container" className="">
          <div className="text-sm text-wrap">Download for Excel / Google Sheets: &nbsp;</div>
          <button onClick={downloadCSV}>
            <GridIcon className="h-6 w-6 center-center hover:scale-125 hover:text-sky-800 duration-200 transition-all" onClick={downloadCSV} />
          </button>
        </IconCard>
        </div>
        {/* PDF Download Button

        {/* <IconCard variant="container" className="">
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
      </div> */}
      {/* {displayPDF && <PDFViewerUtil data={formatCSVData()} gpa={gpa} />} */}
    </div>
  );
};

export default GPACalcRefactored;