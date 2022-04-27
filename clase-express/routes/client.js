const express = require("express");
const { route } = require("../../05-API/routes/movies");

const router = express.Router();
// /client

router.get("/list", (req, res, next) => {
  console.log("GET /clients");
  res.send("get all the clients");
});

router.get("/name/:name", (req, res, next) => {
  const name = req.params.name;
  console.log(name);
  const edad = req.query.edad;
  console.log(edad);
  res.send("get 1 client");
});

module.exports = router;
