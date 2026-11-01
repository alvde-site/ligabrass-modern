import React from "react";
import { Link } from "react-router-dom";
import UniversalPlayer from "../../components/universalPlayer/UniversalPlayer";
import { mediaPageData } from "../../data/media";
import "./Opensource.css";

const Opensource: React.FC = () => {
  const { videoList, albumList } = mediaPageData;

  // Безопасный динамический импорт изображений обложек в Vite
  const getImageUrl = (imagePath: string) => {
    return new URL(`../../assets/images/${imagePath}`, import.meta.url).href;
  };

  return (
    <div className="opensource-main page__main fade-in-up">
      <div className="media-container">
        
        {/* Шапка страницы */}
        <div className="media-header-div">
          <h1 className="media-heading-text">
            Галерея и видео
          </h1>
          <p className="media-heading-subText">
            Живые записи с выступлений, репортажи из-за кулис и тематические фотоальбомы квинтета.
          </p>
        </div>

        {/* СЕКЦИЯ КОНЦЕРТНЫХ ВИДЕО */}
        <div className="media-section">
          <h2 className="media-section-title">
            Видео с концертов
          </h2>
          <div className="video-grid">
            {videoList.map((video, index) => (
              <UniversalPlayer
                key={index}
                title={video.title}
                videoUrl={video.url}
              />
            ))}
          </div>
        </div>

        {/* СЕКЦИЯ ТЕМАТИЧЕСКИХ АЛЬБОМОВ */}
        <div className="media-section" style={{ marginTop: "60px" }}>
          <h2 className="media-section-title">
            Фотоальбомы
          </h2>
          <div className="album-grid">
            {albumList.map((album, index) => (
              <Link
                key={album.id || index}
                to={"/gallery/" + album.id}
                className="album-card-link"
              >
                <div className="album-spec-card">
                  <div className="album-cover-wrap">
                    <img
                      src={getImageUrl(album.cover)}
                      alt={album.title}
                      className="album-cover-img"
                    />
                    <div className="album-overlay-badge">
                      Открыть альбом →
                    </div>
                  </div>
                  <div className="album-card-body">
                    <h3 className="album-card-title">
                      {album.title}
                    </h3>
                    <p className="album-card-desc">
                      {album.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Opensource;
