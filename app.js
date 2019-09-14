var express = require('express');
var app = express();
var port = 3000;

app.get('/helloworld', function(req, res){
    res.json({ message: 'hello'});
});

app.get('/helloworld', function(req, res){
    res.send("This is not the right hello world!");
});

app.get('/hello/world', function(req, res){
    res.send("This is another Hello World!");
});

app.listen(port, function(){
    console.log("Express running on port: " + port);
})
