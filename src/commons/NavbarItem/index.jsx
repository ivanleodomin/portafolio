import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

export default function NavbarItem({ view, setView, Icon, link, name }) {
  const handleNavigation = (id) => setView(id);

  return (
    <IconContext.Provider value={{ color: view != name? "#ffffff" : "#df49a6", size: "50px" }}>
      <div
        className="nav-item"
        onClick={() => handleNavigation(name)}
      >
        <Link to={link} className="nav-link">
          <Icon />
          <span className="link-text">{name}</span>
        </Link>
      </div>
    </IconContext.Provider>
  );
}
