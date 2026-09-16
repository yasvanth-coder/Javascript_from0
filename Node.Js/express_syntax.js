// express framework for node.js
// express ka use case => routing
// routing=> GET-can see email and password
// ,POST-hiddin password and email can't see email and password in the url
// https://www.facebook.com/
const express = require('express')
const app = express()

app.get("/faaaaah", function (req, res) {
    res.send("hey yoo yasvanth");
})

app.listen(3000);