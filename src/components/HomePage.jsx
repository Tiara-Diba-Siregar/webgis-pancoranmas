import React from "react";
import { useNavigate } from "react-router-dom";
import "./../style/HomePage.css";
import Hero from "./HomeHero";
import Navbar from "./Navbar";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <section>
        <>
          <div className="wrapper">
            <Navbar />
            <Hero />
          </div>
          <h3>HOMEPAGE ROUTE</h3>
          <button onClick={() => navigate("/map")} style={{ margin: "10px" }}>
            See Map
          </button>
          <button onClick={() => navigate("/schools")}>See schools</button>
        </>
      </section>
    </React.Fragment>
  );
};

export default HomePage;
