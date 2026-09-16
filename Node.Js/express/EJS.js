// ejs(upgrade to html -like give power to calculate etc.) setup karne ke liye
// 1 ejs install
// npm i ejs
// 2 configure ejs
// app.set("view engine", "ejs");
// 3 ek views folder banao
// 4) usmein ejs files banao
// 5) send ki jagah render karo => render karte waqt make sure aap views folder ke andar waali hi file kaa naam likhein and render function me ejs mention naa kareing
const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", function (req, res) {
    res.render("index");
});

app.listen(3000);


