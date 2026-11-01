import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Проверяем, давал ли пользователь согласие ранее
    const consent = localStorage.getItem("cookie-consent-accepted");
    if (!consent) {
      // Показываем окошко с небольшой задержкой для плавности
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent-accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-root">
      <div className="cookie-banner-container">
        <div className="cookie-text-block">
          <span role="img" aria-label="cookie" className="cookie-emoji">
            🍪
          </span>
          <p className="cookie-description">
            Мы используем технические файлы cookie и данные локального хранилища
            для обеспечения корректной работы интерфейса и навигации. Оставаясь
            на сайте, вы соглашаетесь с их использованием. Файлы cookie можно
            отключить в настройках Вашего браузера.
          </p>
        </div>
        <button className="cookie-accept-btn" onClick={handleAccept}>
          Принять
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
