import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { settings } from "../data/settings";

// Временные заглушки для страниц (на Шаге 5 мы заменим их на реальные файлы)
const Home = () => <div style={{ padding: '20px' }}>Страница: Главная</div>;
const Splash = () => <div style={{ padding: '20px' }}>Страница: Splash</div>;
const Experience = () => <div style={{ padding: '20px' }}>Страница: Хроника и новости</div>;
const Education = () => <div style={{ padding: '20px' }}>Страница: О квинтете</div>;
const Opensource = () => <div style={{ padding: '20px' }}>Страница: Медиа</div>;
const Contact = () => <div style={{ padding: '20px' }}>Страница: Контакты</div>;
const Projects = () => <div style={{ padding: '20px' }}>Страница: Программы</div>;
const MusicianPage = () => <div style={{ padding: '20px' }}>Страница: Карточка музыканта</div>;
const ArchiveDetails = () => <div style={{ padding: '20px' }}>Страница: Детали архива</div>;
const GalleryAlbum = () => <div style={{ padding: '20px' }}>Страница: Фотоальбом</div>;
const Error404 = () => <div style={{ padding: '20px', color: 'var(--color-brass)' }}>Ошибка 404: Страница не найдена</div>;

const AppRouter: React.FC = () => {
  const location = useLocation();

  // Автоматический трекинг переходов для Яндекс Метрики и Вебвизора
  useEffect(() => {
    // Проверяем, инициализирован ли глобальный счетчик Метрики на сайте
    if (typeof window !== "undefined" && (window as any).ym) {
      const counterId = 99999999; // TODO: Сюда встанет реальный ID вашего счетчика из index.html
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

      <Route path="/home" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/about" element={<Education />} />
      <Route path="/opensource" element={<Opensource />} />
      <Route path="/contact" element={<Contact />} />
      
      {settings.isSplash && <Route path="/splash" element={<Splash />} />}
      
      <Route path="/projects" element={<Projects />} />
      <Route path="/musicians/:id" element={<MusicianPage />} />
      <Route path="/archive/:id" element={<ArchiveDetails />} />
      <Route path="/gallery/:id" element={<GalleryAlbum />} />
      
      {/* Все остальные несуществующие адреса перенаправляем на 404 */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRouter;
