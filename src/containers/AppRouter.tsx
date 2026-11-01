import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { settings } from "../data/settings";

// НАСТОЯЩИЕ ИСПРАВЛЕННЫЕ СТРАНИЦЫ (ИМПОРТИРУЕМ ГОТОВЫЙ СТЕК ШАГА 5 И 6):
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



// ВРЕМЕННЫЕ ЛЕГКОВЕСНЫЕ ЗАГЛУШКИ ДЛЯ ОСТАВШИХСЯ СТРАНИЦ (ПЕРЕВЕДЕНЫ НА ЧИСТЫЙ TSX):
const Error404: React.FC = () => (
  <div style={{ padding: '40px', textAlign: 'center', color: 'var(--color-brass)' }}>
    <h1>Ошибка 404</h1>
    <p>Страница не найдена. Вернитесь в главное меню навигации.</p>
  </div>
);

const AppRouter: React.FC = () => {
  const location = useLocation();

  // Автоматический трекинг переходов для Яндекс Метрики и Вебвизора
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).ym) {
      const counterId = 99999999; // TODO: Замените на реальный ID счетчика коллектива
      (window as any).ym(counterId, "hit", location.pathname + location.search);
    }
  }, [location]);

  return (
    <Routes>
      {/* Главный роут с проверкой сплэш-экрана */}
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
