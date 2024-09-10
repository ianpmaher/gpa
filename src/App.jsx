import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ImportPage from "./pages/ImportPage";
import ThemeMode from "./components/ThemeMode";
import SeniorsPage from "./pages/SeniorsPage";

function App() {
  return (
    <>
      <main className="font-sans">
        <header className="fixed top-0 right-0 z-50 rounded-b-md dark:bg-primary-prussian bg-primary-peach">
          <ThemeMode className="m-0" />
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/seniors" element={<SeniorsPage />} />
          <Route path="/import" element={<ImportPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
