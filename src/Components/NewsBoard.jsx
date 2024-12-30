import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem'; // Ensure this path is correct

export const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch news');
        const data = await response.json();
        setArticles(data.articles || []); 
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      <div className="container">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title || 'No Title Available'}
              description={news.description || 'No Description Available'}
              src={news.urlToImage || 'https://via.placeholder.com/150'}
              url={news.url}
            />
          ))
        ) : (
          <p className="text-center">Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
