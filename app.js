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

app.get('/quotes', function(req, res){
    res.json({quote1: "Tabs are better than spaces!",
              quote2: "Tabs are better than spaces! ",
              quote3: "Tabs are better than spaces!",
              quote4: "Tabs are better than spaces!",
              quote5: "Tabs are better than spaces!",
              quote6: "Tabs are better than spaces!",
              quote7: "Tabs are better than spaces!",
              quote8: "Tabs are better than spaces!",
              quote9: "Tabs are better than spaces!",
              quote10: "Tabs are better than spaces!",});
});

app.listen(port, function(){
    console.log("Express running on port: " + port);
})
