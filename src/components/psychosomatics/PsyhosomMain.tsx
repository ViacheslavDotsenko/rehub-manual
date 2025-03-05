"use client";
import React from 'react';
import useArticles, { PsychosomMain } from '../../hooks/useArticles';

const PsychosomMain: React.FC = () => {
  const { articles, loading, error } = useArticles();  // Використовуємо хук для отримання статей

  if (loading) {
    return <div>Loading file...</div>;  // Показуємо повідомлення під час завантаження
  }

  if (error) {
    return <div>Error: {error}</div>;  // Показуємо повідомлення про помилку
  }

  return (
    <div>
      
      <ul>
        {articles.map((article: PsychosomMain) => (
          <li key={article.id} className="border-b py-4">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p>{article.content}</p>
            {/* {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-auto mt-4"
              />
            )} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PsychosomMain;
