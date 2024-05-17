const { Product } = require('../db/db');

const getProducts = async () => await Product.findAll();
const getProductById = async (id) => await Product.findByPk(id);
const createProduct = async (product) => await Product.create(product);

module.exports = {
    getProducts,
    getProductById,
    createProduct,
};

