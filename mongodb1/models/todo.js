const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: String,
    desc: String,
    isDone: Boolean
});

module.exports = mongoose.model("Todo", todoSchema);
