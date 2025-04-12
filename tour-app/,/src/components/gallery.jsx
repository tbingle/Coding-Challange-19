import React, { useState, useEffect } from 'react';
import TourCard from './tourcard';

function Gallery({ tours, onRemove }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
//fetched and rendered with use effect and state
  useEffect(() => {
    fetch("https://course-api.com/react-tours-project")
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        tours(data);  // Pass the fetched data back to App.jsx
      })
      .catch(error => {
        setLoading(false);
        setError("Failed to load tours. Please try again.");
      });
  }, []); // Empty array ensures it runs once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="tour-list">
      {tours.map((tour) => (
        <TourCard key={tour.id} {...tour} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default Gallery;
