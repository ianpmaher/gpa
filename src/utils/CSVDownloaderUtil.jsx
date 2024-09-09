import { GridIcon } from "@radix-ui/react-icons";

import { useCSVDownloader } from "react-papaparse";

export default function CSVDownloaderUtil({ data }) {
  const { CSVDownloader, Type } = useCSVDownloader();

  return (
    <CSVDownloader
      type={Type.Button}
      filename={"myGPA"}
      bom={true}
      config={{
        delimiter: ",",
      }}
      data={data}
    >
      <GridIcon className="w-8 h-8 center-center hover:scale-125 hover:text-sky-800 duration-200 transition-all" />
    </CSVDownloader>
  );
}
