const express = require("express");
const bodyParser = require("body-parser");

const clientRouter = require("./routes/client");
const adminRouter = require("./routes/admin");

const app = express();

app.use(bodyParser.json());

app.use("/client", clientRouter);
app.use("/admin", adminRouter);

app.listen(3000);
