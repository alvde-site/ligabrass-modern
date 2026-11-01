import type { ContactPageData, SocialLink } from '../types/portfolio';

export const contactPageData: ContactPageData = {
  contactSection: {
    title: "Контакты",
    description:
      "По вопросам согласования концертных программ, репертуара и участия в фестивалях вы можете связаться напрямую с Вильнуром Самигуллиным.",
    profile_image_path: "musicians/samigullin_tuba.jpg",
    phone_title: "Телефон для связи",
    phone_number: "+7 (932) 325-10-50",
  },
};

export const contactSocials: SocialLink[] = [
  {
    name: "VK",
    link: "https://vk.ru",
    fontAwesomeIcon: "fa-vk",
    backgroundColor: "#0077FF",
  },
  {
    name: "Telegram",
    link: "https://t.me",
    fontAwesomeIcon: "fa-telegram",
    backgroundColor: "#24A1DE",
  },
  {
    name: "Gmail",
    link: "mailto:vilnur.tubist1@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];
