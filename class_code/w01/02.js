import http from "node:http";

const server = http.createServer((req, res)=>{
    // do something
    console.log(req.url)
    if (req.url == "/") {
        return res.end("Hello from Home")
    }
    else if (req.url == "/about") {
        return res.end("Hello from About")
    }
});

server.listen(8000, ()=>{
    console.log("http://localhost:8000")
})
