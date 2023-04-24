import { useState, useEffect } from 'react';
import './App.css';

const api_key = import.meta.env.VITE_API_KEY;

function App() {
  const [city, setCity] = useState();

  // istemcide yapılan istek

  /*useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${api_key}&q=Istanbul&aqi=no`)
      .then((response) => response.json())
      .then((data) => setCity(data.location));    
  }, []);*/
  
  // sunucuda yapılan istek
  useEffect(() => {
    fetch('http://localhost:3000/api/weather')
      .then((response) => response.json())
      .then((data) => setCity(data.location));
  }, []);

  return (
    <div className='App'>
      {city && (
        <div>
          <h1>{city.name}</h1>
          <h2>{city.country}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
