import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk, faTelegram, faGoogle } from "@fortawesome/free-brands-svg-icons";
import type { SocialLink } from "../../types/portfolio";
import "./SocialMedia.css";

interface SocialMediaProps {
  links: SocialLink[];
}

const SocialMedia: React.FC<SocialMediaProps> = ({ links }) => {
  if (!links || links.length === 0) return null;

  // Мапа для сопоставления старых строковых названий с новыми типизированными SVG-объектами
  const iconMap: { [key: string]: any } = {
    "fa-vk": faVk,
    "fa-telegram": faTelegram,
    "fa-google": faGoogle,
  };

  return (
    <div className="social-media-container">
      {links.map((media, i) => {
        const iconDefinition = iconMap[media.fontAwesomeIcon];
        if (!iconDefinition) return null;

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
              <FontAwesomeIcon icon={iconDefinition} />
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
