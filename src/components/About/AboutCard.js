import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Our services offers the following information: 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Elementary School Profile: </span> 
              Complete information about the name and address of the school. 
            </li>
            <br></br>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">School Facilities: </span> 
              Details of facilities such as classrooms, libraries, laboratories and sports fields.
            </li>
            <br></br>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Location Map: </span> 
              Map to make it easier to know the school locations. 
            </li>
            <br></br>
            <li className="about-activity">
              <ImPointRight /> <span className="purple">Visual Documentation: </span> 
              Images to provide an overview of the school. 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A well-educated mind will always have more questions than answers"{" "}
          </p>
          <footer className="blockquote-footer">Helen Keller</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
