const express = require("express");
const router = express.Router();
const {products} = require('./shop')


const UserRouter = router.get("/users", (req, res, next) => {

  console.log(products)

  res.render("user", {
    pageTitle: "User page",
    path: "/admin/users",
    products
  });
});



module.exports = UserRouter;
