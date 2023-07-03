import React, { createContext, useReducer } from "react";

export const DentistContext = createContext();

const initialState = {
  dentists: [],
  favs: []
};

const dentistReducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return {...state, dentists: action.payload}
    default:
      return state
  }
};

const DentistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dentistReducer, initialState);

  return (
    <DentistContext.Provider value={{ state, dispatch }}>
      {children}
    </DentistContext.Provider>
  );
};

export default DentistContextProvider;
