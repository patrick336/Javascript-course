var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {

  response.setHeader("Content-Type", "text/html; charset=utf-8;");

    if (request.method === 'GET' && request.url === '/') {
      fs.readFile('./tekst.txt', 'utf-8' , function(err,data){

        if (err) throw err;
        response.write('<body>');
        response.write( '<p>' + data + '</p>');
        response.write('</body>');
        response.end();
      });

    } else {

        fs.readFile('./images/error.jpg', function (err,data) {
          if(err) throw err;
           response.writeHead(200, {'Content-Type': 'image/jpeg'});
           response.end(data);
        });
    }
});

server.listen(9000);
