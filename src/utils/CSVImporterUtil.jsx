import { useCSVReader } from "react-papaparse";
import { FileIcon } from "@radix-ui/react-icons";
import gradePointsTable from "./gradePointsTable";

const CSVImporterUtil = ({ onCSVImport }) => {
  const { CSVReader } = useCSVReader();

  const handleUploadAccepted = (results) => {
    // Format CSV data and calculate grade points and quality points
    const formattedData = results.data.slice(1).map((row) => {
      const [courseYear, courseName, level, grade, credits] = row;

      // Convert credits to number
      const parsedCredits = parseFloat(credits);

      // Calculate grade points based on level and grade
      const gradePoints = gradePointsTable[level]?.[grade] || 0;

      // Calculate quality points (gradePoints * credits)
      const qualityPoints = gradePoints * parsedCredits;

      return {
        courseYear: courseYear.toString(), // Default to "N/A"
        courseName: courseName, // Ensure courseName is a string
        level: level, // Ensure level is a number
        grade: grade, // Ensure grade is a number
        credits: parsedCredits, // Ensure credits are a number
        gradePoints: gradePoints, // Already a number
        qualityPoints: qualityPoints, // Already a number
      };
    });

    // Pass the formatted data to the parent component (GPACalculator)
    onCSVImport(formattedData);
  };

  return (
    <CSVReader onUploadAccepted={handleUploadAccepted}>
      {({ getRootProps, acceptedFile }) => (
        <div>
          {" "}
          <button {...getRootProps()} className="">
            {" "}
            <FileIcon className="w-8 h-8 center-center hover:scale-125 hover:text-sky-800 duration-200 transition-all" />{" "}
          </button>{" "}
          {acceptedFile && <div className="mt-2">File: {acceptedFile.name}</div>}{" "}
        </div>
      )}
    </CSVReader>
  );
};

export default CSVImporterUtil;
