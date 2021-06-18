const express = require("express")
const app = express()
app.get("/" , (req,res)=>{
    // res.send("data header status : "+date)
    const input = req.body.input
    res.end(input)

})
module.exports = app