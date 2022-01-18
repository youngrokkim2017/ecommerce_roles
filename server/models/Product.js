const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    cost: Number,
    name: String,
    description: String,
})

const Product = mongoose.model('products', ProductSchema)

module.exports = Product;