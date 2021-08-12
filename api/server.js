const express = require("express");
const cors = require("cors");
const server = express();
server.use(express.json());
server.use(cors());


server.use("/api",(req,res)=>res.status(200).json({data:"endpoint is working"}));



module.exports=server;