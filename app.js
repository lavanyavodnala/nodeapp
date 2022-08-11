const bodyParser = require('body-parser');
const { response } = require('express');
const express = require('express');
const app = express();

//const http = require('http');
const port = 3000;
const hostname = 'localhost'
const cors = require('cors');
var path = require('path');
var userRouter = require('./routes/userroute.js');
const User = require('./models/userModel');


var url = "mongodb://localhost:27017/homedb";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.use(cors());
app.use(userRouter)

// 2nd way of connecting to mongodb
//const { MongoClient} = require('mongodb');
// const client = new MongoClient(url);
// const dbname = 'myproject'
// async function main() {
//     await client.connect();
//     console.log('connected successfully to server');
//     const db = client.db(dbname);
//     const collection = db.collection('documents');

//     return 'done.';
// }

// main()
//     .then(console.log)
//     .catch(console.error)
//     .finally(()=>client.close());

// database connection
 
const mongoose = require('mongoose');
mongoose.connect(url,{useNewurlParser:true,useUnifiedTopology:true})
 .then((result)=>{
    console.log("db connection succeeded")
 })
 .catch((err)=>{
    console.log("error",err)
 })






var server = app.listen(8888,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("app is listerning at http:", host , port)
});


// this is for http route code

// const server = app.createServer(function(req,res){
//     // console.log(req.headers)
//      res.statusCode = 200;
//      res.setHeader('content-Type','text/html');
//      var url = req.url;
//      if(url==='/login'){
//          res.write("this is login page")
//      }
//      res.end('<html><body><h1>Hello world!</h1></body></html>');
//  })
// server.listen(port,hostname,()=>{
//     console.log("server running at port number "+port)
// });

module.exports = app;