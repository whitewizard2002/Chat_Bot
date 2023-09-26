const { MongoClient } =require("mongodb");
const connString="mongodb+srv://aaditbaldha2002:aadit1234@cluster0.39r6iis.mongodb.net/AIBased";
const mongoClient=new MongoClient(connString);

let conn;

try{
    conn=mongoClient.connect();
}catch(e){
    console.log(e);
};

exports.db=conn;