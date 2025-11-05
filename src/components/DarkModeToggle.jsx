import React from "react";
import styles from "../styles/DarkMode.module.css";
import { useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        Toggle {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default DarkModeToggle;