import React from "react";
import { Icon } from "@iconify/react";
import "./../style/MapBack.css";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  return (
    <div className="back-container">
      <Icon
        icon="lucide:arrow-left"
        className="back-icon"
        onClick={() => navigate("/home")}
      />
    </div>
  );
};

export default Back;
