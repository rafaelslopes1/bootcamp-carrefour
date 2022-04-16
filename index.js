const http = require('http');
const fs = require('fs');
const port = 80;
const ip = 'localhost';

const server = http.createServer((req, res) => {
    console.log(`Recebendo uma requisição ${req.method} para ${req.url}`);
    fs.readFile('./html/2-jQuery/index.html', function (err, html) {
        if(err) {
            res.writeHead(500, '{"Content-Type": "text/html"}');
            res.end();
            throw err;
        };
        res.writeHead(200, '{"Content-Type": "text/html"}');
        res.write(html);
        res.end();
    });
})

server.listen(port, ip, () => {
    console.log(`Servidor rodando em ${ip}:${port}`);
    console.log('Para parar o servidor, pressione as teclas CTRL + C');
});