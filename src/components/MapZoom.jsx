import React from "react";
import PropTypes from "prop-types";
import { useMap } from "react-leaflet";
import "./../style/MapZoom.css";

function ZoomControlWithReset(props) {
  const { zoomInTitle, zoomResetTitle, zoomOutTitle, bounds } = props;
  const map = useMap();

  return (
    <div className="leaflet-control leaflet-control-zoom leaflet-bar">
      <button
        className="leaflet-control-zoom-in"
        title={zoomInTitle}
        onClick={() => map.zoomIn()}
      >
        +
      </button>
      <button
        className="leaflet-control-zoom-out"
        title={zoomOutTitle}
        onClick={() => map.zoomOut()}
      >
        -
      </button>
      <button
        className="leaflet-control-zoom-out"
        title={zoomResetTitle}
        onClick={() => map.fitBounds(bounds)}
      >
        &#x21ba;
      </button>
    </div>
  );
}

ZoomControlWithReset.propTypes = {
  zoomInTitle: PropTypes.string,
  zoomOutTitle: PropTypes.string,
  zoomResetTitle: PropTypes.string,
  bounds: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
};

ZoomControlWithReset.defaultProps = {
  zoomInTitle: "Zoom in",
  zoomOutTitle: "Zoom out",
  zoomResetTitle: "Reset zoom",
};

export default ZoomControlWithReset;
