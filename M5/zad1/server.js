var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
var stringifyFile = "";

app.use(bodyParser.json());

app.get('/', function(req, res){
    res.send('Hello wolrd ');
});

app.post('/', function(req, res){
    console.log('Otrzymałem żądanie POST do strony głównej');
});

app.delete('/del_user', function(req, res){
    console.log('Otrzymałem żądanie DELETE do strony /del_user');
    res.send('Hallo DELETE!');
});

app.get('/list_user', function(req, res){
    console.log('Otrzymałem żądanie GET do strony /list_user');
    res.send('Strona z listą użytkowników');
});

app.get('/ab*cd', function(req, res){
    console.log('Otrzymałem żądanie GET do strony /ab*cd');
    res.send('Wzór pasuje');
});

app.get('/getNote', function(req, res){
    fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        stringifyFile = data
        res.send(data);
    });
});

app.post('/updateNote/:note', function(req, res){

    fs.readFile('./test.json', 'utf8', function(err, data) {
        if (err) throw err;
        var dataObj = JSON.parse(data);
        dataObj.menu.notes.push(req.params.note);
        // dataObj.menu.notes = [...dataObj.menu.notes, req.params.note];
        fs.writeFile('./test.json', JSON.stringify(dataObj, undefined, 2), function(err){
            if(err) throw err;
            console.log('file updated');
        });
    });
});

var server = app.listen(3000, function() {
    app.use(function(req, res, next){
        res.status(404).send('Wybacz, nie mogliśmy odnalezc tego, czego zadasz');
    });
});
