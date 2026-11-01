import React from "react";
import DegreeCard from "../../components/degreeCard/DegreeCard";
import { degrees } from "../../data/degrees";
import "./Educations.css";

const Educations: React.FC = () => {
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <h2 className="educations-header">
          Участники ансамбля
        </h2>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree, index) => (
          <DegreeCard key={degree.alt_name || index} degree={degree} />
        ))}
      </div>
    </div>
  );
};

export default Educations;
