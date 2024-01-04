import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useState(false); // false for light mode, true for dark mode

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
  };

  const value = {
    Theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
