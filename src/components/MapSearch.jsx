import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";

const MapSearch = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    let marker;

    // Inisialisasi kontrol geocoder
    const geocoderControl = L.Control.geocoder({
      defaultMarkGeocode: false, // Set defaultMarkGeocode to false
    }).addTo(map);

    // Tanggapi peristiwa markgeocode
    geocoderControl.on("markgeocode", function (e) {
      const { center, name } = e.geocode;
      const markerIcon = new L.Icon({
        iconUrl: process.env.PUBLIC_URL + "/img/marker.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -24],
      });

      // Hilangkan marker jika sudah ada sebelumnya
      if (marker) {
        map.removeLayer(marker);
      }

      // Tambahkan marker ke peta
      marker = L.marker(center, { icon: markerIcon })
        .addTo(map)
        .bindPopup(name)
        .openPopup();

      // Zoom ke lokasi baru
      map.flyTo(center, 16);
    });

    // Membersihkan kontrol saat komponen dibongkar
    return () => {
      if (geocoderControl) {
        geocoderControl.remove();
      }

      // Hilangkan marker jika masih ada saat komponen dibongkar
      if (marker) {
        map.removeLayer(marker);
      }
    };
  }, [map]);

  return null;
};

export default MapSearch;
