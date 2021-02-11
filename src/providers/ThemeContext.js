import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const themeStyles = {
    backgroundColor: darkTheme ? "#444b4d" : "#d4d0cf",
    color: darkTheme ? "#d4d0cf" : "#444b4d",
  };

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, themeStyles, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.any,
};
