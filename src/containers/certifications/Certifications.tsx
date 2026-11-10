import React, { useState, useEffect } from "react";
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
  const now = new Date();

  const activeConcerts = certifications.filter((cert) => {
    const concertDateTime = parseConcertDateTime(
      cert.concert_date,
      cert.concert_time,
      cert.concert_year
    );
    return concertDateTime >= now;
  });

  const getFirstCardId = (): string | number | null => {
    if (activeConcerts.length === 0) return null;
    const firstCert = activeConcerts[0];
    return 'id' in firstCert && firstCert.id ? (firstCert.id as string | number) : 0;
  };

  const [activeCardId, setActiveCardId] = useState<string | number | null>(getFirstCardId());

  useEffect(() => {
    setActiveCardId(getFirstCardId());
  }, [certifications]);

  const handleToggleCard = (cardId: string | number) => {
    setActiveCardId((prevId) => (prevId === cardId ? null : cardId));
  };

  if (activeConcerts.length === 0) {
    return null;
  }

  return (
    <section className="certs-main-section" id="afisha">
      <div className="certs-header-div">
        <h2 className="certs-header">
          Ближайшие выступления
        </h2>
      </div>
      <div className="certs-body-div">
        {activeConcerts.map((cert, index) => {
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
