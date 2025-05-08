const express = require('express');
const router = express.Router();
const app = express();


router.get('/', (req, res)=>{
    res.send(`Fetching all products`);
})

router.post('/', (req, res)=>{
    res.send(`Adding a new product`);
})

router.get('/:id', (req, res)=>{
    const userId = req.params.id;
    res.send(`Fetching product with Product ID: ${userId}`);
})

module.exports = router;