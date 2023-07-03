
import Switch from '@mui/material/Switch';
import React, { useContext } from "react"
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";

const Navbar = () => {

  const {state, dispatch} = useContext(ThemeContext);

  const handleChange = ()=>{
    dispatch({ type: "SWITCH_DARK_MODE"})
  }

  return (
    <div>
      <h2>This is the navbar</h2>
      <Switch
      checked={state.isDark}
      onChange={handleChange}
      inputProps={{'aria-label': 'controlled'}}
      />

      <div style={{ minHeight: "80vh"}}>
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;