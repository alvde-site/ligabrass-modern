import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./TopButton.css";

const TopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Кнопка плавно проявляется, если пользователь проскроллил вниз больше 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Фирменная плавная филармоническая прокрутка
    });
  };

  if (!isVisible) return null;

  return (
    <button className="top-scroll-btn fade-in" onClick={scrollToTop} aria-label="Наверх">
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default TopButton;
