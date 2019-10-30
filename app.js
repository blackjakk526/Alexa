const http = require('http');
const fs = require('fs');
const mysql = require ('mysql');

const hostname = '127.0.0.1';
const port = 3000;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "p"
});

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile('./view/index.html', null, function(error, data){
      if(error){
        res.statusCode = 404;
        res.end('Whoops. There is a problem');
      }
      else{
          res.end(data)
      }
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

