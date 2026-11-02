import React from "react";
import "./SnowEffect.css";

const SnowEffect: React.FC = () => {
  return (
    <div className="snow-overlay" aria-hidden="true">
      <div className="snow-layer snow-layer-fast"></div>
      <div className="snow-layer snow-layer-medium"></div>
      <div className="snow-layer snow-layer-slow"></div>
    </div>
  );
};

export default SnowEffect;
