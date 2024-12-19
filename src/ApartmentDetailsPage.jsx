'use client'
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import apartments from './data/apartments.json';

const DetailPage = () => {
  const { id } = useParams();
  const apartment = apartments.find((apt) => apt.id === parseInt(id));

  const [rating, setRating] = useState(0);
  const [isClient, setIsClient] = useState(false);

 
  useEffect(() => {
    if (typeof document !== 'undefined') {
      setIsClient(true);
    }
  }, []);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };


  if (!isClient) {
    return null; 
  }

  if (!apartment) {
    return <div className="container">Bu apartman bulunamadı.</div>;
  }

  return (
    <div className="detail-container">
      <h1 className="detail-title">{apartment.title}</h1>
      <img
        src={apartment.image}
        alt={apartment.title}
        className="detail-image"
      />
      <p className="detail-description">{apartment.description}</p>
      <p className="detail-price">{apartment.price} TL / gece</p>

      <div className="rating">
        <h2>Puanlama:</h2>
        <div className="star-rating">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              className={`star ${rating >= index + 1 ? 'active' : ''}`}
              onClick={() => handleStarClick(index)}
            >
              &#9733;
            </button>
          ))}
        </div>
      </div>

      <button className="reserve-button">Rezervasyon Yap</button>
      <Link to="/" className="back-button">Geri Dön</Link>
    </div>
  );
};

export default DetailPage;
