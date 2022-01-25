const User = require('../models/User')
const jwt = require('jsonwebtoken')

exports.loginController = async (req, res) => {
    // const userInstance = new User(req.body);
    // await userInstance.save();
    // res.json(userInstance);

    const userInDb = await User.findOne({
        username: req.body.username,
        password: req.body.password,
    })

    if (!userInDb) {
        res.status(401).send('invalid login')
    } else {
        const userObject = userInDb.toObject()
        delete userObject.password
        const token = jwt.sign(userObject, 'my-secret-password')
        res.json({
            token, 
            user: userInDb
        })
    }
};