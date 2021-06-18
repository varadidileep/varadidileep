var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("database");
  var query = { name: "Valley 345" };
  var newvalue = { $set: {name: "Dileep"} };

 // var myobj = { name: "Company Inc", address: "Highway 37" };
 dbo.collection("collection").find({}).toArray(function(err,res){
         if(err) throw err
       console.log(res)
 })
  db.close()
 })
