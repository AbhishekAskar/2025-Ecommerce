const path = require('path');
const { sendErrorResponse, sendResponse } = require('../utils/response');

const getProducts = (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "..", "view", "product.html"));
    } catch (err) {
        sendErrorResponse(res, {
            message: 'Failed to load product page',
            statusCode: 500
        });
    }
};

const getProductById = (req, res) => {
    try {
        const id = req.params.id;

        if (id > 10) {
            return sendErrorResponse(res, {
                message: 'Product not found',
                statusCode: 404
            });
        }

        const result = {
            id: id,
            name: "Sample Product"
        };

        return sendResponse(res, result, 200);
    } catch (err) {
        sendErrorResponse(res, {
            message: 'Failed to get product by ID',
            statusCode: 500
        });
    }
};

const postProduct = (req, res) => {
    try {
        const data = req.body;

        if (!data.productName) {
            return sendErrorResponse(res, {
                message: "productName is required",
                statusCode: 400
            });
        }

        return res.status(201).json({ value: data.productName });
    } catch (err) {
        sendErrorResponse(res, {
            message: 'Failed to create product',
            statusCode: 500
        });
    }
};

module.exports = {
    getProducts,
    getProductById,
    postProduct
};
