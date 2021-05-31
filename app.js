const express = require("express")

const app = express()

app.get('/' , function(req,res){
    res.send("hello")
}).listen(8080)

app.get('/file' , function(req,res){
    req.sendFile(__dirname + "module/1.txt")
});