import React, { useState, useEffect } from "react";
import "./TopButton.css";

const TopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const goUpEvent = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const scrollFunction = (): void => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  return (
    <button
      onClick={goUpEvent}
      className={`top-button-el ${isVisible ? "visible" : ""}`}
      title="Наверх"
      aria-label="Наверх"
    >
      <i className="fa-solid fa-arrow-up" aria-hidden="true" />
    </button>
  );
};

export default TopButton;
