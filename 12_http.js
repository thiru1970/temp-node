const http = require('http')

const server = http.createServer((req,res) => {
   if (req.url === '/'){
    res.end("Hii man! Welcome to home page")
   }
   else if (req.url === '/about'){
    res.end('Yet to be updated')
   }
   res.end(`
    <h1> Oops! </h1>
    <p> We can't seem to find the page you're looking for </p>
    <a href="/"> back home </a>`)
})

server.listen(5000) 