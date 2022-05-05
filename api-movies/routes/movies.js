const express = require("express");
const moviesController = require("../controllers/movies");

const router = express.Router();

// /api/movies/create
router.post("/", moviesController.create);

// /api/movies/search?title=avatar&genre=action
router.get("/search", moviesController.search);

// /api/movies/id/1234
router.get("/id/:id", moviesController.getById);

// /api/movies/id/1234
router.put("/id/:id", moviesController.updateById);

// /api/movies/1234
router.delete("/id/:id", moviesController.deleteById);

module.exports = router;
