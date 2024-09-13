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

const HotTableTest = () => {
  return (
    <div className="flex flex-col justify-center">
      <div id="hot-app">
        <HotTable
          data={hotData}
          colHeaders={true}
          rowHeaders={true}
          width="600"
          height="300"
          licenseKey="non-commercial-and-evaluation"
        />
      </div>
    </div>
  );
};

export default HotTableTest;
