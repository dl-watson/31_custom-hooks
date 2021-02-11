import React from "react";
import { useTheme } from "../../providers/ThemeContext";
import styles from "./styles/Header.css";

const Header = () => {
  const { themeStyles, toggleTheme } = useTheme();

  return (
    <header className={styles.Header} style={themeStyles}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
