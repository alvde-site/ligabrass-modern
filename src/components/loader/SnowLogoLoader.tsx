import React from "react";
import "./SnowLogoLoader.css";

const SnowLogoLoader: React.FC = () => {
  return (
    <svg
      className="raw_logo new-year-logo"
      width="60%"
      height="40%"
      viewBox="40 170 290 95"
      fill="none"
      xmlns="http://w3.org"
    >
      <defs>
        <linearGradient id="brassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2A3" />
          <stop offset="50%" stopColor="#E4A834" />
          <stop offset="100%" stopColor="#9E690B" />
        </linearGradient>

        <linearGradient id="flakeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
      </defs>

      <g
        stroke="url(#brassGradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Большая общая музыкальная лига сверху */}
        <path
          className="music-slur"
          d="M 68 198 C 110 180, 280 180, 322 198"
          strokeWidth="4.5"
          fill="none"
        />

        {/* СЛОВО «ЛИГА» */}
        <path className="sig-letter sig-l" d="M68 252 L76 220 L84 252" />
        <circle
          className="sig-dot dot-l"
          cx="62.5"
          cy="252"
          r="7.5"
          stroke="none"
        />
        <path
          className="sig-letter sig-i"
          d="M96 220V252 M96 242L112 220 M112 220V252"
        />
        <path className="sig-letter sig-g" d="M124 252V220H140" />
        <path
          className="sig-letter sig-a1"
          d="M142 252L151 220L160 252 M145 242H157"
        />
        <circle
          className="sig-dot dot-a1"
          cx="136.5"
          cy="252"
          r="7.5"
          stroke="none"
        />

        {/* СЛОВО «БРАСС» */}
        <path
          className="sig-letter sig-b"
          d="M184 220H197 M184 220V252H195C202 252 206 238 195 238H184"
        />
        <path
          className="sig-letter sig-r"
          d="M211 252V220H223C230 220 230 236 223 236H211"
        />
        <path
          className="sig-letter sig-a2"
          d="M237 252L246 220L255 252 M240 242H252"
        />
        <circle
          className="sig-dot dot-a2"
          cx="231.5"
          cy="252"
          r="7.5"
          stroke="none"
        />
        <path
          className="sig-letter sig-s1"
          d="M279 222C273 219 265 222 265 236C265 250 273 253 279 250"
        />
        <path
          className="sig-letter sig-s2"
          d="M303 222C297 219 289 222 289 236C289 250 297 253 303 250"
        />

        {/* ПЫШНЫЙ НОВОГОДНИЙ СУГРОБ ИЗ ТЯЖЕЛЫХ ХЛОПЬЕВ */}
        {/* ПЫШНЫЙ НОВОГОДНИЙ СУГРОБ ИЗ ТЯЖЕЛЫХ ХЛОПЬЕВ */}
        <g fill="url(#flakeGrad)" stroke="none" className="snow-flakes-group">
          {/* Слой 1: Нижняя основа, ложащаяся на пик */}
          <circle cx="67" cy="222" r="3.8" className="ny-flake f-1" />
          <circle cx="71" cy="220" r="4.5" className="ny-flake f-2" />
          <circle cx="75" cy="219" r="4.8" className="ny-flake f-3" />
          <circle cx="79" cy="219" r="4.8" className="ny-flake f-4" />
          <circle cx="83" cy="221" r="4.5" className="ny-flake f-5" />

          {/* Слой 2: Создание пышной формы по бокам */}
          <circle cx="69" cy="225" r="3.2" className="ny-flake f-6" />
          <circle cx="85" cy="224" r="3.5" className="ny-flake f-7" />
          <circle cx="73" cy="216" r="3.8" className="ny-flake f-8" />
          <circle cx="77" cy="214" r="5.2" className="ny-flake f-9" />
          <circle cx="81" cy="216" r="4.0" className="ny-flake f-10" />

          {/* Слой 3: Самая верхушка сугроба */}
          <circle cx="75" cy="211" r="3.0" className="ny-flake f-11" />
          <circle cx="79" cy="211" r="3.2" className="ny-flake f-12" />

          {/* Слой 4: ИСПРАВЛЕНО — Снежинки плотно поджаты к сугробу и букве Л */}
          <circle cx="65.5" cy="225" r="2.5" className="ny-flake f-13" />
          <circle cx="64" cy="228" r="1.8" className="ny-flake f-14" />
          <circle cx="86.5" cy="225" r="2.2" className="ny-flake f-15" />
        </g>
      </g>
    </svg>
  );
};

export default SnowLogoLoader;
