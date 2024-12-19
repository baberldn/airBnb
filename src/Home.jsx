import React, { useState } from 'react';
import apartments from './data/apartments.json';
import ApartmentCard from './ApartmentCard';


const Home = () => {
  const [search, setSearch] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const filteredApartments = apartments.filter(apartment =>
    (apartment.title || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Air - BNB</h1>


      <div className="date-inputs">
        <input
          type="date"
          placeholder="Giriş Tarihi"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <input
          type="date"
          placeholder="Çıkış Tarihi"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

   
      <input
        type="text"
        placeholder="Ara..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filteredApartments.length > 0 ? (
          filteredApartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))
        ) : (
          <p>Hiçbir sonuç bulunamadı.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
