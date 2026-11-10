import React from "react";
import Greeting from "../../containers/greeting/Greeting";
import Certifications from "../../containers/certifications/Certifications";
import { certifications } from "../../data/certifications";
import { checkActiveConcerts } from "../../utils/concertChecker";
import "./HomeComponent.css";

const HomeComponent: React.FC = () => {
  const showAfisha = checkActiveConcerts(certifications);

  return (
    <div className="home-page-container fade-in-up">
      <Greeting />
      {showAfisha && <Certifications />}
    </div>
  );
};

export default HomeComponent;
