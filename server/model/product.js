let mongoose = require("mongoose");

let productSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
    },
    price: {
        type: Number,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    sn: {
        type: Number,
        trim: true,
        unique: true,
    },
    color1: {
        type: String,
        trim: true,
    },
    color2: {
        type: String,
        trim: true,
    },
    color3: {
        type: String,
        trim: true,
    },
    color4: {
        type: String,
        trim: true,
    },
    color5: {
        type: String,
        trim: true,
    },
    city: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        trim: true,
    },
    subCategory: {
        type: String,
        trim: true,
    },
    inStock: {
        type: Number,
        trim: true,
    },
    pic: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

let Product = mongoose.model('product', productSchema);

module.exports = Product;
