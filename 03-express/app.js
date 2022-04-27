const express = require("express");
const bodyParser = require("body-parser");

const apiRouter = require("./routes/api");
const adminRouter = require("./routes/admin");
const frontRouter = require("./routes/front");

const app = express();
//MIDDLEWARES
app.use(bodyParser.json());

//ROUTES
// .use() -> aplica a todas las rutas que empiecen con el PATH que le damos y ademas
// lo "saca" de la ruta una vez que llegue al router, o sea que en el router
// no vamos a ponerles el /api o /admin adelante si no que ya va a estar asumido como que existe
app.use("/api", apiRouter);
app.use("/admin", adminRouter);
app.use(frontRouter);

app.listen(3000, () => {
  console.log("listening for requests");
});
