import React, { useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { settings } from "../../data/settings";
// import MainLogo from "../mainLogo/MainLogo";  Не новогодний лого, не удалять
import SnowMainLogo from "../mainLogo/SnowMainLogo";
import { certifications } from "../../data/certifications";
import { checkActiveConcerts } from "../../utils/concertChecker";
import "./Header.css";

const Header: React.FC = () => {
  const location = useLocation();
  const homeLink = settings.isSplash ? "/splash" : "/home";

  // Ссылка на DOM-элемент скрытого чекбокса мобильного меню
  const checkboxRef = useRef<HTMLInputElement>(null);

  // Функция, которая намертво закрывает шторку меню при SPA-переходе
  const closeMenu = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  const isAfishaActive = checkActiveConcerts(certifications);

  // Функция скролла: если мы на Главной — плавно крутим, если на другой странице — переходим на Главную к якорю
  const handleAfishaClick = (e: React.MouseEvent) => {
    closeMenu(); // Закрываем мобильное меню при клике

    if (location.pathname === "/home" || location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById("afisha");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "var(--color-brass)" : "var(--color-text-silver)",
  });

  return (
    <div>
      <header className="header">
        <NavLink to={homeLink} className="logo" onClick={closeMenu}>
          {/* Не новогодний лого, не удалять */}
          {/* <MainLogo
            size="100px"
            style={{ transition: "color 0.3s ease-in-out" }}
          /> */}
          <SnowMainLogo
            size="100px"
            style={{ transition: "color 0.3s ease-in-out" }}
          />
        </NavLink>

        {/* Привязали Ref к инпуту */}
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          ref={checkboxRef}
        />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>

        <ul className="menu">
          <li>
            <NavLink to="/home" style={navLinkStyle} onClick={closeMenu}>
              Главная
            </NavLink>
          </li>
          {isAfishaActive && (
            <li>
              <Link
                to="/home#afisha"
                onClick={handleAfishaClick}
                style={{ color: "var(--color-text-silver)" }}
              >
                Афиша
              </Link>
            </li>
          )}
          <li>
            <NavLink to="/about" style={navLinkStyle} onClick={closeMenu}>
              О квинтете
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience" style={navLinkStyle} onClick={closeMenu}>
              Хроника и новости
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" style={navLinkStyle} onClick={closeMenu}>
              Программы
            </NavLink>
          </li>
          <li>
            <NavLink to="/opensource" style={navLinkStyle} onClick={closeMenu}>
              Медиа
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={navLinkStyle} onClick={closeMenu}>
              Контакты
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
