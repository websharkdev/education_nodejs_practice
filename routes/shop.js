const express = require("express");
const router = express.Router();




const products = []


router.get("/", (req, res, next) => {
  res.render('shop', {
    pageTitle: 'Shop page',
    path: '/'
  })
});



router.post('/admin/add-product', (req, res, next) => {
  console.log('add product')

  products.push({
    title: req.body.title,
    price: req.body.price,
  })

  res.redirect('/')
})


exports.routes = router
exports.products = products
