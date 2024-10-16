const fs = require('fs')
const path = require('path')

const cpath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')

const getProductsFromJSON = (callback) => {
    fs.readFile(cpath, (error, data) => {
        if(!error) {
            return callback(JSON.parse(data))
        }

        callback([])
    })
}

module.exports = class Product {
    constructor(t, d, p, i) {
        this.title = t;
        this.description = d;
        this.price = p;
        this.image = i;
    }


    save() {
        getProductsFromJSON((products) => {
            products.push(this)
            fs.writeFile(cpath, JSON.stringify(products), (error) => console.log('Error:', error))
        })
    }



    static fetchAll(callback) {
        getProductsFromJSON(callback) 
    }
}