import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";

// register Handsontable's modules
registerAllModules();

const hotData = [
  ["", "Tesla", "Volvo", "Toyota", "Honda"],
  ["2020", 10, 11, 12, 13],
  ["2021", 20, 11, 14, 13],
  ["2022", 30, 15, 12, 13],
];

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

const HotTableTest = (props) => {
  return (
    <div className="flex flex-col justify-center">
      <div id="hot-app">
        <HotTable
          data={[
            ["Year", "Course", "Grade", "Credits", "Grade Points", "Quality Points"],
            ["9th", props.data.courseName, props.data.courseGrade, props.data.courseCredit],
            // TODO: add columns for grade points and quality points calculations
            ["10th", props.data.courseName, props.data.courseGrade, props.data.courseCredit],
            ["11th", props.data.courseName, props.data.courseGrade, props.data.courseCredit],
            ["12th", props.data.courseName, props.data.courseGrade, props.data.courseCredit],
          ]}
          colHeaders={true}
          rowHeaders={true}
          width="900"
          height="900"
          licenseKey="non-commercial-and-evaluation"
        />
      </div>
    </div>
  );
};

export default HotTableTest;
