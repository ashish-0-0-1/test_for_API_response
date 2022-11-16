const mysql = require('mysql')
var MongoClient = require('mongodb').MongoClient;

var con = mysql.createConnection({
    user:"root",
    password:"ashish",
    port:3307,
    database :"mis",

})
con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    con.query("select * from dlr_send_node_smpp",function(err,res){
        if(err) throw err;
        console.log("------1-------",res);
    })

})


var url = "mongodb://localhost:27017/another"
MongoClient.connect(url,function(err,res){
    if(err){
        console.log(err)

    }
    console.log("connedted2");
    var dbo = res.db("another")
    dbo.collection("pqr").findOne({},function(err,res){
        if(err){
            console.log(err);

        }
        console.log("------------2-----------",res);
    })
})