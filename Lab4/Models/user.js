
const mongoose = require('mongoose');
const validator = require('validator');

// var countries =['egypt','uk','UAE'];

const Userschema = new mongoose.schema({
    name : {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        minlength: 2
    },
    email:{
        type: String,
        required: true,
        validate: validator.isEmail,
    },
    
    country:
    {
        type: String,
        enum: ["egypt", "england", "us"],
        required: true,
        lowercase: true,
    }

})

const UserModel = mongoose.model('users', Userschema);
module.exports = UserModel;

// const userSchema = new mongoose.Schema({

//     name: {
//         type: String,
//         required: true,
//         lowercase: true,
//         unique: true,
//         minlength: 2
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         lowercase: true,
//         unique: true,
//     },
//     age: { type: Number, min: 18 },
//     gender: {
//         type: String,
//         enum: ["male", "female", "notassigned"],
//         default: 'n/a'
//     },
//     country: {
//         type: String,
//         enum: ["egypt", "england", "us"],
//         required: true,
//         lowercase: true,
//     },

// });

