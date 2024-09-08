import HomePage from "./pages/HomePage";
import ThemeMode from "./components/ThemeMode";

function App() {
  return (
    <>
      <main className="font-inter">
        <header className="fixed top-0 right-0 z-50 rounded-b-md dark:bg-primary-prussian bg-primary-peach">
          <ThemeMode className="m-0" />
        </header>
        <HomePage />
      </main>
    </>
  );
}

export default App;
