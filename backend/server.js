//importing the modules
require('dotenv').config();
const express=require('express');
var db=require('./connect/dbconnect');

//hosting set up
const app=express();
const port=process.env.PORT || 3001;
const url=process.env.URL;


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

//router-intitialization
// const userRouter=require("./router/userRouter.route");
const tempRouter=require("./router/tempRouter");

//router-list
app.use('/',tempRouter);

