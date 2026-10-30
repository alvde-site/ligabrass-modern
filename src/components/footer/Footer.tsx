import React from "react";
import "./Footer.css";

interface FooterProps {
  // Пропсы оставляем опциональными для гибкости, если в будущем захотите вернуть смену тем
  theme?: {
    secondaryText: string;
  };
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer-div">
      <div className="footer-content-wrap">
        <p className="footer-text">
          © 2026 Лига Брасс. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
