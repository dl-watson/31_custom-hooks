import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../providers/ThemeContext";
import styles from "./styles/Header.css";

const Header = () => {
  const location = useLocation();
  const { themeStyles, toggleTheme } = useTheme();

  return (
    <header className={styles.Header} style={themeStyles}>
      {location.pathname === "/" ? (
        <></>
      ) : (
        <Link to="/">
          <button className={styles.navigation}>RETURN HOME</button>
        </Link>
      )}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
