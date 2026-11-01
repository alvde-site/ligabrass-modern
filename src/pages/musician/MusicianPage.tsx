import React from "react";
import { useParams, Link } from "react-router-dom";
import { musiciansDetails } from "../../data/musicians";
import "./MusicianPage.css";

const MusicianPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Ищем нужного музыканта по ключу (bakharev, grinemayer и т.д.)
  const artist = id ? musiciansDetails[id] : undefined;

const getArtistImgUrl = (photoPath: string) => {
  // Намертво отрезаем "musicians/", если строка в данных уже содержит эту папку
  const cleanPath = photoPath.replace("musicians/", "");
  
  return new URL(`../../assets/images/musicians/${cleanPath}`, import.meta.url).href;
};


  // Экран обработки ошибок, если музыкант не найден
  if (!artist) {
    return (
      <div className="musician-page-main page__main fade-in-up">
        <div className="musician-error-container">
          <h2>Музыкант не найден</h2>
          <Link to="/about" className="error-return-link">
            Вернуться к составу
          </Link>
        </div>
      </div>
    );
  }

  // Защитный поиск имени свойства: проверяем все возможные варианты названия поля картинки
  const targetPhoto = artist.photo || (artist as any).logo_path || (artist as any).avatar_image_path;

  return (
    <div className="musician-page-main page__main fade-in-up">
      <div className="musician-container">
        
        {/* Левая колонка: Фото и Кнопки связи */}
        <div className="musician-left">
          {targetPhoto && (
            <img
              src={getArtistImgUrl(targetPhoto)}
              alt={artist.name}
              className="musician-photo"
            />
          )}
          <div className="musician-socials">
            {artist.vk && (
              <a
                href={artist.vk}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn vk-btn"
              >
                Профиль ВКонтакте
              </a>
            )}
            {artist.telegram && (
              <a
                href={artist.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn tg-btn"
              >
                Telegram-канал
              </a>
            )}
          </div>
        </div>

        {/* Правая колонка: Развернутая творческая биография */}
        <div className="musician-right">
          <span className="musician-label">
            {artist.instrument}
          </span>
          <h1 className="musician-name">{artist.name}</h1>
          <div className="musician-bio">
            {artist.bio.map((paragraph, index) => (
              <p key={index}>
                {paragraph}
              </p>
            ))}
          </div>
          <Link to="/about" className="back-to-team">
            ← Назад к составу
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MusicianPage;
