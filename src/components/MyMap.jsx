import React, { Component } from "react";
import { MapContainer, ScaleControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./../style/MyMap.css";
import "./../style/Search.css";
import MapLayerControl from "./MapLayersControl";
import MiniMap from "./MapMini";
import MapSearch from "./MapSearch";
import ZoomControlWithReset from "./MapZoom";
import MouseCoordinates from "./MapCoordinate";
import Search from "./Search";
import Back from "./MapBack";

const GREECE_BOUNDS = [
  [-6.314658, 106.807498],
  [-6.46202, 106.834366],
];

const WIND_ROSE_URL = process.env.PUBLIC_URL + "/img/wind.png";

class MyMap extends Component {
  render() {
    return (
      <div>
        <Back />
        <div className="Search">
          <div className="search-bar-container" />
          <Search />
        </div>

        <MapContainer
          style={{ height: "100vh" }}
          zoom={12}
          center={[-6.38976, 106.821498]}
          zoomControl={false}
        >
          <MapLayerControl position="topright" />
          <MiniMap position="bottomright" zoom={9} />
          <MapSearch position="bottomright" zoom={12} />
          <ScaleControl position="bottomleft" imperial={true} />
          <div className="leaflet-bottom leaflet-left">
            <MouseCoordinates />
          </div>
          <ZoomControlWithReset bounds={GREECE_BOUNDS} />
          <img
            src={WIND_ROSE_URL}
            alt="Wind Rose"
            style={{
              position: "absolute",
              zIndex: 400,
              left: "3vh",
              bottom: "8vh",
              width: "200px",
              height: "200px",
            }}
          />
        </MapContainer>
      </div>
    );
  }
}
export default MyMap;
