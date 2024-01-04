import React from "react";
import "./../style/HomePage.css";
import { Icon } from "@iconify/react";

export const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-container">
        <div className="about-row">
          <div className="about-image">
            <img src="/img/images/pancoranmas3.jpg" alt="aboutimage" />
          </div>
          <div className="about-information">
            <div className="about-text">
              <h2>About SCHOOLINFO</h2>
              <p>
                Welcome to SCHOOLINFO! Your trusted source for up-to-date
                information on elementary schools in Pancoran Mas, Depok. We are
                committed to providing comprehensive and valuable information
                for those seeking details about the locations and facilities of
                elementary schools in the Pancoran Mas sub-district, Depok.
              </p>
              <h3>Why Choose Us?</h3>
              <div className="about-list-style">
                <div className="about-list-style-coloum">
                  <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                    <li>
                      <Icon
                        icon="bi:check"
                        style={{
                          color: "blue",
                          marginRight: "10px",
                          fontSize: "16",
                        }}
                      />
                      School address information
                    </li>
                    <li>
                      <Icon
                        icon="bi:check"
                        style={{
                          color: "blue",
                          marginRight: "10px",
                          fontSize: "16",
                        }}
                      />
                      Information on school facilities
                    </li>
                    <li>
                      <Icon
                        icon="bi:check"
                        style={{
                          color: "blue",
                          marginRight: "10px",
                          fontSize: "16",
                        }}
                      />
                      School photos
                    </li>
                    <li>
                      <Icon
                        icon="bi:check"
                        style={{
                          color: "blue",
                          marginRight: "10px",
                          fontSize: "16",
                        }}
                      />
                      List of schools in Pancoran Mas
                    </li>
                    <li>
                      <Icon
                        icon="bi:check"
                        style={{
                          color: "blue",
                          marginRight: "10px",
                          fontSize: "16",
                        }}
                      />
                      Search for Locations Worldwide
                    </li>
                    <li>
                      <Icon
                        icon="bi:check"
                        style={{
                          color: "blue",
                          marginRight: "10px",
                          fontSize: "16",
                        }}
                      />
                      Provides the administrative boundaries
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
