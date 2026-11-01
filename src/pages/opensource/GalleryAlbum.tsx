import React from "react";
import { useParams, Link } from "react-router-dom";
import { mediaPageData } from "../../data/media"; // Наш чистый файл медиаконтента
import "./GalleryAlbum.css";

const GalleryAlbum: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Ищем нужный фотоальбом по его уникальному ID
  const currentAlbum = mediaPageData.albumList.find((album) => album.id === id);

  // Метод динамического получения путей к картинкам в Vite
  const getPhotoUrl = (photoSrc: string) => {
    return new URL(`../../assets/images/${photoSrc}`, import.meta.url).href;
  };

  // Экран обработки ошибок, если ID альбома не найден
  if (!currentAlbum) {
    return (
      <div className="gallery-album-main page__main fade-in-up">
        <div className="album-error-container">
          <h2>Альбом не найден</h2>
          <Link to="/opensource" className="album-nav-back">
            ← Вернуться в Медиагалерею
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-album-main page__main fade-in-up">
      <div className="album-container">
        
        {/* Шапка альбома */}
        <div className="album-inner-header">
          <Link to="/opensource" className="album-nav-back">
            ← Назад в Галерею
          </Link>
          <h1 className="album-inner-title">{currentAlbum.title}</h1>
          <p className="album-inner-desc">{currentAlbum.description}</p>
        </div>

        {/* Сетка всех фотографий альбома (3 в ряд на десктопе) */}
        <div className="album-photos-grid">
          {currentAlbum.photos.map((photo, index) => (
            <div key={index} className="album-photo-card">
              <img
                src={getPhotoUrl(photo.src)}
                alt={photo.alt}
                className="album-inner-img"
                title={photo.alt}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default GalleryAlbum;
