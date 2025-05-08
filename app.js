const express = require('express');
const app = express();
const carts = require('./routes/cartRoutes')
const users = require('./routes/userRoutes')
const products = require('./routes/productRoutes')


app.use('/api/cart', carts);
app.use('/api/user', users);
app.use('/api/product', products);


app.listen(3000, (req, res) =>{
    console.log("App is running on port 3000");
})