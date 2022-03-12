const http = require("http")
const path = require("path")
const fs = require("fs")

const server = http.createServer((request, response)=>{
    console.log(request.url)
    
    if (request.url === "/") {
        // console.log(__dirname)
        fs.readFile(path.join(__dirname, "myPage.html"), (error, data)=>{
            response.writeHead(200, {"Content-Type": 'text/html'}); 
            response.write(data)
            response.end()
        })
        
    }
})

server.listen(3000, ()=>console.log("Server is running"))