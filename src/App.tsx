import React from "react";
import { useLocation } from "react-router-dom"; // Хук теперь сработает идеально!
import AppRouter from "./containers/AppRouter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import CookieConsent from "./components/cookieConsent/CookieConsent";
import TopButton from "./components/topButton/TopButton";
import SnowEffect from "./components/snow/SnowEffect";

const App: React.FC = () => {
  const location = useLocation();
  const isSplashPage = location.pathname === "/" || location.pathname === "/splash";

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
