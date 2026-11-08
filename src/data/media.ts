import type { MediaPageData } from '../types/portfolio';

export const mediaPageData: MediaPageData = {
  videoList: [
    {
      url: "https://vkvideo.ru/video_ext.php?oid=-2021308&id=456241255&hash=b5a8b6b7a97d2d13&hd=4",
      title: "Творческая мечта «Лига Брасс» — сыграть эту пьесу вместе с нашим другом",
    },
    {
      
      url: "https://vkvideo.ru/video_ext.php?oid=-242602214&id=456239027&hd=3",
      title: "Леонард Бернстайн - Вестсайдская история (фрагменты) , аранжировка для брасс-квинтета Джека Гейла.",
    },
    {
      
      url: "https://vkvideo.ru/video_ext.php?oid=-242602214&id=456239029&hd=4",
      title: "Соло на тубе - Вильнур Самигуллин",
    },
    {
      url: "https://vk.ru/video_ext.php?oid=-242602214&id=456239025&hash=8568e36477401420&hd=4",
      title: "“I feel pretty” из мюзикла Л. Бернстайна «Вестсайдская история»",
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
