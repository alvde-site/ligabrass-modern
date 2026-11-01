import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLogo from "../../components/mainLogo/MainLogo"; // Используем пуленепробиваемый логотип
import "./Splash.css";

const AnimatedSplash: React.FC = () => {
  return (
    <div className="logo_wrapper">
      <div className="screen">
        <div id="logo">
          <MainLogo size="240px" />
        </div>
      </div>
    </div>
  );
};

const Splash: React.FC = () => {
  const [redirect, setRedirect] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Установка таймера на перенаправление
    const timerId = setTimeout(() => {
      setRedirect(true);
    }, 5500);

    // Чистим таймер при размонтировании для защиты от утечек памяти
    return () => clearTimeout(timerId);
  }, []);

  // Выполняем SPA-навигацию при срабатывании стейта
  useEffect(() => {
    if (redirect) {
      navigate("/home", { replace: true });
    }
  }, [redirect, navigate]);

  return <AnimatedSplash />;
};

export default Splash;
