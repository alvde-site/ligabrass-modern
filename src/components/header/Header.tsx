import React from "react";
import { NavLink } from "react-router-dom";
import { settings } from "../../data/settings";
import MainLogo from "../mainLogo/mainLogo";
import "./Header.css";

const Header: React.FC = () => {
  const homeLink = settings.isSplash ? "/splash" : "/home";

  const navLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "var(--color-brass)" : "var(--color-text-silver)"
  });

  return (
    <div>
      <header className="header">
        <NavLink to={homeLink} className="logo">
          <MainLogo
            size="100px"
            style={{ transition: "color 0.3s ease-in-out" }}
          />
        </NavLink>
        
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        
        <ul className="menu">
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
    </div>
  );
};

export default Header;
