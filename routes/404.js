const express = require("express");

const router = express.Router();

const NotFoundedRoute = router.use((req, res, next) => {
  res.status(404).render('404', {
    pageTitle: '404 - Not founded',
    path: '404'
  })
});

module.exports = NotFoundedRoute;
