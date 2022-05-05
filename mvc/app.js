const express = require("express");
const bodyParser = require("body-parser");

const playersRouter = require("./routes/players");

const app = express();
// MIDDLEWARE
app.use(bodyParser.json());

app.use("/players", playersRouter);

app.listen(3000, () => {
  console.log("listening");
});
