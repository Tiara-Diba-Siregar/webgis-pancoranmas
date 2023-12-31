import React from "react";
import {
  LayersControl,
  TileLayer,
  GeoJSON,
  Popup,
  Marker,
  LayerGroup,
} from "react-leaflet";
import sekolahData from "./../data/sekolah.json";
import kelurahanData from "./../data/kelurahan_pancoranmas.json";
import kecamatanData from "./../data/kecamatan_depok.json";
import anaksungaiData from "./../data/Anak_Sungai.json";
import tolData from "./../data/Jalan_Tol.json";
import kotaKecamatanData from "./../data/Kota_kecamatan.json";
import relData from "./../data/Rel_Kereta_Api.json";
import indukSungaiData from "./../data/Sungai_Induk.json";
import wadukData from "./../data/Waduk_Danau.json";

import L from "leaflet";
import "./../style/MyMap.css";
import { Icon } from "@iconify/react";

export default function MapLayerControl() {
  const schoolIcon = new L.Icon({
    iconUrl: process.env.PUBLIC_URL + "/img/schoolicon.png",
    iconSize: [24, 24],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const renderStarRating = (rating, fontSize = "12px") => {
    const maxRating = 5; // Jumlah maksimal bintang
    const fullStars = Math.floor(rating); // Bintang penuh
    const halfStar = rating % 1 !== 0; // Cek apakah ada setengah bintang
    const emptyStars = maxRating - fullStars - (halfStar ? 1 : 0); // Bintang kosong

    // Membuat array dengan komponen Icon sesuai rating
    const stars = Array.from({ length: fullStars }, (_, index) => (
      <Icon
        key={index}
        icon="ic:baseline-star-rate"
        style={{ color: "yellow", fontSize }}
      />
    ));

    if (halfStar) {
      stars.push(
        <Icon
          key="halfStar"
          icon="ic:outline-star-half"
          style={{ color: "yellow", fontSize }}
        />
      );
    }

    const emptyStarIcon = (
      <Icon
        icon="gridicons:star-outline"
        style={{ color: "yellow", fontSize }}
      />
    );
    stars.push(
      ...Array.from({ length: emptyStars }, (_, index) => emptyStarIcon)
    );

    return <div>{stars}</div>;
  };

  function getCustomColor(id, tipe) {
    if (tipe === "Kecamatan Pancoran Mas") {
      if (id === 1) {
        return "blue";
      } else if (id === 2) {
        return "red";
      } else if (id === 3) {
        return "yellow";
      } else if (id === 4) {
        return "purple";
      } else if (id === 5) {
        return "green";
      } else if (id === 6) {
        return "dark grey";
      } else {
        return "black";
      }
    } else if (tipe === "Kota Depok") {
      if (id === 1) {
        return "#3559E0";
      } else if (id === 2) {
        return "#3559E0";
      } else if (id === 3) {
        return "#3559E0";
      } else if (id === 4) {
        return "#3559E0";
      } else if (id === 5) {
        return "#3559E0";
      } else if (id === 6) {
        return "#373d24";
      } else if (id === 7) {
        return "#3559E0";
      } else if (id === 8) {
        return "#3559E0";
      } else if (id === 9) {
        return "#3559E0";
      } else if (id === 10) {
        return "#3559E0";
      } else if (id === 11) {
        return "#3559E0";
      } else {
        return "red";
      }
    } else {
      return "black"; // Warna default jika tipe tidak dikenali
    }
  }

  return (
    <LayersControl position="topright">
      <LayersControl.BaseLayer checked name="Open Street Map">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Google Satellite Hybrid">
        <TileLayer url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}" />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Esri Nat Geo World Map">
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}"
          minZoom={0}
          maxZoom={16}
        />
      </LayersControl.BaseLayer>

      <LayersControl.BaseLayer name="Google Map">
        <TileLayer
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          minZoom={0}
          maxZoom={16}
        />
      </LayersControl.BaseLayer>

      <LayersControl.Overlay checked name="Kota Depok">
        <GeoJSON
          data={kecamatanData.features}
          onEachFeature={(feature, layer) => {
            const tipe = "Kota Depok"; // Atur tipe kecamatan sesuai dengan kebutuhan
            const customColor = getCustomColor(feature.properties.id, tipe);
            layer.bindPopup(`<strong>${feature.properties.kecamatan}</strong>`);
            layer.setStyle({
              color: "#D8D9DA", // warna border
              weight: 2, // ketebalan border
              fillColor: customColor, // warna fill
              fillOpacity: 0.25, // transparansi fill
            });
          }}
        />
      </LayersControl.Overlay>

      <LayersControl.Overlay checked name="Kecamatan Pancoran Mas">
        <GeoJSON
          data={kelurahanData.features}
          onEachFeature={(feature, layer) => {
            const tipe = "Kecamatan Pancoran Mas"; // Atur tipe kecamatan sesuai dengan kebutuhan
            const customColor = getCustomColor(feature.properties.id, tipe);
            layer.bindPopup(`<strong>${feature.properties.kelurahan}</strong>`);
            layer.setStyle({
              fillColor: customColor,
              color: "#D8D9DA", // Warna border
              weight: 2, // Ketebalan border
            });
          }}
        />
      </LayersControl.Overlay>

      <LayersControl.Overlay checked name="Sekolah Dasar">
        <LayerGroup>
          {sekolahData.features.map((school) => (
            <Marker
              key={school.properties.No}
              position={[
                school.geometry.coordinates[1],
                school.geometry.coordinates[0],
              ]}
              icon={schoolIcon}
            >
              <Popup>
                <div
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "12px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={school.properties.Image}
                    alt="school_image"
                    style={{
                      width: "300px",
                      height: "200px",
                      marginBottom: "0px",
                      borderRadius: "10px",
                    }}
                  />
                  <h3>{school.properties.NamaSekolah}</h3>
                  <p
                    style={{
                      margin: "0px 0",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ marginRight: "5px" }}>
                      {school.properties.Rating}
                    </span>
                    {renderStarRating(school.properties.Rating, "18px")} (
                    {school.properties.RatePeople})
                  </p>
                  <p style={{ margin: "5px 0" }}>
                    Address: {school.properties.Alamat}
                  </p>
                  <p style={{ margin: "5px 0" }}>
                    Lat & Long: {school.properties.Latitude},{" "}
                    {school.properties.Longitude}
                  </p>
                  <p style={{ margin: "5px 0" }}>
                    Website:{" "}
                    <a
                      href={school.properties.Website}
                      style={{ wordBreak: "break-all" }}
                    >
                      {school.properties.Website}
                    </a>
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </LayerGroup>
      </LayersControl.Overlay>

      <LayersControl.Overlay name="Jalan Tol">
        <GeoJSON
          data={tolData.features}
          onEachFeature={(feature, layer) => {
            layer.bindPopup(`<strong>${feature.properties.id}</strong>`);
            layer.setStyle({
              color: "#F6D13D", // warna border
              weight: 2, // ketebalan border
              fill: "#FFF6CF", // warna fill
              fillOpacity: 0.2, // transparansi fill
            });
          }}
        />
      </LayersControl.Overlay>

      <LayersControl.Overlay name="Anak Sungai">
        <GeoJSON
          data={anaksungaiData.features}
          onEachFeature={(feature, layer) => {
            layer.bindPopup(`<strong>${feature.properties.lokasi}</strong>`);
            layer.setStyle({
              color: "#38B6FF", // warna border
              weight: 2, // ketebalan border
              fill: "#5CE1E6", // warna fill
              fillOpacity: 0.2, // transparansi fill
            });
          }}
        />
      </LayersControl.Overlay>

      <LayersControl.Overlay name="Induk Sungai">
        <GeoJSON
          data={indukSungaiData.features}
          onEachFeature={(feature, layer) => {
            layer.bindPopup(`<strong>${feature.properties.lokasi}</strong>`);
            layer.setStyle({
              color: "#004AAD", // warna border
              weight: 2, // ketebalan border
              fill: "#5271FF", // warna fill
              fillOpacity: 0.2, // transparansi fill
            });
          }}
        />
      </LayersControl.Overlay>

      <LayersControl.Overlay name="Kota Kecamatan">
        <GeoJSON
          data={kotaKecamatanData.features}
          onEachFeature={(feature, layer) => {
            layer.bindPopup(`<strong>${feature.properties.lokasi}</strong>`);
            layer.setStyle({
              color: "#8D1D1D", // warna border
              weight: 2, // ketebalan border
              fill: "#FFE4E4", // warna fill
              fillOpacity: 0.2, // transparansi fill
            });
          }}
        />
      </LayersControl.Overlay>

      <LayersControl.Overlay name="Rel Kereta Api">
        <GeoJSON
          data={relData.features}
          onEachFeature={(feature, layer) => {
            layer.bindPopup(`<strong>${feature.properties.lokasi}</strong>`);
            layer.setStyle({
              color: "#737373", // warna border
              weight: 2, // ketebalan border
              fill: "#D9D9D9", // warna fill
              fillOpacity: 0.2, // transparansi fill
            });
          }}
        />
      </LayersControl.Overlay>

      <LayersControl.Overlay name="Waduk atau Danau">
        <GeoJSON
          data={wadukData.features}
          onEachFeature={(feature, layer) => {
            layer.bindPopup(`<strong>${feature.properties.lokasi}</strong>`);
            layer.setStyle({
              color: "#1F6945", // warna border
              weight: 2, // ketebalan border
              fill: "#BCEFD6", // warna fill
              fillOpacity: 0.2, // transparansi fill
            });
          }}
        />
      </LayersControl.Overlay>
    </LayersControl>
  );
}
