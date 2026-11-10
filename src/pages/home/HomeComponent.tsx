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

  // 🪄 ПУЛЕНЕПРОБИВАЕМЫЙ КРОСС-СТРАНИЧНЫЙ ДОСКРОЛЛ С УЧЕТОМ ЗАГРУЗКИ КОНТЕНТА
  useEffect(() => {
    if (location.hash === "#afisha" && showAfisha) {
      // Увеличиваем задержку до 400мс, давая анимации Greeting полностью встать в DOM
      const timer = setTimeout(() => {
        const element = document.getElementById("afisha");
        if (element) {
          const headerOffset = 90; // Наш проверенный мобильный отступ под шапку
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash, showAfisha]); // Добавили location.pathname в слежение

  return (
    <div className="home-page-container fade-in-up">
      <Greeting />
      {showAfisha && <Certifications />}
    </div>
  );
};

export default HomeComponent;
