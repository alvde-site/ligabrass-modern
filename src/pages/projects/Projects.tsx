import React from "react";
import { Link } from "react-router-dom";
import { projectsHeader } from "../../data/portfolio"; // Корректный импорт ваших данных репертуара
import "./Projects.css";

const Projects: React.FC = () => {
  const projectsData = projectsHeader;

  // Пуленепробиваемый метод динамического импорта картинок в Vite
  const getImageUrl = (imagePath: string) => {
    return new URL(`../../assets/images/${imagePath}`, import.meta.url).href;
  };

  return (
    <div className="projects-main page__main fade-in-up">
      <div className="basic-projects">
        
        {/* Шапка страницы */}
        <div className="projects-heading-div">
          <div className="projects-heading-img-div">
            <img
              src={getImageUrl(projectsData.avatar_image_path)}
              alt={projectsData.title}
              className="projects-hero-image"
            />
          </div>
          <div className="projects-heading-text-div">
            <h1 className="projects-heading-text">
              {projectsData.title}
            </h1>
            <p className="projects-header-detail-text subTitle">
              {projectsData.description}
            </p>
          </div>
        </div>

        {/* Секция карточек программ с автоматическим выравниванием через CSS Grid */}
        <div className="programs-grid-div">
          {projectsData.programs.map((program, index) => (
            <Link
              key={program.id || index}
              to={`/archive/${program.id ? program.id : encodeURIComponent(program.title)}`}
              className="program-card-link-wrap"
            >
              <div className="program-spec-card">
                <div className="program-card-header">
                  <h2 className="program-card-title">
                    {program.title}
                  </h2>
                  <span className="program-card-duration">
                    {program.duration}
                  </span>
                </div>
                <p className="program-card-desc">
                  {program.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;
