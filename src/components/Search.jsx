import React, { useState } from "react";
import { Icon } from "@iconify/react";
import sekolahData from "./../data/sekolah.json";

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
    <Icon icon="gridicons:star-outline" style={{ color: "yellow", fontSize }} />
  );
  stars.push(
    ...Array.from({ length: emptyStars }, (_, index) => emptyStarIcon)
  );

  return <div>{stars}</div>;
};

function Search() {
  const [query, setQuery] = useState("");
  const [selectedSchool, setSelectedSchool] = useState(null);

  const filteredSekolahData = sekolahData.features.filter((feature) =>
    feature.properties.NamaSekolah.toLowerCase().includes(query.toLowerCase())
  );

  const handleInputClick = () => {
    // Hide details when the input is clicked
    setSelectedSchool(null);
  };

  const handleListItemClick = (school) => {
    // Show details when a school is clicked
    setSelectedSchool(school);
  };

  return (
    <div className={`input-wrapper ${query ? "active" : ""}`}>
      <Icon icon="iconamoon:search-bold" id="search-icon" />
      <input
        className="input"
        placeholder="Type to search..."
        type="text"
        value={query}
        onClick={handleInputClick}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <ul className="list">
          {filteredSekolahData.map((feature) => (
            <li
              className="listItem"
              key={feature.properties.No}
              onClick={() => handleListItemClick(feature)}
            >
              {feature.properties.NamaSekolah}
            </li>
          ))}
        </ul>
      )}

      {selectedSchool && (
        <div className="sidebar-details">
          <Icon
            icon="fontisto:close"
            className="close-icon"
            onClick={() => setSelectedSchool(null)}
          />
          <img
            src={selectedSchool.properties.Image}
            alt="school_image"
            style={{
              width: "400px",
              height: "300px",
              marginBottom: "0px",
              borderRadius: "10px",
            }}
          />
          <h3
            style={{
              margin: "10px 0",
              padding: "0",
            }}
          >
            {selectedSchool.properties.NamaSekolah}
          </h3>

          <p
            style={{
              margin: "0 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "5px" }}>
              {selectedSchool.properties.Rating}
            </span>
            {renderStarRating(selectedSchool.properties.Rating, "18px")} (
            {selectedSchool.properties.RatePeople})
          </p>
          <p
            style={{
              margin: "0 0",
              padding: "0",
              color: "grey",
            }}
          >
            {selectedSchool.properties.Jenis}
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <Icon
              icon="akar-icons:location"
              style={{
                color: "blue",
                fontSize: "36px",
                marginRight: "5px",
              }}
            />
            {selectedSchool.properties.Alamat}
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <Icon
              icon="mingcute:time-line"
              style={{ color: "blue", fontSize: "24px", marginRight: "5px" }}
            />{" "}
            Buka: {selectedSchool.properties.Waktu}
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <Icon
              icon="icon-park-outline:phone-telephone"
              style={{ color: "blue", fontSize: "24px", marginRight: "5px" }}
            />{" "}
            No Telp: {selectedSchool.properties.Telp}
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <Icon
              icon="tabler:world-latitude"
              style={{ color: "blue", fontSize: "24px", marginRight: "5px" }}
            />{" "}
            Latitude: {selectedSchool.geometry.coordinates[1]}
          </p>
          <p style={{ display: "flex", alignItems: "center" }}>
            <Icon
              icon="tabler:world-longitude"
              style={{ color: "blue", fontSize: "24px", marginRight: "5px" }}
            />{" "}
            Longitude: {selectedSchool.geometry.coordinates[0]}
          </p>
          <p
            style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <Icon
              icon="mdi:web-check"
              style={{
                color: "blue",
                fontSize: "24px",
                marginRight: "5px",
              }}
            />
            Website:{" "}
            <a
              href={selectedSchool.properties.Website}
              style={{ wordBreak: "break-all" }}
            >
              {selectedSchool.properties.Website}
            </a>
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Icon
              icon="lucide:school"
              style={{ color: "blue", fontSize: "24px", marginRight: "5px" }}
            />
            Fasilitas:{" "}
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {selectedSchool.properties.Fasilitas}
          </p>

          <h4
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "0",
              color: "darkblue",
              fontSize: "16px",
            }}
          >
            Foto Sekolah:{" "}
          </h4>
          {/* Display images */}
          <div className="image-container">
            {[1, 2, 3, 4, 5].map((No) => (
              <img
                key={No}
                src={selectedSchool.properties[`img${No}`]}
                alt={`Image ${No}`}
                style={{
                  width: "250px",
                  height: "150px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  marginLeft: "2px",
                  marginRight: "2px",
                }}
              />
            ))}
          </div>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
}

export default Search;
