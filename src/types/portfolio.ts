export interface WebsiteSettings {
  isSplash: boolean;
}

export interface SeoOgSettings {
  title: string;
  type: string;
  url: string;
}

export interface SeoSettings {
  title: string;
  description: string;
  og: SeoOgSettings;
}

export interface GreetingData {
  title: string;
  logo_name: string;
  subTitle: string;
  resumeLink: string;
  nickname?: string;
}


export interface SocialLink {
  name: string;
  link: string;
  fontAwesomeIcon: string;
  backgroundColor: string;
}

export interface MusicianMainCard {
  title: string;
  subtitle: string;
  duration: string;
  descriptions: string[];
  website_link: string;
  logo_path: string;
  alt_name?: string;
}

export interface DegreesData {
  degrees: MusicianMainCard[];
}

// Повторные интерфейсы из прошлых блоков для целостности картины
export interface ConcertProgram {
  id: string;
  type: 'program';
  title: string;
  description: string;
  duration: string;
  location: string;
  company: string;
  poster: string;
  programList: string[];
}

export interface Review {
  author: string;
  text: string;
}

export interface ArchiveEvent {
  id: string;
  type: 'news' | 'archive';
  title: string;
  company: string;
  logo_path: string;
  duration: string;
  location: string;
  news_date: string;
  description: string;
  poster: string;
  fullStory: string[];
  reviews?: Review[];
}

export interface Review {
  author: string;
  text: string;
}

export interface ArchiveEvent {
  id: string;
  type: 'news' | 'archive';
  title: string;
  company: string;
  logo_path: string;
  duration: string; // Поле для обратной совместимости / краткой даты
  location: string;
  news_date: string; // Красивое отображение даты
  description: string;
  poster: string;
  fullStory: string[];
  reviews?: Review[]; // Необязательное поле для отзывов и рецензий
}

export interface ExperienceSection {
  title: string;
  experiences: ArchiveEvent[];
}

export interface ExperienceData {
  title: string;
  subtitle: string;
  description: string;
  header_image_path: string;
  sections: ExperienceSection[];
}

export interface ConcertProgram {
  id: string;
  type: 'program';
  title: string;
  description: string;
  duration: string;
  location: string;
  company: string;
  poster: string;
  programList: string[];
}

export interface ProjectsHeader {
  title: string;
  description: string;
  avatar_image_path: string;
  programs: ConcertProgram[];
}

export interface PublicationsHeader {
  title: string;
  description: string;
  avatar_image_path: string;
}

export interface ContactSection {
  title: string;
  description: string;
  profile_image_path: string;
  phone_title: string;
  phone_number: string;
}

export interface ContactPageData {
  contactSection: ContactSection;
}

export interface Musician {
  name: string;
  instrument: string;
  photo: string;
  vk: string;
  telegram: string;
  bio: string[];
}

export interface MusiciansDetails {
  [key: string]: Musician;
}

export interface VideoItem {
  url: string;
  title: string;
}

export interface PhotoItem {
  src: string;
  alt: string;
}

export interface AlbumItem {
  id: string;
  title: string;
  description: string;
  cover: string;
  photos: PhotoItem[];
}

export interface MediaPageData {
  videoList: VideoItem[];
  albumList: AlbumItem[];
}

export interface ConcertTicket {
  title: string;
  alt_name: string;
  concert_city: string;
  concert_hall: string;
  concert_time: string;
  concert_date: string;
  concert_year: string;
  concert_day: string;
  concert_place: string;
  concert_info: string;
  concert_workslist: string[];
  concert_artists: string[];
  more_button: string;
  buy_button: string;
  concert_poster: string;
  concert_address?: string; // Добавляем опциональное текстовое поле адреса
}

