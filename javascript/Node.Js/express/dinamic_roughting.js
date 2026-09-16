const express = require('express');
const app = express()
app.use(function (req, res, next) {
    next()
})
app.get('/', function (req, res) {
    res.send('Hello yash bro');
})
//username =>params
//you can wrie anything after : then it will be generialised
app.get('/profile/:username', function (req, res) {
    res.send(`Hello from ${req.params.username}`);
})
app.listen(3000);