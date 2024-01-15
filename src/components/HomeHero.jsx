import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <section>
        <div id="hero" className="hero-centered">
          <div className="text-hero-container" style={{ textAlign: "center" }}>
            <h3
              className="text-hero"
              style={{ margin: 0, color: "white", fontSize: "60px" }}
            >
              Elementary Schools
            </h3>
            <p style={{ margin: 0, color: "white", fontSize: "18px" }}>
              We offer comprehensive details such as location, facilities,
              images, website, coordinate, and contact
            </p>
            <p style={{ margin: 0, color: "white", fontSize: "18px" }}>
              about elementary schools located in various neighborhoods in
              Pancoran Mas, Depok
            </p>
          </div>
          <div className="hero-button-container">
            <button
              className="hero-button-map"
              onClick={() => navigate("/map")}
            >
              Explore Map
            </button>
            <button
              className="hero-button-schools"
              onClick={() => navigate("/schools")}
            >
              Find Schools
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
