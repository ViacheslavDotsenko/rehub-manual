// src/hooks/useArticles.ts
import { useState, useEffect } from 'react';

// Тип для статей
export type PsychosomMain = {
  id: string;
  title: string;
  keywords: string[];
  content: string;
  image: string;
};

const useArticles = () => {
  const [articles, setArticles] = useState<PsychosomMain[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Функція для отримання статей
  const fetchArticles = async () => {
    try {
      const response = await fetch('/data/others/mainPage.json');  // Шлях до JSON файлу у папці public
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }

      const articlesData = await response.json();
      setArticles(articlesData);
    } catch  {
      setError('Error fetching articles: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return { articles, loading, error };
};

export default useArticles;
