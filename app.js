var express = require('express');
var app = express();
var port = 3000;

app.use('/', express.static('files'));

app.get('/helloworld', function(req, res){
    res.json({ message: 'hello'});
});

app.get('/helloworld', function(req, res){
    res.send("This is not the right hello world!");
});

app.get('/hello/world', function(req, res){
    res.send("This is another Hello World!");
});

app.get('/message/1', function(req, res){
    res.json({message: "This is message one"});
});

app.get('/message/1.thing', function(req, res){
    res.json({message: "This is message one dot thing"});
});

app.get('/message/*', function(req, res){
    res.json({message: "This is every other message"});
});

app.get('/message/for/id:', function(req, res){
    res.json({message: "This is message one"});
});

app.listen(port, function(){
    console.log("Express running on port: " + port);
})
