const express = require('express')
// Imported express
const bparser = require('body-parser')

const application = express()



application.set('view engine', 'ejs')
application.set('views', 'views')
// set static page
application.use(express.static("public", { __dirname }));
application.use(bparser.urlencoded({
    extended: false
}))


// const admin_route = require('')
// const user_route = require("");
const shop_route = require("./routes/shop");
const erros_route = require('./controllers/errors')

// application.use('/admin', admin_route)
// application.use('/user', user_route)
application.use('/shop', shop_route)


application.use("/", erros_route.errorNotFounded);

application.listen(3001, () => {
    console.log('Server starts at http://localhost:3001')
})

