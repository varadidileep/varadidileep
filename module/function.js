var http = require("http")
const server = http.createServer(function(req,res){
   if(req.url === "/home")
   {
       res.end("homepage")
}
if(req.url === "/home/about"){
     res.end("about page under homepage")
}
 
})
server.listen(8080)