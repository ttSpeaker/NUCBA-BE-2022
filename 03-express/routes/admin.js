const express = require("express");

const router = express.Router();

router.get("/products", (req, res, next) => {
  res.send("");
});

router.delete("/products", (req, res, next) => {
  res.send("");
});

module.exports = router;
