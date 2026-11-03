import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const counterId = Number(import.meta.env.VITE_YANDEX_METRICA_ID);

export const useMetrikaHit = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).ym) {
      const url = location.pathname + location.search;
      (window as any).ym(counterId, 'hit', url);
    }
  }, [location.pathname, location.search]);
};
