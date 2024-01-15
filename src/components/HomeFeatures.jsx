import React from "react";
import "./../style/HomePage.css";
import { Icon } from "@iconify/react";

const Features = () => {
  return (
    <div id="features" className="features">
      <div className="features-container">
        <div className="features-title">
          <h2>FEATURES</h2>
        </div>
        <div className="features-row">
          <div className="features-row-fill">
            <i className="features-icon">
              <Icon icon="ion:school-sharp" />
            </i>
            <h3 className="features-title">Elementary School Profile</h3>
            <h3 className="features-text">
              Complete information about the name and address of the school.
            </h3>
          </div>
          <div className="features-row-fill">
            <i className="features-icon">
              <Icon icon="tabler:soccer-field" />
            </i>
            <h3 className="features-title">School Facilities</h3>
            <h3 className="features-text">
              Details of facilities such as classrooms, libraries, laboratories
              and sports fields.
            </h3>
          </div>
          <div className="features-row-fill">
            <i className="features-icon">
              <Icon icon="clarity:map-marker-solid" />
            </i>
            <h3 className="features-title">Map Location</h3>
            <h3 className="features-text">
              Map to make it easier to know the school locations.
            </h3>
          </div>
          <div className="features-row-fill">
            <i className="features-icon">
              <Icon icon="majesticons:image" />
            </i>
            <h3 className="features-title">Visual Documentation</h3>
            <h3 className="features-text">
              Images to provide an overview of the school.
            </h3>
          </div>
          <div className="features-row-fill">
            <i className="features-icon">
              <Icon icon="gis:search-country" />
            </i>
            <h3 className="features-title">Pancoran Mas District</h3>
            <h3 className="features-text">
              The administrative boundary of Pancoran Mas district.
            </h3>
          </div>
          <div className="features-row-fill">
            <i className="features-icon">
              <Icon icon="ion:earth" />
            </i>
            <h3 className="features-title">Geographical Map</h3>
            <h3 className="features-text">
              Geographic maps for finding various locations.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
