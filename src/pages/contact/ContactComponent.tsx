import React from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactPageData, contactSocials } from "../../data/contacts";
import "./ContactComponent.css";

const Contact: React.FC = () => {
  const ContactData = contactPageData.contactSection;

  const getProfileImageUrl = (imagePath: string) => {
    return new URL(`../../assets/images/${imagePath}`, import.meta.url).href;
  };

  return (
    <div className="contact-main page__main fade-in-up">
      <div className="basic-contact">
        <div className="contact-heading-div">
          
          {/* Левый блок: Фотография продюсера/директора */}
          <div className="contact-heading-img-div">
            <img
              src={getProfileImageUrl(ContactData.profile_image_path)}
              alt={ContactData.title}
              className="contact-profile-img"
            />
          </div>

          {/* Правый блок: Информационный текстовый блок */}
          <div className="contact-heading-text-div">
            <h1 className="contact-heading-text">
              {ContactData.title}
            </h1>
            <p className="contact-header-detail-text subTitle">
              {ContactData.description}
            </p>

            {/* Блок прямого телефонного вызова */}
            <div className="contact-phone-section">
              <h2 className="contact-phone-title">
                {ContactData.phone_title}
              </h2>
              <a
                href={`tel:${ContactData.phone_number.replace(/[^0-9+]/g, "")}`}
                className="contact-phone-link"
              >
                {ContactData.phone_number}
              </a>
            </div>

            {/* Эксклюзивные кнопки соцсетей */}
            <div className="contact-social-wrap">
              <SocialMedia links={contactSocials} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
