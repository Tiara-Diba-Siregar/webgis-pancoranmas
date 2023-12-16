import React, { useState } from "react";
import "./../style/HomePage.css";

function Navbar() {
  const [active, setActive] = useState("nav-menu");
  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav_menu");
  };

  return (
    <nav>
      <div className="home-navbar">
        <a
          href="https://github.com/Tiara-Diba-Siregar/webgis-pancoranmas/"
          className="brand"
        >
          SCHOOLINFO
        </a>
        <ul className={active}>
          <li className="nav-item">
            <a
              href="https://github.com/Tiara-Diba-Siregar/webgis-pancoranmas/"
              className="nav-link"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/Tiara-Diba-Siregar/webgis-pancoranmas/"
              className="nav-link"
            >
              Features
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/Tiara-Diba-Siregar/webgis-pancoranmas/"
              className="nav-link"
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/Tiara-Diba-Siregar/webgis-pancoranmas/"
              className="nav-link"
            >
              Teams
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className="nav-toggler">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
