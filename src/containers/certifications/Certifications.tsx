import React, { useState } from "react";
import { certifications } from "../../data/certifications";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import "./Certifications.css";

const parseConcertDateTime = (dateStr: string, timeStr: string, yearStr: string): Date => {
  const [day, month] = dateStr.split(".").map(Number);
  const [hours, minutes] = timeStr ? timeStr.split(":").map(Number) :[23, 59];
  const year = yearStr ? Number(yearStr) : new Date().getFullYear();

  return new Date(year, month - 1, day, hours, minutes);
};

const Certifications: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string | number | null>(null);
  const now = new Date();

  const handleToggleCard = (cardId: string | number) => {
    setActiveCardId((prevId) => (prevId === cardId ? null : cardId));
  };

  // 1. Фильтруем массив: оставляем только актуальные будущие концерты
  const activeConcerts = certifications.filter((cert) => {
    const concertDateTime = parseConcertDateTime(
      cert.concert_date,
      cert.concert_time,
      cert.concert_year
    );
    return concertDateTime >= now;
  });

  // 2. Если концертов нет или все они прошли (как концерт 25.10.2026) — скрываем раздел
  if (activeConcerts.length === 0) {
    return null;
  }

  return (
    <section className="certs-main-section" id="certs">
      <div className="certs-header-div">
        <h2 className="certs-header">
          Ближайшие выступления
        </h2>
      </div>
      <div className="certs-body-div">
        {activeConcerts.map((cert, index) => {
          // Генерируем пуленепробиваемый ID для аккордеона
          const cardId = 'id' in cert && cert.id ? (cert.id as string | number) : index;
          const isOpen = activeCardId === cardId;
          
          return (
            <CertificationCard
              key={cardId}
              certificate={cert}
              isOpen={isOpen}
              onToggle={() => handleToggleCard(cardId)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
