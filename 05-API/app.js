const express = require("express");
const bodyParser = require("body-parser");

const moviesRouter = require("./routes/movies");

const PORT = 3000;

const app = express();
app.use(bodyParser.json());


app.use("/api/movies", moviesRouter);

app.use((req, res, next) => {
  res.statusCode = 404;
  res.send();
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
