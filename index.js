
const http = require("http");

const server = http.createServer((req,res) => {
    res.end("Hello Node JS");
});

const PORT = process.env.PORT || 3001;
server.listen(PORT,()=>{
    console.log("Server started");
})
