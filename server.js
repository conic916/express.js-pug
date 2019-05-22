'use strict'
var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/store', function (req, res, next) {
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello!');
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

app.get('/first-template', function (req, res) {
    res.render('first-template');
});

app.get('/login', function (req, res) {
    res.render('login', {
        url: "http://kotragdoll.pl/witajcie/"
    });
});

app.get('/logged', function (req, res) {
    res.render('logged');
});

app.get('/http://kotragdoll.pl/witajcie/', function (req, res) {
    res.render('logged', {

    });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});