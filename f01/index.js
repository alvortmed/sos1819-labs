var express = require("express");
var app = express();
var port = process.env.PORT || 8080;

app.get("/time",(req,res)=>{
    var time = new Date();
    res.send(time);
    console.log(time);
});

app.listen(port,()=>{
   console.log("SERVER READY"); 
});