//importing the modules
require('dotenv').config();
var mongoose=require('mongoose');
const express=require('express');

//hosting set up
const app=express();
const port=process.env.PORT || 3001;
const url=process.env.URL;

//Models setup

//check the update is applicable
app.use(express.json());
app.listen(port,()=>{
    console.log("Server is up and listening at port: "+port);
    
    //connecting to mongodb database
    mongoose.connect("mongodb+srv://aaditbaldha2002:aadit1234@cluster0.39r6iis.mongodb.net/AIBased")
    .then(()=>{console.log("Database connected");})
    .catch((err)=>{console.log("Database connection failed!!");});

    // mongoose.connect(url)
    // .then(()=>{console.log("Database connected");})
    // .catch((err)=>{console.log("Database connection failed!!");});

})

//methods
app.get("/",(req,res)=>{
    console.log("get / called");

})

// var mongoClient=require('mongodb').MongoClient;
