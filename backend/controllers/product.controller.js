const Product = require('../models/product.model');

// Create a new product:
const createProduct = async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }
    catch(err) {
        res.status(400).json(err);
    }
};

// Get all products:
const getProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch(err) {
        res.status(400).json(err);
    }
};

// Delete product:
const deleteProduct = async(req, res) => {
    //delete product by id
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    }
    catch(err) {
        res.status(400).json(err);
    }
}

// Update product:
const updateProduct = async(req, res) => {
    try{
        //find product by id and modify name price quantity
        const product = await Product.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
        }, {new: true});
        res.status(200).json(product);
    }
    catch(err) {
        res.status(400).json(err);
    }
}

module.exports = {
    createProduct,
    getProducts,
    deleteProduct,
    updateProduct,
};


