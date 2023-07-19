const express = require('express');

const router = express.Router();

const {getProducts, createProduct, deleteProduct, updateProduct} = require('../controllers/product.controller');

router.get('/products', getProducts);
router.post('/products/create', createProduct);
router.delete('/products/delete/:id', deleteProduct);
router.put('/products/update/:id', updateProduct);

module.exports = router;
