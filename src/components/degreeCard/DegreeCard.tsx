import React from "react";
import { Link } from "react-router-dom";
import type { MusicianMainCard } from "../../types/portfolio";
import "./DegreeCard.css";

interface DegreeCardProps {
  degree: MusicianMainCard;
}

const DegreeCard: React.FC<DegreeCardProps> = ({ degree }) => {
  // 1. Вытаскиваем точное имя файла картинки, защищаясь от разности имён в старых базах данных
  const photoFileName = degree.logo_path || (degree as any).avatar_image_path || (degree as any).photo;

  // 2. Пуленепробиваемый метод динамического получения путей к подпапке музыкантов в Vite
  const getMusicianImgUrl = (photoPath: string) => {
    // Очищаем путь от случайных дублирований подстроки "musicians/", если они уже есть в базе данных
    const cleanPath = photoPath.replace("musicians/", "");
    return new URL(`../../assets/images/musicians/${cleanPath}`, import.meta.url).href;
  };

  return (
    <div className="degree-card">
      {/* Круглый блок фотографии музыканта */}
      {photoFileName && (
        <div className="card-img-block">
          <img
            src={getMusicianImgUrl(photoFileName)}
            alt={degree.alt_name || degree.title}
          />
        </div>
      )}

      {/* Контейнер тела карточки */}
      <div 
        className="card-body-block"
        style={{ width: photoFileName ? "90%" : "100%" }}
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
