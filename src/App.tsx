import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AppRouter from "./containers/AppRouter";
import "./App.css";
import CookieConsent from "./components/cookieConsent/CookieConsent";
import TopButton from "./components/topButton/TopButton";
import SnowEffect from "./components/snow/SnowEffect";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="page__main">
        <Header />
        <main className="page-content">
          <AppRouter />
        </main>
        <Footer />
        <CookieConsent />
        <TopButton /> 
        <SnowEffect /> {/* Снег пошел! */}
      </div>
    </BrowserRouter>
  );
};

export default App;
