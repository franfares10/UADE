const {Router} = require('express');
const productosController = require('../controllers/productos.controller');
const jwtValidator = require('../middlewares/jwtValidator');
const checkFields = require('../middlewares/validateFields');
const { check } = require("express-validator");

const router = Router();

router.get('/',jwtValidator, productosController.getProducts); //GET PRODUCTOS

router.get('/:id',jwtValidator,productosController.getProductById); //GET PRODUCTOS BY ID

router.post('/',[
    check('product.descripcion').not().isEmpty(),
    check('product.categoria').not().isEmpty(),
    check('product.precio_unitario').not().isEmpty(),
    check('product.url_img').not().isEmpty(),
    checkFields
],jwtValidator,productosController.createProduct); //POST PRODUCTOS

router.put('/:id',jwtValidator,productosController.updateProduct) //PUT PRODUCTOS

router.delete('/:id',jwtValidator,productosController.deleteProduct) //DELETE PRODUCTOS 

module.exports = router;