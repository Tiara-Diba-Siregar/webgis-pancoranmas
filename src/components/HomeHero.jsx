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
            <p style={{ margin: 0, color: "white", fontSize: "24px" }}>
              We offer comprehensive details about 20 elementary schools located
              in various
            </p>
            <p style={{ margin: 0, color: "white", fontSize: "24px" }}>
              neighborhoods in Pancoran Mas, Depok
            </p>
          </div>
          <div className="hero-button-container">
            <button
              className="hero-button"
              style={{ backgroundColor: "rgb(43, 80, 243)", color: "white" }}
              onClick={() => navigate("/map")}
            >
              Explore Map
            </button>
            <button
              className="hero-button"
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
