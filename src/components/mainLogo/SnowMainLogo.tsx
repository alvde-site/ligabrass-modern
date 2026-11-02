import React from "react";

// Описываем строгий интерфейс для пропсов логотипа медных духовых
interface MainLogoProps {
  size?: string;
  color?: string; // Сохраняем поддержку пропса, если понадобится динамический перекрас
  className?: string;
  style?: React.CSSProperties;
}

const MainLogo: React.FC<MainLogoProps> = ({ size, className, style }) => {
  return (
    <svg
      xmlns="http://w3.org" // Исправлен стандарт XML-пространства имен
      viewBox="40 170 290 105" // Слегка увеличили высоту viewBox, чтобы помпоны сверху не обрезались
      width={size || "120px"}
      height="45px"
      fill="none"
      style={{ height: size ? "auto" : "45px", ...style }}
      className={className}
    >
      <defs>
        {/* Рождественское платиновое золото */}
        <linearGradient id="headerBrassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2A3" />
          <stop offset="50%" stopColor="#E4A834" />
          <stop offset="100%" stopColor="#9E690B" />
        </linearGradient>

        {/* Праздничный градиент объема хлопьев */}
        <linearGradient id="headerFlakeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
      </defs>

      <g
        stroke="url(#headerBrassGradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* ОБЩАЯ МУЗЫКАЛЬНАЯ ЛИГА СВЕРХУ */}
        <path
          d="M 68 198 C 110 180, 280 180, 322 198"
          strokeWidth="4"
          fill="none"
        />

        {/* ==========================================================================
           СЛОВО: ЛИГА
           ========================================================================== */}
        <path d="M68 252 L76 220 L84 252" />
        <circle
          cx="62.5"
          cy="252"
          r="7.5"
          fill="url(#headerBrassGradient)"
          stroke="none"
        />

        {/* И */}
        <path d="M96 220V252 M96 242L112 220 M112 220V252" />

        {/* Г */}
        <path d="M124 252V220H140" />

        {/* А1 */}
        <path d="M142 252L151 220L160 252 M145 242H157" />
        <circle
          cx="136.5"
          cy="252"
          r="7.5"
          fill="url(#headerBrassGradient)"
          stroke="none"
        />

        {/* ==========================================================================
           СЛОВО: БРАСС
           ========================================================================== */}
        {/* Б */}
        <path d="M184 220H197 M184 220V252H195C202 252 206 238 195 238H184" />

        {/* Р */}
        <path d="M211 252V220H223C230 220 230 236 223 236H211" />

        {/* А2 */}
        <path d="M237 252L246 220L255 252 M240 242H252" />
        <circle
          cx="231.5"
          cy="252"
          r="7.5"
          fill="url(#headerBrassGradient)"
          stroke="none"
        />

        {/* С1 */}
        <path d="M279 222C273 219 265 222 265 236C265 250 273 253 279 250" />

        {/* С2 */}
        <path d="M303 222C297 219 289 222 289 236C289 250 297 253 303 250" />

        {/* ❄️ ИЗЯЩНЫЙ СТАТИЧНЫЙ СУГРОБ: Полное геометрическое совпадение с заставкой */}
        <g fill="url(#headerFlakeGrad)" stroke="none">
          {/* Слой 1: Основа */}
          <circle cx="67" cy="222" r="3.8" />
          <circle cx="71" cy="220" r="4.5" />
          <circle cx="75" cy="219" r="4.8" />
          <circle cx="79" cy="219" r="4.8" />
          <circle cx="83" cy="221" r="4.5" />

          {/* Слой 2: Пышность */}
          <circle cx="69" cy="225" r="3.2" />
          <circle cx="85" cy="224" r="3.5" />
          <circle cx="73" cy="216" r="3.8" />
          <circle cx="77" cy="214" r="5.2" />
          <circle cx="81" cy="216" r="4.0" />

          {/* Слой 3: Верхушка */}
          <circle cx="75" cy="211" r="3.0" />
          <circle cx="79" cy="211" r="3.2" />

          {/* Слой 4: Свисающие края, обволакивающие букву Л */}
          <circle cx="65.5" cy="225" r="2.5" />
          <circle cx="64" cy="228" r="1.8" />
          <circle cx="86.5" cy="225" r="2.2" />
        </g>
      </g>
    </svg>
  );
};

export default MainLogo;
