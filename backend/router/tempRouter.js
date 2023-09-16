const express=require('express');
const tempRouter=express.Router();

let userModel=require('../models/User');
// let adminModel=require('../models/Admin');

tempRouter.route('/').post((req,res)=>{
    userModel.find((err,user)=>{
        if(err){
            console.log(err);
            adminModel.find((err,admin)=>{
                if(err){
                    console.log(err);
                }
                else
                    res.status(200).json(admin);
            });
        }
        else
            res.status(200).json(user);
    });
});

tempRouter.route('Register').post((req,res)=>{
    console.log("Hello");
    let user=new userModel(req.body);
    user.save()
    .then((temp)=>{
        res.status(200).json({"user":"User registered successfully"});
    })
    .catch((err)=>{
        res.status(400).json({"error":"Something went wrong"});
    });
});

module.exports=tempRouter;
