
const mongoose = require('mongoose');
const validator = require('validator');

var countries =['egypt','uk','UAE'];

const userschema = new mongoose.schema({
    name : {
        type: String,
        required : true,
        min: 5, 
        max: 20
    },
    email:{
        type: String,
        required: true,
        validate: validator.isEmail,
    },
    
    country:
    {
      type:String,
      enum:countries,
      required:true
    }

})

const UserModel = mongoose.model('users', userschema);
module.exports = UserModel;