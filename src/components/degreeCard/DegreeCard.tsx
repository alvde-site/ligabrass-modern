import React from "react";
import { Link } from "react-router-dom";
import type { MusicianMainCard } from "../../types/portfolio";
import "./DegreeCard.css";

interface DegreeCardProps {
  degree: MusicianMainCard;
}

const DegreeCard: React.FC<DegreeCardProps> = ({ degree }) => {
  // Пуленепробиваемый метод динамического получения путей к картинкам в Vite
  const getMusicianImgUrl = (imagePath: string) => {
    return new URL(`../../assets/images/${imagePath}`, import.meta.url).href;
  };

  return (
    <div className="degree-card">
      {/* Круглый блок фотографии музыканта */}
      {degree.logo_path && (
        <div className="card-img-block">
          <img
            src={getMusicianImgUrl(degree.logo_path)}
            alt={degree.alt_name || degree.title}
          />
        </div>
      )}

      {/* Контейнер тела карточки */}
      <div 
        className="card-body-block"
        style={{ width: degree.logo_path ? "90%" : "100%" }}
      >
        <div className="body-header-block">
          <div className="body-header-title-block">
            <h2 className="card-title-text">{degree.title}</h2>
            <h3 className="card-subtitle-text">{degree.subtitle}</h3>
          </div>
          <div className="body-header-duration-block">
            <h3 className="duration-tag-text">{degree.duration}</h3>
          </div>
        </div>

        <div className="body-content-block">
          {degree.descriptions.map((sentence, index) => (
            <p key={index} className="content-list-paragraph">
              {sentence}
            </p>
          ))}

          {/* Безопасный контейнер кнопки с SPA-переходом */}
          {degree.website_link && (
            <div className="visit-btn-container-block">
              <Link to={degree.website_link} className="visit-link-wrapper-block">
                <div className="visit-btn-block">
                  <p className="btn-text-el">Подробнее</p>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DegreeCard;
