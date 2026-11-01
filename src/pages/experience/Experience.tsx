import React from "react";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion";
import { experienceData } from "../../data/experience";
import "./Experience.css";

const Experience: React.FC = () => {
  const getImageUrl = (imagePath: string) => {
    return new URL(`../../assets/images/${imagePath}`, import.meta.url).href;
  };

  return (
    <div className="experience-main page__main fade-in-up">
      <div className="basic-experience">
        <div className="experience-heading-div">
          
          {/* Левая часть: Изображение-баннер */}
          <div className="experience-heading-img-div">
            <img
              src={getImageUrl(experienceData.header_image_path)}
              alt={experienceData.title}
              className="experience-hero-image"
            />
          </div>

          {/* Правая часть: Описание хроники */}
          <div className="experience-heading-text-div">
            <h1 className="experience-heading-text">
              {experienceData.title}
            </h1>
            <h2 className="experience-heading-sub-text">
              {experienceData.subtitle}
            </h2>
            <p className="experience-header-detail-text subTitle">
              {experienceData.description}
            </p>
          </div>

        </div>
      </div>

      {/* Передаем секции (Новости и Архив прошедших выступлений) в аккордеон */}
      <div className="experience-accordion-wrap">
        <ExperienceAccordion sections={experienceData.sections} />
      </div>
    </div>
  );
};

export default Experience;
