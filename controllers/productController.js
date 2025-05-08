const getProducts = (req, res) => {
    res.send("Fetching all products.")
}

const getProductsById = (req, res)=>{
    const userId = req.params.id;
    res.send(`Fetching product with Product ID: ${userId}`);
}

const postProducts = (req, res)=>{
    res.send(`Adding a new product`);
}

module.exports = {
    getProducts,
    getProductsById,
    postProducts
}