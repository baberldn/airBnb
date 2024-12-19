'use client'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ApartmentDetailsPage from './ApartmentDetailsPage';



const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartment/:id" element={<ApartmentDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;