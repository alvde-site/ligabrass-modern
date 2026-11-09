import type { WebsiteSettings, SeoSettings, GreetingData, SocialLink } from '../types/portfolio';

export const settings: WebsiteSettings = {
  isSplash: true,
};

export const seo: SeoSettings = {
  title: "Брасс-квинтет Лига Брасс: музыка от классики до джаза",
  description:
    "Профессиональный брасс-квинтет. Живая музыка на концерты, фестивали и культурные события: от классики до джаза",
  og: {
    title: "Брасс-квинтет Лига Брасс | От классики до джаза",
    type: "website",
    url: "https://ligabrass.ru",
  },
};

export const greeting: GreetingData = {
  title: "ЛИГА БРАСС-КВИНТЕТ",
  logo_name: "LigaBrassQuintet",
  subTitle:
    "Яркий и виртуозный брасс-квинтет, меняющий представление о возможностях медных духовых. В наших выступлениях — элегантная классика, культовые джазовые стандарты и современные хиты в эксклюзивных аранжировках",
  resumeLink: "https://google.com",
};

export const homeSocials: SocialLink[] = [
  {
    name: "VK",
    link: "https://m.vk.ru/club242974566",
    fontAwesomeIcon: "fa-vk",
    backgroundColor: "#0077FF",
  },
  {
    name: "Telegram",
    link: "https://t.me/ligabrass",
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

export const contactSocials: SocialLink[] = [
  {
    name: "VK",
    link: "https://vk.ru/vilnur_tuba",
    fontAwesomeIcon: "fa-vk",
    backgroundColor: "#0077FF",
  },
  {
    name: "Telegram",
    link: "https://t.me/+79323251050",
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
