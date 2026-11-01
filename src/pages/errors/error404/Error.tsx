import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error404: React.FC = () => {
  return (
    <div className="error-main page__main fade-in-up">
      <div className="error-class">
        <h1 className="error-title">Ошибка 404: Страница не найдена</h1>
        <p className="error-description">
          Запрашиваемый вами материал временно недоступен, перемещен или не существует.
        </p>
        <Link className="error-return-link" to="/home">
          ← Вернуться на главную страницу
        </Link>
      </div>
    </div>
  );
};

export default Error404;
