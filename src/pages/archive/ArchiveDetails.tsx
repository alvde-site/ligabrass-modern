import React from "react";
import { useParams, Link } from "react-router-dom";
import { experienceData } from "../../data/experience";
import { projectsHeader } from "../../data/projects";
import "./ArchiveDetails.css";

// Расширенный локальный интерфейс для пуленепробиваемого рендеринга сквозного контента
interface DetailedItem {
  id: string;
  type: "news" | "archive" | "program";
  title: string;
  company: string;
  description: string;
  poster: string;
  duration?: string;
  news_date?: string;
  location?: string;
  programList?: string[];
  fullStory?: string[];
  reviews?: Array<{ author: string; text: string }>;
}

const ArchiveDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  let item: DetailedItem | null = null;

  const cleanStr = (str: string | undefined) =>
    str ? str.toLowerCase().replace(/[-_]/g, "").trim() : "";

  const targetId = cleanStr(id);

  // 1. Поиск в разделах Хроники и Новостей
  if (experienceData && experienceData.sections) {
    for (const section of experienceData.sections) {
      const found = section.experiences.find(
        (x) =>
          cleanStr(x.id) === targetId ||
          cleanStr(x.title) === targetId ||
          cleanStr(encodeURIComponent(x.title)) === targetId,
      );
      if (found) {
        item = {
          id: found.id,
          type: found.type,
          title: found.title,
          company: found.company,
          description: found.description,
          poster: found.poster,
          duration: found.duration,
          news_date: found.news_date,
          location: found.location,
          fullStory: found.fullStory,
          reviews: found.reviews,
        };
        break;
      }
    }
  }

  // 2. Если в Хронике ничего нет — ищем в Концертных программах
  if (!item && projectsHeader && projectsHeader.programs) {
    const foundProgram = projectsHeader.programs.find(
      (x) =>
        cleanStr(x.id) === targetId ||
        cleanStr(x.title) === targetId ||
        cleanStr(encodeURIComponent(x.title)) === targetId,
    );
    if (foundProgram) {
      item = {
        id: foundProgram.id,
        type: "program",
        title: foundProgram.title,
        company: foundProgram.company,
        description: foundProgram.description,
        poster: foundProgram.poster,
        duration: foundProgram.duration,
        location: foundProgram.location,
        programList: foundProgram.programList,
      };
    }
  }

  const getPosterUrl = (posterPath: string) => {
    // 1. Намертво очищаем путь от старых префиксов папок, если они зашиты в базу данных
    const cleanPath = posterPath
      .replace("concerts/", "")
      .replace("musicians/", "");

    // 2. Умное автоматическое определение подпапки на основе типа контента
    // Если тип "program" или "news" или "archive" — картинка лежит в concerts, иначе в musicians
    const subFolder =
      item?.type === "program" ||
      item?.type === "news" ||
      item?.type === "archive"
        ? "concerts"
        : "musicians";

    // 3. Формируем чистый абсолютный путь от корня src для сборщика Vite
    return new URL(
      `/src/assets/images/${subFolder}/${cleanPath}`,
      window.location.origin,
    ).href;
  };

  // Защитный экран: если материала с таким ID не существует
  if (!item) {
    return (
      <div className="archive-details-main page__main fade-in-up">
        <div className="archive-error-container">
          <h2>Материал не найден</h2>
          <Link to="/projects" className="error-return-link">
            ← Вернуться к концертным программам
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="archive-details-main page__main fade-in-up">
      <div className="archive-details-container">
        <div className="article-layout">
          {/* Левая колонка: Большая афиша / Постер события */}
          {item.poster && (
            <div className="article-sidebar">
              <img
                src={getPosterUrl(item.poster)}
                alt={item.title}
                className="article-poster-img"
              />
            </div>
          )}

          {/* Правая колонка: Основное развернутое содержание */}
          <div className="article-content">
            <div className="article-meta-line">
              {item.duration && (
                <span className="article-tag-duration">{item.duration}</span>
              )}
              {item.news_date && (
                <span className="article-tag-date">
                  <span role="img" aria-label="Календарь">
                    📅
                  </span>{" "}
                  {item.news_date}
                </span>
              )}
              {item.location && (
                <span className="article-tag-location">
                  <span role="img" aria-label="Локация">
                    📍
                  </span>{" "}
                  {item.location}
                </span>
              )}
            </div>

            <h1 className="article-title">{item.title}</h1>
            <h3 className="article-subtitle">{item.company}</h3>

            <p className="article-lead-desc">{item.description}</p>

            {/* 🎼 АДАПТИВНЫЙ БЛОК I: Концертная программа (Список произведений) */}
            {item.type === "program" && item.programList && (
              <div className="article-special-section">
                <h4 className="section-inner-title">Исполняемая программа:</h4>
                <ul className="music-repertoire-list">
                  {item.programList.map((track, idx) => (
                    <li key={idx}>{track}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* 📰 АДАПТИВНЫЙ БЛОК II: Текстовые статьи / Новости / Развернутые описания */}
            {item.fullStory && (
              <div className="article-special-section">
                {item.fullStory.map((paragraph, idx) => (
                  <p key={idx} className="story-paragraph">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}

            {/* 💬 АДАПТИВНЫЙ БЛОК III: Архив выступлений (Рецензии и отзывы) */}
            {item.type === "archive" && item.reviews && (
              <div className="article-special-section">
                <h4 className="section-inner-title">Рецензии и отзывы:</h4>
                <div className="reviews-stack">
                  {item.reviews.map((review, idx) => (
                    <blockquote key={idx} className="review-blockquote">
                      <p className="review-text">{review.text}</p>
                      <cite className="review-author">— {review.author}</cite>
                    </blockquote>
                  ))}
                </div>
              </div>
            )}

            {/* Кнопка адаптивного возврата */}
            <Link
              to={item.type === "program" ? "/projects" : "/experience"}
              className="article-back-button"
            >
              {item.type === "program"
                ? "← К концертным программам"
                : "← Назад к хронике"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveDetails;
