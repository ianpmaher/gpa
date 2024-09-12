import { useState, useEffect } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { LaptopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ThemeMode = ({className}) => {
  // Function to check and set the theme based on OS preference or localStorage
  const getInitialTheme = () => {
    if (localStorage.theme === "dark") {
      return "dark";
    } else if (localStorage.theme === "light") {
      return "light";
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "os";
    } else {
      return "light";
    }
  };

  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    // Set the theme class on the root element based on the current theme
    if (theme === "dark" || (theme === "os" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Save the theme to localStorage
    if (theme === "os") {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", theme);
    }

    // Listen for OS theme changes if "os" is selected
    if (theme === "os") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => setTheme(mediaQuery.matches ? "dark" : "light");
      mediaQuery.addEventListener("change", handleChange);

      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  return (
    <div className={`${className}`}>
      <ToggleGroup.Root type="single" value={theme} onValueChange={setTheme} className="flex md:space-x-2">
        <ToggleGroup.Item value="os" className="p-1 hover:scale-110 transition-all duration-200">
          <LaptopIcon className="md:w-6 md:h-6" />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="light" className="p-1 hover:scale-110 transition-all duration-200">
          <SunIcon className="md:w-6 md:h-6" />
        </ToggleGroup.Item>
        <ToggleGroup.Item value="dark" className="p-1 hover:scale-110 transition-all duration-200">
          <MoonIcon className="md:w-6 md:h-6" />
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
};

export default ThemeMode;
