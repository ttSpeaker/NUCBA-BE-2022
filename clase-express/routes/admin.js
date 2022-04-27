const express = require("express");

const router = express.Router();

router.use("/", (req, res, next) => {
  console.log("chequeando que el user se admin...");
  if (true) {
    next();
  } else {
    res.send("not authorized");
  }
});

router.get("/getusers", (req, res, next) => {
  console.log("estoy en el GET de users");
  res.send(req.method);
});

router.post("/createuser", (req, res, next) => {
  console.log(req.body);
  res.send("created user");
});
module.exports = router;
