import React, { useReducer, useContext } from 'react';
import { initialState, themeReducer } from './themeReducer';

const ThemeContext = React.createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const MyThemeProvider = ({ children }) => {
  const [actualTheme, dispatcher] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={[actualTheme, dispatcher]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default MyThemeProvider;
