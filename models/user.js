const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email:{
        unique: true,
        type: String,
        lowercase: true,
    },
    password: String,
}, { timestamps: true });


module.exports = mongoose.model('User', userSchema)