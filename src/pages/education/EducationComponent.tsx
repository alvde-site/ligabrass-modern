import React from "react";
import Educations from "../../containers/education/Educations";
import aboutBarImage from "../../assets/images/about.webp";
import "./EducationComponent.css";

const Education: React.FC = () => {
  return (
    <div className="education-main page__main fade-in-up">
      <div className="basic-education">
        
        {/* Шапка раздела */}
        <div className="heading-div">
          {/* Левая часть: Реальное изображение духовых */}
          <div className="heading-img-div">
            <img
              src={aboutBarImage}
              alt="Инструменты брасс-квинтета Лига Брасс"
              className="hero-real-image"
            />
          </div>

          {/* Правая часть: Лаконичное описание */}
          <div className="heading-text-div">
            <h1 className="heading-text">
              Знакомство с квинтетом
            </h1>
            <p className="heading-subText">
              Ансамбль солистов, представляющий классический состав медных
              духовых инструментов и академический музыкальный репертуар.
            </p>
          </div>
        </div>

        {/* Секция детального таймлайна/истории */}
        <Educations />
        
      </div>
    </div>
  );
};

export default Education;
