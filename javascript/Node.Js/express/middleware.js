const express = require('express');
const app = express()
// request and response 
// req mein saara data hota hai aane waale user ki request ki taraf ka,
// jaise ki uski location, device info and other things,
// res mein controls hote hai jinke basis pe hum server se response bhej paate hai
app.use(function (req, res, next) {
    console.log("m1")
    next()
})
app.get('/', function (req, res) {
    res.send('Hello yash bro');
})
app.get('/profile', function (req, res) {
    res.send('hey yash');
})
app.listen(3000);