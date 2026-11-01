import React from "react";
import { Link } from "react-router-dom";
import type { ArchiveEvent } from "../../types/portfolio";
import "./ExperienceCard.css";

interface ExperienceCardProps {
  experience: ArchiveEvent;
  index: number;
  totalCards: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  // Точный и пуленепробиваемый метод динамического импорта изображений концертов в Vite
  const getLogoUrl = (logoPath: string) => {
    // Намертво отрезаем "concerts/", если строка в данных уже содержит эту папку
    const cleanPath = logoPath.replace("concerts/", "");
    
    // Формируем чистый абсолютный путь от корня src для сборщика Vite
    return new URL(`../../assets/images/concerts/${cleanPath}`, import.meta.url).href;
  };

  return (
    <div className="experience-list-item">
      <Link
        to={"/archive/" + experience.id}
        className="news-card-link-wrapper"
      >
        <div className="news-card-container">
          
          {/* Изображение / Обложка события */}
          {experience.logo_path && (
            <div className="news-card-img-wrap">
              <img
                className="news-card-image"
                src={getLogoUrl(experience.logo_path)}
                alt={experience.title}
              />
            </div>
          )}

          {/* Контентная зона */}
          <div className="news-card-content-zone">
            <div className="news-card-header-line">
              <div className="news-card-title-block">
                <h3 className="news-card-main-title">
                  {experience.title}
                </h3>
                {experience.company && (
                  <p className="news-card-company-sub">
                    {experience.company}
                  </p>
                )}
              </div>

              <div className="news-card-meta-block">
                {experience.duration && (
                  <span className="news-card-duration-tag">
                    {experience.duration}
                  </span>
                )}
                {experience.location && (
                  <span className="news-card-location-text">
                    <span role="img" aria-label="Локация">
                      📍
                    </span>{" "}
                    {experience.location}
                  </span>
                )}
              </div>
            </div>

            <div className="news-card-body-text">
              {experience.description}
            </div>
          </div>

        </div>
      </Link>
    </div>
  );
};

export default ExperienceCard;
