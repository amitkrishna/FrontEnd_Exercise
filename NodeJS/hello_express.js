var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World')
    console.log('hello')
});

app.get('/amit', function (req, res){
    res.send('Hello World Amit ');
    console.log(';Amit');
});

app.listen(3000, function (req, res){
    console.log("Example app listening port 3000")
});