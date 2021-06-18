const express = require("express")
const app = express()

app.get("/date" , (req,res)=>{
    res.send("servr ready")
})
module.exports = app