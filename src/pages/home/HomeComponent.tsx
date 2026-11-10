import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Greeting from "../../containers/greeting/Greeting";
import Certifications from "../../containers/certifications/Certifications";
import { certifications } from "../../data/certifications";
import { checkActiveConcerts } from "../../utils/concertChecker";
import "./HomeComponent.css";

const HomeComponent: React.FC = () => {
  const location = useLocation();
  const showAfisha = checkActiveConcerts(certifications);

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.slice(1); // "#afisha" -> "afisha"

    // Даём React дорисовать секцию, затем крутим
    const timer = setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="home-page-container fade-in-up">
      <Greeting />
      {showAfisha && <Certifications />}
    </div>
  );
};

export default HomeComponent;
