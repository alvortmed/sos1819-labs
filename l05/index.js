var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

var contact=[{
    name:"alvaro",
    phone:"12345"
},{
    name:"francisco",
    phone:"67890"
}];

app.use("/",express.static(__dirname+"/public")); //contenido estático

/*app.get("/time",(req,res)=>{ //contenido dinámico
    res.send(new Date());
});
*/

app.get("/contact",(req,res)=>{
   res.send(contact);
});

app.listen(port,()=>{
   console.log("Magic is happening in port " + port) ;
});