import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiQgis,
  SiGithub,
  SiXampp,
  SiLaragon,
  SiGooglemaps,
  SiGoogledrive,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiQgis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglemaps />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGoogledrive />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaragon />
      </Col>
    </Row>
  );
}

export default Toolstack;
