import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
  isDark: false,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "SWITCH_DARK_MODE":
      return {...state, isDark: !state.isDark};
    default:
      state;
  }
};

const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
