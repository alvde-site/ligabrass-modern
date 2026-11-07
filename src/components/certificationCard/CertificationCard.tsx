import React, { useRef } from "react";
import type { ConcertTicket } from "../../types/portfolio";
import "./CertificationCard.css";

const SimpleButton: React.FC<{ text: string; href: string }> = ({ text, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="concert-btn">
    {text}
  </a>
);

interface CertificationCardProps {
  certificate: ConcertTicket;
  isOpen: boolean;
  onToggle: () => void;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certificate, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const currentHeight = isOpen && contentRef.current ? `${contentRef.current.scrollHeight}px` : "0px";

  const getPosterUrl = (posterPath: string) => {
    const cleanPath = posterPath.replace("concerts/", "");
    return new URL(`../../assets/images/concerts/${cleanPath}`, import.meta.url).href;
  };

  return (
    <div className={`cert-card ${isOpen ? "active" : ""}`} onClick={onToggle}>
      {/* Верхняя панель: Дата и Время проведения */}
      <div className="cert-card__content content">
        <div className="cert-header">
          <div className="cert-header__toolbar">
            <time className="cert-header__date">
              {certificate.concert_date}
            </time>

            <div className="cert-header__right-block">
              <div className="cert-header__time-wrapper">
                <span className="cert-header__day">
                  {certificate.concert_day || "суббота"}
                </span>
                <time className="cert-header__time">
                  {certificate.concert_time || "19:00"}
                </time>
              </div>
            </div>
          </div>
        </div>

        {/* 🌟 ПЕРЕНЕСЕНО СЮДА: Шеврон садится точно по центру разделительной линии */}
        <div className="cert-card__edge-divider">
          <span className="cert-card__chevron-icon">
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://w3.org">
              <path d="M1 1.5L7 7.5L13 1.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>

      {/* Тело карточки: Название концерта и Зал (Видно всегда) */}
      <div className="cert-body">
        <h3 className="cert-body-title">{certificate.title}</h3>
        <div className="cert-body-subtitle">
          г. <span>{certificate.concert_city}</span>,{" "}
          <span>{certificate.concert_hall}</span>
        </div>
      </div>

      {/* Раскрывающийся блок подробностей (Аккордеон) */}
      <div
        className="cert-card__concert concert"
        ref={contentRef}
        style={{
          height: currentHeight,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="concert__inner-padding">
          <div className="concert__content">
            {certificate.concert_info && (
              <p className="concert__info">{certificate.concert_info}</p>
            )}

            {certificate.concert_workslist && certificate.concert_workslist.length > 0 && (
              <div className="concert__section">
                <h4 className="concert__title">Программа концерта:</h4>
                <ul className="concert__list">
                  {certificate.concert_workslist.map((work, i) => (
                    <li key={i}>{work}</li>
                  ))}
                </ul>
              </div>
            )}

            {certificate.concert_artists && certificate.concert_artists.length > 0 && (
              <div className="concert__section">
                <h4 className="concert__title">Участники:</h4>
                <ul className="concert__list">
                  {certificate.concert_artists.map((artist, i) => (
                    <li key={i}>{artist}</li>
                  ))}
                </ul>
              </div>
            )}

            {certificate.concert_address && (
              <div className="concert__section">
                <h4 className="concert__title">Адрес:</h4>
                <p className="concert__info">{certificate.concert_address}</p>
              </div>
            )}

            {(certificate.more_button || certificate.buy_button) && (
              <div className="concert__buttons" onClick={(e) => e.stopPropagation()}>
                {certificate.more_button && (
                  <SimpleButton text="Подробнее" href={certificate.more_button} />
                )}
                {certificate.buy_button && (
                  <SimpleButton text="Купить билет" href={certificate.buy_button} />
                )}
              </div>
            )}
          </div>

          <div className="description__poster-wrap">
            {certificate.concert_poster ? (
              <img
                className="description__poster"
                alt={`Афиша концерта ${certificate.title}`}
                src={getPosterUrl(certificate.concert_poster)}
              />
            ) : (
              <div className="description__poster-placeholder">
                <span role="img" aria-label="Иконка труба">
                  🎺
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
