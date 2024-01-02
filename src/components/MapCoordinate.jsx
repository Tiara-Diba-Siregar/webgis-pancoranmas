import React, { useMemo } from "react";
import { useMapEvents } from "react-leaflet";

function round(number, precision = 0) {
  return (
    Math.round(number * Math.pow(10, precision) + Number.EPSILON) /
    Math.pow(10, precision)
  );
}

function formatLatitude(latitude) {
  const direction = latitude > 0 ? "N" : "S";
  return `${round(Math.abs(latitude), 6)}° ${direction}`;
}

function formatLongitude(longitude) {
  const direction = longitude > 0 ? "E" : "W";
  return `${round(Math.abs(longitude), 6)}° ${direction}`;
}

function MouseCoordinates() {
  const [mousePoint, setMousePoint] = React.useState(null);

  const formattedCoordinates = useMemo(() => {
    return mousePoint === null ? (
      ""
    ) : (
      <div>
        <div>Latitude: {formatLatitude(mousePoint.lat)}</div>
        <div>Longitude: {formatLongitude(mousePoint.lng)}</div>
      </div>
    );
  }, [mousePoint]);

  React.useEffect(() => {
    function copyToClipboard() {
      function handleCtrlCKeydown(event) {
        if (
          event.key === "c" &&
          event.ctrlKey &&
          formattedCoordinates.length > 0 &&
          navigator.clipboard
        ) {
          navigator.clipboard.writeText(formattedCoordinates);
        }
      }

      document.addEventListener("keydown", handleCtrlCKeydown);

      return function cleanup() {
        document.removeEventListener("keydown", handleCtrlCKeydown);
      };
    }

    copyToClipboard();
  }, [formattedCoordinates]);

  useMapEvents({
    mousemove(event) {
      setMousePoint(event.latlng);
    },
    mouseout() {
      setMousePoint(null);
    },
  });

  if (formattedCoordinates.length === 0) return null;

  return (
    <div
      className="leaflet-control-attribution leaflet-control mouse-coordinates"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: "5px",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        left: "18vh",
        bottom: "5px",
      }}
    >
      {formattedCoordinates}
    </div>
  );
}

export default MouseCoordinates;
