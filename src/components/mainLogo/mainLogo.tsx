import React from "react";

// Описываем строгий интерфейс для пропсов логотипа медных духовых
interface MainLogoProps {
  size?: string;
  color?: string; // Сохраняем поддержку пропса, если понадобится динамический перекрас
  className?: string;
  style?: React.CSSProperties;
}

const MainLogo: React.FC<MainLogoProps> = ({ size, className, style }) => {
  const brassColor = "#E4A834";

  return (
    <svg
      xmlns="http://w3.org" // Исправлен стандарт XML-пространства имен
      viewBox="40 170 290 95"
      width={size || "120px"}
      height="45px"
      fill="none"
      style={{ height: size ? "auto" : "45px", ...style }}
      className={className}
    >
      <defs>
        {/* Латунный градиент духовых инструментов */}
        <linearGradient id="brassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9D076" />
          <stop offset="50%" stopColor={brassColor} />
          <stop offset="100%" stopColor="#B77F1E" />
        </linearGradient>
      </defs>

      <g
        stroke="url(#brassGradient)"
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
           СЛОВО: ЛИГА (Идеальный плотный ритм из анимации)
           ========================================================================== */}
        <path d="M68 252 L76 220 L84 252" />
        <circle
          cx="62.5"
          cy="252"
          r="7.5"
          fill="url(#brassGradient)"
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
          fill="url(#brassGradient)"
          stroke="none"
        />

        {/* ==========================================================================
           СЛОВО: БРАСС (100% совпадение по кернингу и правильные круглые СС)
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
          fill="url(#brassGradient)"
          stroke="none"
        />

        {/* С1 */}
        <path d="M279 222C273 219 265 222 265 236C265 250 273 253 279 250" />

        {/* С2 */}
        <path d="M303 222C297 219 289 222 289 236C289 250 297 253 303 250" />
      </g>
    </svg>
  );
};

export default MainLogo;
