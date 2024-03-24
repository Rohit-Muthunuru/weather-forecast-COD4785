import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Weather.css';

const Student = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [currentDateTime, setCurrentDateTime] = useState('');

  const apiKey = 'db9c3807b51d6d5f6c1c94cce6903b7c';

  useEffect(() => {
    updateDateTime();
  }, []);

  const updateDateTime = () => {
    const now = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    };
    setCurrentDateTime(now.toLocaleDateString('en-US', options));
  };

  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      setWeatherData(response.data);
      updateDateTime();
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="weather-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input-field"
        />
        <button onClick={getWeather} className="get-weather-btn">
          Get Weather
        </button>
      </div>

      {weatherData && (
        <div className="weather-details">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
        </div>
      )}

      <div className="date-time-container">
        <p>{currentDateTime}</p>
      </div>
    </div>
  );
};

export default Student; 