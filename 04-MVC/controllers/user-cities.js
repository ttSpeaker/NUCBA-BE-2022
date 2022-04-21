const City = require("../model/city");

const getFavouriteCities = (req, res, next) => {
  const userCities = City.getAllCities();
  res.send(userCities);
};

const addFavouriteCity = (req, res, next) => {
  const cityName = req.body.name;
  const cityCountry = req.body.country;
  if (cityCountry === "" || cityName === "") {
    res.send("ERROR EMPTY DATA");
  }

  const newCity = new City(cityName, cityCountry);
  newCity.save();

  res.send(newCity);
};

const deleteFavouriteCity = (req, res, next) => {
  // obtener la ciudad por ID
  //Borrar la ciudad
  res.send(userCities);
};

module.exports = {
  getFavouriteCities,
  addFavouriteCity,
  deleteFavouriteCity,
};
