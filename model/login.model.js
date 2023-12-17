const mongoose = require('mongoose');
//Rating mongoose model to connect with Db and formating the data
const loginSchema = mongoose.Schema({
    userName: {
        type: "String",
        required: true
    },
    password: {
        type: "String",
        required: true
    }
});

module.exports = mongoose.model("Login", loginSchema);