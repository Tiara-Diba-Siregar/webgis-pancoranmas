import React from "react";
import "./../style/HomePage.css";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-title-teams">
          <h1>CONTRIBUTORS</h1>
        </div>
        <div className="footer-title-desc">
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
        <div className="footer-documentation">
          <p>Check Our Documentation:</p>
          <p>
            <a
              href="https://github.com/Tiara-Diba-Siregar/webgis-pancoranmas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                className="footer-icon"
                style={{ color: "black" }}
                icon="bi:github"
              />
            </a>
          </p>

          <p>
            <a
              href="https://heyzine.com/flip-book/4330bc1c6a.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                className="footer-icon"
                style={{ color: "blue" }}
                icon="simple-icons:googledocs"
              />
            </a>
          </p>
          <p>
            <a
              href="https://www.canva.com/design/DAF3GggNkrs/2-2WPyUyLU_ae14TxiHPiQ/view?utm_content=DAF3GggNkrs&utm_campaign=designshare&utm_medium=link&utm_source=editor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                className="footer-icon"
                style={{ color: "orange" }}
                icon="simple-icons:googleslides"
              />
            </a>
          </p>
          <p>
            <a
              href="https://youtube.com/shorts/566zPZcmmGY?si=R1krp3vU6IHYq9oa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                className="footer-icon"
                style={{ color: "red" }}
                icon="grommet-icons:youtube"
              />
            </a>
          </p>
        </div>

        <p className="footer-schoolinfo">
          © 2023 SchoolInfo. Sistem Informasi 7A. Kelompok 6. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
