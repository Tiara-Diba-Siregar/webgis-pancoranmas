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
            <p style={{ margin: 0, color: "white", fontSize: "16px" }}>
              We offer comprehensive details about 20 elementary schools located
              in various
            </p>
            <p style={{ margin: 0, color: "white", fontSize: "16px" }}>
              neighborhoods in Pancoran Mas, Depok
            </p>
            <p style={{ margin: 0, color: "white", fontSize: "16px" }}>
              We Provide Information about Location, Facilities, Images,
              Website, Coordinate, and Contact
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
