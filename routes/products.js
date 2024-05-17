const { Router } = require('express');
const ProductController = require('../controllers/products');

const router = Router();
//http://localhost:8080/api/products/ --> GET PRODUCTOS
router.get('/', ProductController.getProducts);
//http://localhost:8080/api/products/ --> POST PRODUCTOS
router.post('/', ProductController.createProduct);
router.get('/:id', ProductController.getProductsById);

module.exports = router;