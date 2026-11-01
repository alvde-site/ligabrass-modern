import React, { useState } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import type { ExperienceSection } from "../../types/portfolio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./ExperienceAccordion.css";

interface ExperienceAccordionProps {
  sections: ExperienceSection[];
}

const ExperienceAccordion: React.FC<ExperienceAccordionProps> = ({ sections }) => {
  // Храним массив заголовков открытых панелей
  const [openSections, setOpenSections] = useState<string[]>([sections[0]?.title || ""]);

  const toggleSection = (title: string) => {
    setOpenSections((prevOpen) =>
      prevOpen.includes(title)
        ? prevOpen.filter((t) => t !== title)
        : [...prevOpen, title]
    );
  };

  return (
    <div className="experience-accord">
      {sections.map((section) => {
        const isOpen = openSections.includes(section.title);

        return (
          <div key={section.title} className="accord-panel-wrapper">
            {/* Заголовок вкладки (Кнопка) */}
            <button
              className={`accord-panel-header ${isOpen ? "expanded" : ""}`}
              onClick={() => toggleSection(section.title)}
              aria-expanded={isOpen}
            >
              <span className="accord-panel-title">{section.title}</span>
              <span className="accord-toggle-icon">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </button>

            {/* Контентная область вкладки с плавной CSS-анимацией раскрытия */}
            <div className={`accord-panel-content ${isOpen ? "open" : ""}`}>
              <div className="accord-panel-inner">
                {section.experiences.map((exp, index) => (
                  <ExperienceCard
                    key={exp.id || index}
                    index={index}
                    totalCards={section.experiences.length}
                    experience={exp}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceAccordion;
