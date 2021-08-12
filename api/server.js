const express = require("express");
const cors = require("cors");
const path = require("path");
const server = express();
server.use(express.json());
server.use(cors());
// when you go to the home page, take you to the frontend
server.use(express.static(path.join(__dirname,"client/build")));

server.use("/",(req,res)=>res.status(200).json({message:"endpoint is working"}));
server.use("/api",(req,res)=>res.status(200).json({data:"endpoint is working"}));
server.use("*",(req,res)=>{
    //handles any unmatched routes
    res.sendFile(path.join(__dirname,"client/build","index.html"));
})


module.exports=server;