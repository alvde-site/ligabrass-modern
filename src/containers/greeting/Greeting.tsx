import React from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting, homeSocials } from "../../data/settings";
import brassImage from "../../assets/images/brass.png"; // Безопасный импорт картинок в Vite
import "./Greeting.css";

const Greeting: React.FC = () => {
  return (
    <section className="greet-main fade-in-up" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">{greeting.title}</h1>
            {greeting.nickname && (
              <h2 className="greeting-nickname">( {greeting.nickname} )</h2>
            )}
            <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
            <SocialMedia links={homeSocials} />
          </div>
        </div>
        <div className="greeting-image-div">
          <img alt="Брасс квинтет Лига Брасс" src={brassImage} />
        </div>
      </div>
    </section>
  );
};

export default Greeting;
