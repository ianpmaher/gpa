import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ImportPage from "./pages/ImportPage";
import ThemeMode from "./components/ThemeMode";
import SeniorsPage from "./pages/SeniorsPage";
import UpperclassmenPage from "./pages/UpperclassmenPage";
import Nav from "./components/Nav";
import HotTablePage from "./pages/HotTablePage";

function App() {
  return (
    <>
      <main className="font-sans">
        <header className=" relative rounded-b-md py-2 px-1 dark:bg-dev-midnight bg-primary-peach ">
          <Nav className=" inline" />
          <div className="flex justify-end absolute top-2 right-2 z-50 rounded-md dark:bg-nautical-blueDark bg-primary-peach">
            <ThemeMode className="m-0" />
          </div>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/10through12" element={<UpperclassmenPage />} />
          <Route path="/seniors" element={<SeniorsPage />} />
          <Route path="/import" element={<ImportPage />} />
          <Route path="/table" element={<HotTablePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
