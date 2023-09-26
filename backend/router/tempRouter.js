let db=require('../connect/dbClientConnect');
const express=require('express');
const tempRouter=express.Router();

let userModel=require('../models/User');
// let adminModel=require('../models/Admin');

tempRouter.route('/').post(async (req,res)=>{
    console.log(req.body);
    let collection=db["users"];
    let results=await collection.find({})
    .then(()=>{console.log("Found");})
    .catch(()=>{console.log("Did not find one");});

    if(results)
        res.send({"status":"you are logged in"}).status(200);
    else
        res.send({"status":"You are not registered"}).status(404);
});

tempRouter.route('/Register').post((req,res)=>{
    let temp=req.body;
    // console.log(temp);


    let user=new userModel();
    console.log(user);
    user.save()
    .then(()=>{
        res.status(200).json({"user":"User registered successfully"});
    })
    .catch((err)=>{
        res.status(400).json({"error":"Something went wrong"});

    });
});

module.exports=tempRouter;
