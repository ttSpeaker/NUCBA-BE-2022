const getCurrentWeather = (req, res, next) => {
  const city = req.params.cityName;
  const currentWeather = `Weather in ${city} is sunny`;
  res.send(currentWeather);
};

const getForecast = (req, res, next) => {
  const city = req.params.cityName;
  const forecast = `Weather in ${city} will be sunny`;
  res.send(forecast);
};

module.exports = {
  getCurrentWeather,
  getForecast,
};
