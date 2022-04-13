const express = require("express");
const bodyParser = require("body-parser");

const apiRouter = require("./routes/api");
const adminRouter = require("./routes/admin");
const frontRouter = require("./routes/front");

const app = express();
//MIDDLEWARES
app.use(bodyParser.json());

//ROUTES
app.use("/api", apiRouter);
app.use("/admin", adminRouter);
app.use(frontRouter);

app.listen(3000, () => {
  console.log("listening for requests");
});
