const express = require("express");
const app = express();
const {controller} = require ("./Controller");

app.get("/", (req, res)=>{
    res.send("Project 0")
})
app.get("/users", (req, res)=>{
    controller.getUsers(req, res);
})

exports.app = app 