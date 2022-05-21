import "./index.css"
import React from 'react'
import Robot from "../../tools/robot-svgrepo-com.svg";


export default function RobotFloat() {
  return (
    <div className="content-robot">
        <div class="vineta">
          <p class="globo"></p>
        </div>
        <img className="robot" src={Robot} alt="React Logo" />
      </div>
  )
}
