import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import LogoLoader from "../../components/loader/LogoLoader"; // Импортируем анимированный плеер букв
import SnowLogoLoader from "../../components/loader/SnowLogoLoader";
import "./Splash.css";

const AnimatedSplash: React.FC = () => {
  return (
    <div className="logo_wrapper">
      <div className="screen">
        <div id="logo">
          {/* <LogoLoader /> Запустили прорисовку автографа Лиги Брасс */}
          <SnowLogoLoader />
        </div>
      </div>
    </div>
  );
};

const Splash: React.FC = () => {
  const [redirect, setRedirect] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setRedirect(true);
    }, 5500);

    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    if (redirect) {
      navigate("/home", { replace: true });
    }
  }, [redirect, navigate]);

  return <AnimatedSplash />;
};

export default Splash;
