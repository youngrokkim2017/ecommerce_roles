const jwt = require('jsonwebtoken')
const Product = require('../models/Product');

// export const createProduct = async (req, res) => {
exports.createProduct = async (req, res) => {
    // testing
    // const instance = new Product({
    //     cost: 300,
    //     name: 'unicorn',
    //     description: 'my horn can pierce the sky'
    // })

    const authorization = req.headers.authorization
    const token = authorization.substring(7)

    //verify token
    try {
        const user = jwt.verify(token, 'my-secret-password')

        if (user.role !== 'admin') {
            return res.status(403).send('authorization error')
        }

        const instance = new Product(req.body)
        await instance.save()
        res.json(instance)
    } catch (err) {
        res.status(403).send('authorization error')
    }
}