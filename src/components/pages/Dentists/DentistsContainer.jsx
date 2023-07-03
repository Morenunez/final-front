import React, { useContext, useEffect } from "react";
import axios from "axios";
import { DentistContext } from "../../../context/DentistContext";
import Dentists from "./Dentists";
import { ThemeContext } from "../../../context/ThemeContext";


const DentistsContainer = () => {
  const {state, dispatch} = useContext(DentistContext, ThemeContext)

  useEffect(() => {
    const getDentists = axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    getDentists
      .then((res) => dispatch({ type: "GET_DENTISTS", payload: res.data}))
      .catch((err) => console.log(err));
  }, [ ]);



  return (
  <div>
    <Dentists dentists={state.dentists} dispatch={dispatch} />
  </div>
  
  )
};

export default DentistsContainer;
