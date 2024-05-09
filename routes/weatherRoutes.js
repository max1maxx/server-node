// routes/weatherRoutes.js
const express = require('express');

const router = express.Router();

const weatherController = require('../controllers/weatherController');

router.get('/weather', (req, res) => {
  const weatherData = weatherController.generateRandomWeatherData();
  res.json(weatherData);
});

router.get('/weather/:placeId', (req, res) => {
  const placeId = req.params.placeId;
  const weatherData = weatherController.getWeatherByPlace(placeId);
  res.json(weatherData);
});

module.exports = router;


