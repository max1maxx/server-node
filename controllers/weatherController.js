// controllers/weatherController.js
const Weather = require('../models/weatherModel');

const places = ['Place1', 'Place2', 'Place3', 'Place4', 'Place5'];

const generateRandomTemperature = () => {
  return Math.floor(Math.random() * 30) + 10; // Genera temperaturas aleatorias entre 10°C y 40°C
};

const generateRandomWeatherData = () => {
  const weatherData = [];
  const startDate = new Date();
  places.forEach(place => {
    for (let i = 0; i < 10; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      const formattedDate = currentDate.toDateString();
      const temperature = generateRandomTemperature();
      weatherData.push(new Weather(place, formattedDate, temperature));
    }
  });
  return weatherData;
};

const getWeatherByPlace = (placeId) => {
  const filteredData = generateRandomWeatherData().filter(entry => entry.place === `Place${placeId}`);
  return filteredData;
};

module.exports = {
  generateRandomWeatherData,
  getWeatherByPlace,
};


