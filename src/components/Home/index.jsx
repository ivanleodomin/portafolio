import "./index.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate('/about-me');
  }
  return (
    <div className="content home">
      <div className="title">
        <h1>
          Hola! <br /> Soy <span className="initial">I</span>ván
          <span className="initial"> D</span>ominguez <br />
          Desarrollador web{" "}
        </h1>
      </div>
      <button class="button-home-pushable" onClick={routeChange} role="button">
        <span class="button-home-shadow"></span>
        <span class="button-home-edge"></span>
        <span class="button-home-front text">Cuentame mas</span>
      </button>
    
    </div>
  );
}
