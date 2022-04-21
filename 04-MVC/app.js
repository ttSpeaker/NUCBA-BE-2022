const express = require("express");
const bodyParser = require("body-parser");

const weatherRoutes = require("./routes/weather");
const preferencesRoutes =  require("./routes/preferences");

const app = express();

app.use(bodyParser.json());

app.use("/weather", weatherRoutes);
app.use("/preferences", preferencesRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
