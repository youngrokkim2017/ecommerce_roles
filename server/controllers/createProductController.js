const Product = require('../models/Product');

// export const createProduct = async (req, res) => {
exports.createProduct = async (req, res) => {
    // testing
    const instance = new Product({
        cost: 300,
        name: 'unicorn',
        description: 'my horn can pierce the sky'
    })
    await instance.save()
    res.send('smells like up dog')
}