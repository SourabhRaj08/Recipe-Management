import "./App.css";
import React, { createContext, useState } from "react";
import { HomePage } from "./Pages/HomePage/HomePage";
import ThemeButton from "./Components/theme-button/theme";

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState(false);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" style={theme ? {backgroundColor : "#ff9966"} : {}}>
        <ThemeButton />
        <HomePage />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
