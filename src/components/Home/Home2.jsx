import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> SCHOOLINFO </span>
            </h1>
            <p className="home-about-body">
              Welcome to SCHOOLINFO! ✨
              <br />
              <br />
              Your trusted source for up-to-date information on
              <i>
                <b className="purple">
                  {" "}
                  elementary schools in Pancoran Mas, Depok.{" "}
                </b>
              </i>
              <br />
              <br />
              We are committed to providing &nbsp;
              <i>
                <b className="purple">
                  comprehensive and valuable information{" "}
                </b>{" "}
                for those seeking details about{" "}
                <b className="purple">
                  the locations and facilities of elementary schools in the
                  Pancoran Mas sub-district, Depok.
                </b>
              </i>
              <br />
              <br />
              We offer comprehensive details about
              <b className="purple"> 20 elementary schools</b> located in
              various neighborhoods
              <i>
                <b className="purple"> in Pancoran Mas, Depok.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lhutfia-ichsan-a55582225/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tiara-diba-895753229/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/annisasafa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
