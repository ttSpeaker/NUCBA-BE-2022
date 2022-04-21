const express = require("express");

const weatherController = require("../controllers/weather");

const router = express.Router();

router.get("/city/:cityName/forecast", weatherController.getForecast);

router.get("/city/:cityName", weatherController.getCurrentWeather);

module.exports = router;
