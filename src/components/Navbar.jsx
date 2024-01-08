import React, { useState } from "react";
import "./../style/HomePage.css";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsActive(false); // Close the menu when clicking on a section
    }
  };

  const navToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav>
      <div className="home-navbar">
        <div
          className="brand"
          style={{ margin: 0 }}
          onClick={() => {
            handleScrollToSection("hero");
          }}
        >
          <img src="/img/logo.png" alt="icon" />
          SCHOOLINFO
        </div>
        <ul className={isActive ? "nav-menu active" : "nav-menu"}>
          <li
            className="nav-item"
            onClick={() => {
              handleScrollToSection("hero");
            }}
          >
            Home
          </li>
          <li
            className="nav-item"
            onClick={() => {
              handleScrollToSection("features");
            }}
          >
            Features
          </li>
          <li
            className="nav-item"
            onClick={() => {
              handleScrollToSection("about");
            }}
          >
            About
          </li>
          <li
            className="nav-item"
            onClick={() => {
              handleScrollToSection("news");
            }}
          >
            News
          </li>
          <li
            className="nav-item"
            onClick={() => {
              handleScrollToSection("footer");
            }}
          >
            Teams
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
