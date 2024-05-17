const ProductService = require('../services/products');

const getProducts = async (req, res) => {
    try{
        const products = await ProductService.getProducts();
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

const getProductsById = async (req, res) => {
    const {id}  = req.params;
    //req.body
    //req.params
    //req.query
    //?name=pepe&age=23
    //?page=1&limit=10
    try{
        const products = await ProductService.getProductById(id);
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

const createProduct = async (req, res) => {
    try{
        const product = await ProductService.createProduct(req.body);
        res.status(200).json(product);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

module.exports = {
    getProducts,
    createProduct,
    getProductsById,
};