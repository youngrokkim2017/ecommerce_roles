const Product = require('../models/Product');

// export const createProduct = async (req, res) => {
exports.createProduct = async (req, res) => {
    // testing
    // const instance = new Product({
    //     cost: 300,
    //     name: 'unicorn',
    //     description: 'my horn can pierce the sky'
    // })

    console.log(req.body)
    const instance = new Product(req.body)
    await instance.save()
    // res.send('smells like up dog')
    res.json(instance)
}