const express = require('express')
const app = express()
app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/', function (req, res) {
    res.send('Hello yash')
})
app.listen(3000);


