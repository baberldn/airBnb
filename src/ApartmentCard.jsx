import React from 'react';
import { Link } from 'react-router-dom';

const ApartmentCard = ({ apartment }) => {
  if (!apartment) return null;

  return (
    <div className="apartment-card">
      <img src={apartment.image || ''} alt={apartment.title || 'Apartment'} />
      <div className="details">
        <h2>{apartment.title || "Modern 212 Suites in Ataşehir"}</h2>
        <p>{apartment.description}</p>
        <p className="price">{apartment.price ? `${apartment.price} TL / gece` : 'Fiyat Bilgisi Yok'}</p>
        <Link to={`/apartment/${apartment.id}`} className="button">
          Detayları Gör
        </Link>
      </div>
    </div>
  );
};

export default ApartmentCard;
