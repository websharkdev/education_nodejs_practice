const product_controller = require('../controllers/shop')

const express = require('express')

const router = express.Router()

router.get('/', product_controller.getShop)
router.get("/add-product", product_controller.getShopForm);
router.post('/add-product', product_controller.postShopItem)

module.exports = router