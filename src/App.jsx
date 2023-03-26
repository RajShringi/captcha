import { useState, useEffect } from "react";
import Form from "./Form";
import Success from "./Success";

function App() {
  const [formSubmit, setFormSubmit] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="p-2 text-gray-700 dark:text-white dark:bg-zinc-700 h-screen">
      <div className="text-right max-w-lg mx-auto">
        <button onClick={handleThemeSwitch} className="text-4xl">
          {theme === "light" ? `🔦` : `💡`}
        </button>
      </div>
      {formSubmit ? <Success /> : <Form setFormSubmit={setFormSubmit} />}
    </div>
  );
}

export default App;
