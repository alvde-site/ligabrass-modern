import React from "react";
import { NavLink } from "react-router-dom";
import { settings } from "../../data/settings";
import MainLogo from "../mainLogo/mainLogo";
import "./Header.css";

// Типизируем пропсы для хедера, если они вам понадобятся (или оставляем пустыми)
interface HeaderProps {
  theme?: {
    body: string;
    text: string;
    highlight: string;
  };
}

const Header: React.FC<HeaderProps> = () => {
  // Вычисляем базовую ссылку в зависимости от настроек сплэш-экрана
  const homeLink = settings.isSplash ? "/splash" : "/home";

  // Функция для динамического стиля активных ссылок по канонам Лиги Брасс
  const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "var(--color-brass)" : "var(--color-text-silver)",
    borderBottom: isActive ? "1px solid var(--color-brass)" : "1px solid transparent"
  });

  return (
    <header className="header-container">
      <NavLink to={homeLink} className="logo-link">
        <MainLogo
          size="100px"
          color="var(--color-brass)"
          style={{ transition: "color 0.3s ease-in-out" }}
        />
      </NavLink>

      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>

      <ul className="menu-list">
        <li>
          <NavLink to="/home" style={navLinkStyle}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={navLinkStyle}>
            О квинтете
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" style={navLinkStyle}>
            Хроника и новости
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" style={navLinkStyle}>
            Программы
          </NavLink>
        </li>
        <li>
          <NavLink to="/opensource" style={navLinkStyle}>
            Медиа
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={navLinkStyle}>
            Контакты
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
