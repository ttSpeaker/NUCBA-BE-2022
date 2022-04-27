const express = require("express");

const router = express.Router();

// /api/products
router.get("/products", (req, res, next) => {
  res.send(["pelota", "bici"]);
});

router.delete("/products", (req, res, next) => {
  res.send(["pelota"]);
});

module.exports = router;
