import React from 'react';
import image from '../Assets/image.png';
import './NewsItem.css'; // Import the CSS file

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2">
      <img
        src={src || image}
        className="card-img-top"
        alt="News Thumbnail"
      />
      <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 50) : 'No Title'}</h5>
        <p className="card-text">
          {description ? description.slice(0, 90) : 'No Description Available'}
        </p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
