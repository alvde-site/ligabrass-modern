import type { ConcertTicket } from "../types/portfolio";

/**
 * Проверяет, есть ли в массиве хотя бы один непросроченный концерт
 */
export const checkActiveConcerts = (tickets: ConcertTicket[]): boolean => {
  if (!tickets || tickets.length === 0) return false;

  const now = new Date();

  return tickets.some((cert) => {
    const [day, month] = cert.concert_date.split(".").map(Number);
    const [hours, minutes] = cert.concert_time
      ? cert.concert_time.split(":").map(Number)
      : [23, 59];
    const year = cert.concert_year
      ? Number(cert.concert_year)
      : now.getFullYear();

    const concertDateTime = new Date(year, month - 1, day, hours, minutes);
    return concertDateTime >= now;
  });
};
