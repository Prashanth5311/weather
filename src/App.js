import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (cityName) => {
    setError(""); // Clear previous errors
    setWeatherData(null); // Clear previous weather data
    try {
      // Example geocoding API to get latitude and longitude (you can replace this)
      const geocodingResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`
      );
      const geocodingData = await geocodingResponse.json();

      if (!geocodingData.results || geocodingData.results.length === 0) {
        throw new Error("City not found");
      }

      const { latitude, longitude, name } = geocodingData.results[0];

      // Fetch weather data using latitude and longitude
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherResponse.json();

      setWeatherData({
        city: name,
        temperature: weatherData.current_weather.temperature,
        windSpeed: weatherData.current_weather.windspeed,
        condition: weatherData.current_weather.weathercode,
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <header>Weather Now</header>
      <div className="container">
        <SearchBar onSearch={fetchWeather} />
        {error && <ErrorMessage message={error} />}
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
    </div>
  );
}

export default App;
