require("dotenv").config();
const server = require("./api/server");
const express = require("express");
const path = require("path");

const port = process.env.PORT || "1234"
// console.log(__dirname,__filename);
// when you go to the home page, take you to the frontend
server.use(express.static(path.join(__dirname,"client/build")));
server.use("*",(req,res)=>{
    //handles any unmatched routes
    res.sendFile(path.join(path.normalize(`${__dirname}/..`),"client/build","index.html"));
})
server.listen(port,()=>console.log("server is listening"));