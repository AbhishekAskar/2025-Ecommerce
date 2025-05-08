const express = require('express');
const router = express.Router();
const app = express();


router.get('/:id', (req, res)=>{
    const userId = req.params.id;
    res.send(`Fetching cart for user with ID: ${userId}`);
})

router.post('/:id', (req, res)=>{
    const userId = req.params.id;
    res.send(`Adding product to cart for user with ID: ${userId}`);
})

module.exports = router;
