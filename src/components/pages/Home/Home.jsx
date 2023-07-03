import React from "react";
import { Link } from "react-router-dom";
import './Home.css'
import { Button } from "@mui/material";



const Home = () => {
  return (
    <div className="home">
      <div className="home-tittle">
        <h1>
          ¡Gracias por visitarnos!
        </h1>
      </div>
      <div className="home-button">
      <Link to="dentists">
        <Button color="primary" variant="contained" size="large">
          Conoce nuestro equipo de especialistas
        </Button>
      </Link>    
      </div>
    </div>
  );
};

export default Home;
