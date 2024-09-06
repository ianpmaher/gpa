import { DownloadIcon } from "@radix-ui/react-icons";
import { useCSVDownloader } from "react-papaparse";

export default function CSVDownloaderUtil({ data }) {
  const { CSVDownloader, Type } = useCSVDownloader();

  return (
    <CSVDownloader
      type={Type.Button}
      filename={"myGPA.csv"}
      bom={true}
      config={{
        delimiter: ",",
      }}
      data={data}
    >
      <DownloadIcon className="w-8 h-8 center-center hover:scale-150 duration-200 transition-all" />
    </CSVDownloader>
  );
}
