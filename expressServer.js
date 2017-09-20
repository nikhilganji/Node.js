var express = require('express');
var app = express();

app.get('/',function(req, res){
    res.send('This is a string');

});

app.get('/dude', function(req, res){
    res.send('This is the dudes page');
});

app.get('/profile/:name', function(req, res){
    res.send('You requested to see the profile with the name of ' + req.params.name);
});

app.listen(3000);