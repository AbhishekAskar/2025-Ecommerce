const productService = require('../service/productService');
const path = require('path');

const getProducts = (req, res) => {
    res.sendFile(path.join(__dirname, "..", "view", "product.html"))
};

const getProductById = (req, res) => {
    const id = req.params.id;
    const result = productService.getProductById(id);
    res.send(result);
};

const postProduct = (req, res) => {
    // const result = productService.addNewProduct();
    const data = req.body;
    res.json({value:data.productName});
};

module.exports = {
    getProducts,
    getProductById,
    postProduct
};
