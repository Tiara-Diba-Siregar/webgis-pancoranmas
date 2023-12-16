import React from "react";
import "./../style/HomePage.css";

export const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-row">
          <div className="about-image">
            <img src="/img/logo.png" alt="aboutimage" />
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
                  <ul>
                    <li>school address information</li>
                    <li>information on school facilities</li>
                    <li>school photos</li>
                    <li>list of schools in Pancoran Mas</li>
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
