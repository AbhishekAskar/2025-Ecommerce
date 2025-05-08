const express = require('express');
const app = express();
const carts = require('./routes/cartRoutes')
const users = require('./routes/userRoutes')
const products = require('./routes/productRoutes')


app.use('/cart', carts);
app.use('/user', users);
app.use('/product', products);


app.listen(3000, (req, res) =>{
    console.log("App is running on port 3000");
})