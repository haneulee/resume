import { createContext, useState } from "react";

export const ThemeChangeContext = createContext(null);

export const ThemeChangeContextProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <ThemeChangeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeChangeContext.Provider>
  );
};
