const { Schema } = require("mongoose");

const mongoose=require('mongoose');

var userSchema=new Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email_address:{
        type:String
    },
    user_name:{
        type:String
    },
    password:{
        type:String
    }
});

module.exports=mongoose.model('User',userSchema);
