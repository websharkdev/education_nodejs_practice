const Product = require("../models/product")

exports.getShop = (req, res, next) => {
    Product.fetchAll((products) => {
    res.status(200).render("shop", {
      title: "Shop",
      path: "/shop",
      products,
    });
    })
}

exports.postShopItem = (req, res, next) => {
    const {title, description, price, image} = req.body;
    const product = new Product(title, description, price, image);
    product.save()

    res.redirect('/shop')
}


exports.getShopForm = (req, res, next) => {

        res.status(200).render("add-product", {
            title: "Add product",
            path: "/shop/add-product",
        });
};
