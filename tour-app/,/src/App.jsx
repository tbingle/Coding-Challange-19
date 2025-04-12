import React, { useState } from 'react';
import Gallery from './Gallery';
import './styles.css';

function App() {
  const [tours, setTours] = useState([]);
  
  const removeTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  return (
    <div className="app">
      <h1>Our Tours</h1>
      <Gallery tours={tours} onRemove={removeTour} />
    </div>
  );
}

export default App;
