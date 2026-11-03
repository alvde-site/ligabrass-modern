import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { settings } from "../data/settings";
import Home from "../pages/home/HomeComponent";
import Projects from "../pages/projects/Projects";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import ArchiveDetails from "../pages/archive/ArchiveDetails";
import Education from "../pages/education/EducationComponent";
import GalleryAlbum from "../pages/opensource/GalleryAlbum";
import MusicianPage from "../pages/musician/MusicianPage";
import Splash from "../pages/splash/Splash";
import Error404 from "../pages/errors/error404/Error";

const AppRouter: React.FC = () => {
  const location = useLocation();

  // Автоматический трекинг переходов для Яндекс Метрики и Вебвизора
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).ym) {
      const counterId = 113839839; // ID счетчика
      (window as any).ym(counterId, "hit", location.pathname + location.search);
    }
  }, [location]);

  return (
    <Routes>
       <Route
        path="/"
        element={
          settings.isSplash ? (
            <Navigate to="/splash" replace />
          ) : (
            <Navigate to="/home" replace />
          )
        }
      />

      {/* Подключение боевых страниц */}
      <Route path="/home" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/archive" element={<Navigate to="/experience" replace />} />
      <Route path="/opensource" element={<Opensource />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Подключение временных интерактивных заглушек */}
      {settings.isSplash && <Route path="/splash" element={<Splash />} />}
      <Route path="/about" element={<Education />} />
      <Route path="/musicians/:id" element={<MusicianPage />} />
      <Route path="/archive/:id" element={<ArchiveDetails />} />
      <Route path="/gallery/:id" element={<GalleryAlbum />} />
      
      {/* Защита от битых URL */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRouter;
