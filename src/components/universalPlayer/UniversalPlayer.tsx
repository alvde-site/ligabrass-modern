import React from "react";

// Описываем строгий интерфейс для пропсов плеера
interface UniversalPlayerProps {
  videoUrl: string;
  title: string;
}

const UniversalPlayer: React.FC<UniversalPlayerProps> = ({ videoUrl, title }) => {
  // Защитное правило: если ссылка пустая — ничего не рендерим
  if (!videoUrl) return null;

  const isVk = videoUrl.includes("vk.com") || videoUrl.includes("vk.ru");
  const isRutube = videoUrl.includes("rutube.ru");
  
  let allowSettings = "autoplay; encrypted-media; fullscreen; picture-in-picture;";
  
  if (isRutube) {
    // RuTube запрашивает буфер обмена для шаринга контента внутри фрейма
    allowSettings += " clipboard-write;";
  } else if (isVk) {
    // VK Видео удерживает подсветку экрана смартфона от засыпания при просмотре
    allowSettings += " screen-wake-lock;";
  }

  return (
    <div className="video-card">
      <div className="video-responsive-wrap">
        <iframe
          src={videoUrl}
          allow={allowSettings}
          allowFullScreen
          title={title}
        ></iframe>
      </div>
      <p className="video-card-title">
        {title}
      </p>
    </div>
  );
};

export default UniversalPlayer;
