const express = require('express');
const Product = require('../models/Product');
const { authenticate, isAdmin } = require('../middleware/auth');

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('addedBy', 'name email').sort({ createdAt: -1 });
    res.json(products);
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({ message: 'Server error fetching products' });
  }
});

// Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('addedBy', 'name email');
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({ message: 'Server error fetching product' });
  }
});

// Add product (Admin only)
router.post('/', authenticate, isAdmin, async (req, res) => {
  try {
    const { name, price, description, category, imageUrl } = req.body;

    // Validation
    if (!name || !price || !description || !category || !imageUrl) {
      return res.status(400).json({ message: 'Please provide all product fields' });
    }

    if (price < 0) {
      return res.status(400).json({ message: 'Price must be a positive number' });
    }

    // Create product
    const product = new Product({
      name,
      price,
      description,
      category,
      imageUrl,
      addedBy: req.user._id
    });

    await product.save();
    await product.populate('addedBy', 'name email');

    res.status(201).json({
      message: 'Product added successfully',
      product
    });
  } catch (error) {
    console.error('Add product error:', error);
    res.status(500).json({ message: 'Server error adding product' });
  }
});

module.exports = router;


