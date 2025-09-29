const http = require('http')

const server = http.createServer((req,res)=>{
    res.end('this is server created by Ayush')
})

server.listen(5000)