// setInterval(()=>{
//     console.log("setInterval function")
// } , 2000)


// setTimeout(()=>{
//     console.log("setTimeOut function")
// },1200)

// console.log("which function first wil be execute outside")


const http = require("http")

http.createServer(function(req,res){
        res.write("hey ")
        res.end()
}).listen(3000 , function(){
    console.log("the server port is 5000")
})