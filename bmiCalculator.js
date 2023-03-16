var express = require("express")
var bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.urlencoded({extended : true}))

app.listen(4000, function(){
    console.log("server is running on port 4000")
})

app.get("/", function(req, res){
    res.sendFile(__dirname + "/bmiIndex.html")
})

app.post("/", function(req, res){
    var h = Number(req.body.height)
    var w = Number(req.body.weight)

    var result = w/(h*h)

    res.send("The answer is " + result)
})