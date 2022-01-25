const User = require('../models/User')

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
        res.json(userInDb)
    }
};