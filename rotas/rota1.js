const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    if(req.url == "/"){
        res.write("<h1>Pagina Raiz</h1>")
    }else if(req.url == "/login"){
        res.write("<h1>Tela de Login</h1>")
    }else{
        res.write("A pagina que esta procurando nao existe")
    }
    res.end();
});

const port = 3000;
server.listen(port,()=>{
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});
