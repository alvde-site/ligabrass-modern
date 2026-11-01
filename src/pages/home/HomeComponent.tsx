import React from "react";
import Greeting from "../../containers/greeting/Greeting";
import Certifications from "../../containers/certifications/Certifications";
import { certifications } from "../../data/certifications";
import "./HomeComponent.css";

const HomeComponent: React.FC = () => {
  const now = new Date();

  // Расчет актуальности концертов
  const hasActiveConcerts = certifications.some((cert) => {
    const [day, month] = cert.concert_date.split(".").map(Number);
    const [hours, minutes] = cert.concert_time
      ? cert.concert_time.split(":").map(Number)
      :[23, 59];
    const year = cert.concert_year ? Number(cert.concert_year) : now.getFullYear();

    const concertDateTime = new Date(year, month - 1, day, hours, minutes);
    return concertDateTime >= now;
  });

  return (
    <div className="home-page-container fade-in-up">
      <Greeting />

      {/* Автоматическое скрытие всей секции афиши, если нет актуальных выступлений */}
      {certifications.length > 0 && hasActiveConcerts ? (
        <Certifications />
      ) : null}
    </div>
  );
};

export default HomeComponent;
