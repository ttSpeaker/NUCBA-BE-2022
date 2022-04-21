const express = require("express");

const userCitiesController = require("../controllers/user-cities");

const router = express.Router();

router.get("/cities", userCitiesController.getFavouriteCities);

router.post("/cities", userCitiesController.addFavouriteCity);

router.delete("/cities/:id", userCitiesController.deleteFavouriteCity);

// router.put("/cities/:id")

module.exports = router;
