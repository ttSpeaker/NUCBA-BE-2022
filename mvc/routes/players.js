const express = require("express");

const playersController = require("../controller/players");

const router = express.Router();

// router.get("/:id", function (req, res, next) {
//   res.send(req.params.id);
// });

router.get("/search/name/:name", playersController.searchByName);

router.post("/", playersController.createPlayer);

module.exports = router;
