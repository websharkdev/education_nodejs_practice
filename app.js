const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views')

const ShopRouter = require("./routes/shop");
const UserRouter = require("./routes/user");
const NotFoundedRoute = require("./routes/404");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  express.static("public", {
    root: __dirname,
  })
);

app.use(ShopRouter.routes);
app.use('/admin', UserRouter);
app.use(NotFoundedRoute);

app.listen(3001);
