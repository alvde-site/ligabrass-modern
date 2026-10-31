import React from "react";
import type { SocialLink } from "../../types/portfolio";
import "./SocialMedia.css";

interface SocialMediaProps {
  links: SocialLink[];
}

const SocialMedia: React.FC<SocialMediaProps> = ({ links }) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className="social-media-container">
      {links.map((media, i) => {
        // Защитный хак: определяем правильный префикс для FontAwesome v6
        // Если это VK, Telegram или бренд — ставим fa-brands, иначе fa-solid
        const isBrand = media.fontAwesomeIcon.includes("vk") || 
                        media.fontAwesomeIcon.includes("telegram") || 
                        media.fontAwesomeIcon.includes("google");
        const prefix = isBrand ? "fa-brands" : "fa-solid";

        return (
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
              {/* Подставляем вычисленный префикс вместо старого fab */}
              <i className={`${prefix} ${media.fontAwesomeIcon}`}></i>
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
