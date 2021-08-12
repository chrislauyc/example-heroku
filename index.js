require("dotenv").config();
const server = require("./api/server");
const port = process.env.PORT || "1234"
console.log(__dirname,__filename);
server.listen(port,()=>console.log("server is listening"));