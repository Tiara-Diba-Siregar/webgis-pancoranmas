import React from "react";
import "./../style/HomePage.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-title">
          <h1>CONTRIBUTORS</h1>
          <p>
            Here are the individuals involved in the creation of SchoolInfo.
          </p>
        </div>
        <div className="footer-contributors">
          <div className="footer-contributor">
            <img src="/img/img/team/fotoupi.jpg" alt="Contributor 1" />
            <h3>Lhutfia Ichsan</h3>
            <p>11200930000015</p>
          </div>
          <div className="footer-contributor">
            <img src="/img/img/team/fotodiba.jpg" alt="Contributor 2" />
            <h3>Tiara Diba</h3>
            <p>11200930000017</p>
          </div>
          <div className="footer-contributor">
            <img src="/img/img/team/fotoica.jpg" alt="Contributor 3" />
            <h3>Annisa Safa</h3>
            <p>11200930000028</p>
          </div>
        </div>
        <p className="footer-schoolinfo">
          © 2023 SchoolInfo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
