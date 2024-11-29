import React from "react";
import "./WeatherCard.css";  // Import the CSS file for styling

// Function to map weather condition codes to descriptive terms
const getConditionDescription = (code) => {
  const conditionMap = {
    0: "Clear Sky",
    1: "Mainly Clear",
    2: "Partly Cloudy",
    3: "Overcast",
    45: "Fog",
    48: "Depositing Rime Fog",
    51: "Drizzle: Light",
    53: "Drizzle: Moderate",
    55: "Drizzle: Dense",
    61: "Rain: Slight",
    63: "Rain: Moderate",
    65: "Rain: Heavy",
    71: "Snow: Slight",
    73: "Snow: Moderate",
    75: "Snow: Heavy",
    80: "Rain Showers: Slight",
    81: "Rain Showers: Moderate",
    82: "Rain Showers: Violent",
    95: "Thunderstorm: Slight or Moderate",
    96: "Thunderstorm with Slight Hail",
    99: "Thunderstorm with Heavy Hail",
  };

  return conditionMap[code] || "Unknown Condition";
};

// Function to map condition codes to background styles (class names)
const getBackgroundClass = (code) => {
  const backgroundMap = {
    0: "clear",
    1: "clear",
    2: "cloudy",
    3: "overcast",
    45: "fog",
    48: "fog",
    51: "drizzle",
    61: "rain",
    71: "snow",
    80: "rain",
    95: "thunderstorm",
  };

  return backgroundMap[code] || "default";
};

const WeatherCard = ({ data }) => {
  return (
    <div className={`weather-card ${getBackgroundClass(data.condition)}`}>
      <h2>{data.city}</h2>
      <p>Temperature: {data.temperature}°C</p>
      <p>Wind Speed: {data.windSpeed} km/h</p>
      <p>Condition: {getConditionDescription(data.condition)}</p>
    </div>
  );
};

export default WeatherCard;
