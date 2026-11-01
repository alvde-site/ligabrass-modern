import type { MediaPageData } from '../types/portfolio';

export const mediaPageData: MediaPageData = {
  videoList: [
    {
      url: "https://vkvideo.ru",
      title: "Творческая мечта «Лига Брасс» — сыграть эту пьесу вместе с нашим другом",
    },
  ],
  albumList: [
    {
      id: "our-days",
      title: "Наши будни",
      description:
        "Концерты, репетиции, дорожные хроники и живые эмоции коллектива вне строгих филармонических рамок.",
      cover: "everyday_life.jpg",
      photos: [
        { src: "25.10_01.jpg", alt: "Концерт в Колонном" },
        { src: "25.10_02.jpg", alt: "Концерт в Колонном" },
        { src: "24.10_01.jpg", alt: "Концерт в Lemon tree" },
      ],
    },
  ],
};
