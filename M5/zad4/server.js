var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function (req, res) {
    res.render('main_template');
});

app.get('/auth/google', function (req, res) {
    res.render('auth', {
        login: req.query.login
    });
});

var server = app.listen(8080, 'localhost', function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Application started listening on http://' + host + ':' + port);
});

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!');
});
