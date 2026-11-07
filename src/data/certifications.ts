import type { ConcertTicket } from "../types/portfolio";

export const certifications: ConcertTicket[] = [
    {
      title: "КОНЦЕРТ: ЛИГА БРАСС",
      alt_name: "КОНЦЕРТ: ЛИГА БРАСС",
      concert_city: "Москва",
      concert_hall: "Пространство «СФЕРА»",
      concert_time: "20:00",
      concert_date: "26.11",
      concert_year: "2026", // Техническое поле для JS (автоскрытие сработает четко)
      concert_day: "четверг",
      concert_place: "Бауманская улица, 24, 2-й этаж",
      concert_info: "От Бродвея до джаза. Прекрасная музыка, живой диалог и уютный вечер четверга!",
      concert_workslist: [
        "Л.Бернстайн: Вестсайдская история",
        "Э.Морриконе: Сюита",
        "Х.Родриго",
        "Р.Роджерс и др.",
      ],
      concert_artists: [
        "Александр Бахарев",
        "Афанасий Соколов",
        "Дмитрий Береговский",
        "Александр Демиденко",
        "Вильнур Самигуллин",
      ],
      more_button: "", 
      buy_button: "https://ligabrass.timepad.ru/event/4292396/", 
      concert_poster: "concerts/jazz-sfera.jpg",
    },
];
