var mongoose=require('mongoose');

function connectToDb(){
    mongoose.connect("mongodb+srv://aaditbaldha2002:aadit1234@cluster0.39r6iis.mongodb.net/AIBased")
    .then(()=>{console.log("Database connected");})
    .catch((err)=>{console.log("Database connection failed!!");});
}

exports.connectToDb=connectToDb;