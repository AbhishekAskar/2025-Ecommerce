const productService = require('../services/productService');

const getProducts = (req, res) => {
    const result = productService.getAllProducts();
    res.send(result);
};

const getProductById = (req, res) => {
    const id = req.params.id;
    const result = productService.getProductById(id);
    res.send(result);
};

const postProduct = (req, res) => {
    const result = productService.addNewProduct();
    res.send(result);
};

module.exports = {
    getProducts,
    getProductById,
    postProduct
};
