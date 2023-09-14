//importing the modules
require('dotenv').config();
const express=require('express');
var db=require('./connect/dbconnect');
var user=require('./functionality/loginUser');
//hosting set up
const app=express();
const port=process.env.PORT || 3001;
const url=process.env.URL;

//Models setup

//check the update is applicable
app.use(express.json());
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});

app.listen(port,()=>{
    console.log("Server is up and listening at port: "+port);
    db.connectToDb();
});

//response-methods
app.get("/",(req,res)=>{
    console.log("get method of login page called");
});

app.post("/",(req,res)=>{
    console.log("post method called for login");
    user.loginUser(req);
});

app.post("/Register",(req,res)=>{
    console.log("post method for register called");
    console.log("Data:",req.body);
})
