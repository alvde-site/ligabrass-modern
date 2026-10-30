import React from "react";
import type { SocialLink } from "../../types/portfolio";
import "./SocialMedia.css";

interface SocialMediaProps {
  links: SocialLink[];
}

const SocialMedia: React.FC<SocialMediaProps> = ({ links }) => {
  // Строгое правило защиты: если массив не передан или пуст — возвращаем null
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className="social-media-container">
      {links.map((media, i) => (
        <a
          key={i}
          href={media.link}
          className="social-icon-button"
          target="_blank"
          rel="noopener noreferrer"
          title={media.name}
        >
          <span 
            className="social-icon-wrapper"
            style={{ '--icon-bg-color': media.backgroundColor } as React.CSSProperties}
          >
            <i className={`fab ${media.fontAwesomeIcon}`}></i>
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
