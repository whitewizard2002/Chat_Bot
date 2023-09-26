//importing the modules
require('dotenv').config();
const express=require('express');
const cors=require('cors');
var db=require('./connect/dbconnect');

//hosting set up
const app=express();
app.use(cors());
app.options("",cors());
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
const tempRouter=require("./router/tempRouter");

//router-list
app.use('/',tempRouter);


