const mongoose = require('mongoose');

// CREATING SCHEMA
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        reuqired: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

// CREATING MODEL BY SCHEMA
const Product = mongoose.model('Product' , productSchema);

// EXPORTING MODEL
module.exports = Product;