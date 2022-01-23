const User = require('../models/User')

exports.registerController = async (req, res) => {
    const userInstance = new User(req.body);
    await userInstance.save();
    res.json(userInstance);
};