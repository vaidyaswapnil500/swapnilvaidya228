var express=require("express")
var app=express()
var path=require("path")
var fs=require("fs")

app.use(express.static(path.join(__dirname,'public')))

app.get('/', function(req,resp)
{
resp.sendFile(path.join(__dirname+'/index.html'))
});

app.listen(8000)

console.log("App listening on 8000 port")