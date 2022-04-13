const express = require("express");

const router = express.Router();

router.get("/home", (req, res, next) => {
  res.send("home");
});

router.get("/products", (req, res, next) => {
  res.send("products");
});

module.exports = router;
