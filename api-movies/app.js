const express = require("express");
const bodyParser = require("body-parser");

const moviesRouter = require("./routes/movies");
const reviewsRouter = require("./routes/reviews");

const app = express();

app.use(bodyParser.json());

app.use("/api/movies", moviesRouter);
app.use("/api/reviews", reviewsRouter);

app.listen(3000, () => {
  console.log("listening ...");
});
