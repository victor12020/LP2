const {createServer} = require('http');

let server = createServer((req, res)=>{
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(`
        <h1>Hello World</h1>
        <p>Pagina html usando node</p>
    `);
    res.end();
});

const port = 8000;
server.listen(port,()=>{
    console.log(`Usando a porta ${port} na url http://localhost:${port}`);
});