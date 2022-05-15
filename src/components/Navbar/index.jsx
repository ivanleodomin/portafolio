import "./index.css";
import { useState, useEffect } from "react";
//commons
import NavbarItem from "../../commons/NavbarItem";
import MenuButton from "../../commons/MenuButton";
//icons
import { BsFileText, BsCodeSlash, BsPerson } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

export default function Navbar() {
  const [view, setView] = useState("");

  return (
    <header>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <MenuButton />
          </li>
          <li className="nav-item">
            <NavbarItem
              view={view}
              setView={setView}
              Icon={AiOutlineHome}
              link="/home"
              name="home"
            />
          </li>
          <li className="nav-item">
            <NavbarItem
              view={view}
              setView={setView}
              Icon={BsPerson}
              link="/about-me"
              name="Sobre Mi"
            />
          </li>

          <li className="nav-item">
            <NavbarItem
              view={view}
              setView={setView}
              Icon={BsCodeSlash}
              link="/my-projects"
              name="Proyectos"
            />
          </li>

          <li className="nav-item">
            <NavbarItem
              view={view}
              setView={setView}
              Icon={BsFileText}
              link="/my-experience"
              name="Experiencias"
            />
          </li>

          <li className="nav-item">
            <NavbarItem
              view={view}
              setView={setView}
              Icon={FiMail}
              link="/talk-me"
              name="Hablemos!"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
