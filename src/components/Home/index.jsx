import "./index.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

export default function Home() {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate("/about-me");
  };
  return (
    <div className="content">
      <div className="blur"></div>
      <div className="home">
        <div className="title">
          <p>
            Hola! <br /> Soy <span className="initial">I</span>van
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Desarrollador FullStack!!!")
                  .pauseFor(1000)
                  .deleteAll()
                  .start()
                  .typeString("Desarrollador Backend")
                  .pauseFor(1000)
                  .deleteAll()
                  .start()
                  .typeString("Desarrollador Frontend")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </p>
        </div>
        <button
          className="button-home-pushable"
          onClick={routeChange}
          role="button"
        >
          <span className="button-home-shadow"></span>
          <span className="button-home-edge"></span>
          <span className="button-home-front text">Cuentame mas</span>
        </button>
      </div>
    </div>
  );
}
