const http = require("http");
const port = 3000;
var server = http.createServer((req, res) => {
    res.writeHead(200,{"Content-Type": "text/html"});
    if(req.url == "/"){
        res.write("<h1>Página Principal</h1>");
    }else if(req.url == "/bemvindo"){
        res.write("<h1>Bem-vindo</h1>");
    }else{
        res.write("<h1>Pagina nao encontrada</h1>");
    }
    res.end();
});
server.listen(port, () =>{
    console.log(`Servidor exeutando em http://localhost:${port}/`)
});