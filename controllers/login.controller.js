const Login = require('../model/login.model');
const bcrypt = require('bcrypt');
const saveLoginDetails = async (req, res) => {
    try {
        let hashedPassword = await bcrypt.hash(req.body.password , 10);
        let loginDetail = new Login({
            ...req.body,
            password : hashedPassword
        });
        let result = await loginDetail.save();
        res.status(200).json({
            success: true,
            message: "Successfully created"
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

module.exports = {saveLoginDetails};