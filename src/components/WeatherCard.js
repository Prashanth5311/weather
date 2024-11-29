import React from "react";

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

// Function to map condition codes to background styles
const getBackgroundStyle = (code) => {
  const backgroundMap = {
    0: "clear.jpg",
    1: "clear.jpg",
    2: "cloudy.jpeg",
    3: "overcast.jpeg",
    45: "fog.jpeg",
    48: "fog.jpeg",
    51: "drizzle.jpeg",
    61: "rain.jpeg",
    71: "snow.jpeg",
    80: "rain.jpeg",
    95: "thunderstorm.jpeg",
  };

  const imageName = backgroundMap[code] || "default.jpg";
  return {
    backgroundImage: `url(/backgrounds/${imageName})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white", // Adjust text color for better contrast
    padding: "20px",
    borderRadius: "8px",
    marginTop: "20px",
  };
};

const WeatherCard = ({ data }) => {
  return (
    <div style={getBackgroundStyle(data.condition)}>
      <h2>{data.city}</h2>
      <p>Temperature: {data.temperature}°C</p>
      <p>Wind Speed: {data.windSpeed} km/h</p>
      <p>Condition: {getConditionDescription(data.condition)}</p>
    </div>
  );
};

export default WeatherCard;
