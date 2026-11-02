import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AppRouter from "./containers/AppRouter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CookieConsent from "./components/cookieConsent/CookieConsent";
import TopButton from "./components/topButton/TopButton";
import SnowEffect from "./components/snow/SnowEffect";

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ДЕКОДЕР SPA ССЫЛОК ДЛЯ GITHUB PAGES
  useEffect(() => {
    if (window.location.search && window.location.search.startsWith("/?/")) {
      const decodedPath = window.location.search
        .slice(3)
        .replace(/~and~/g, "&");

      // Мгновенно убираем мусор из адресной строки и ведем пользователя в SPA-роут
      navigate(decodedPath, { replace: true });
    }
  }, [navigate]);
  const isSplashPage =
    location.pathname === "/" || location.pathname === "/splash";

  return (
    <div className="app-container">
      {!isSplashPage && <Header />}

      <main className="main-content">
        <AppRouter />
      </main>

      {!isSplashPage && <Footer />}
      {!isSplashPage && <TopButton />}
      {!isSplashPage && <CookieConsent />}

      <SnowEffect />
    </div>
  );
};

export default App;
