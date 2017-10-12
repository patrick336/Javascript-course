var fs = require('fs');
var formidable = require('formidable');
var fileName;

exports.upload = function(request, response) {
  console.log("Rozpoczynam obsługę żądania upload.");

  var form = new formidable.IncomingForm();

  form.parse(request, function(error, fields, files) {
    fileName = fields.title + ".png";
    fs.renameSync(files.upload.path, fileName);

    fs.readFile('templates/upload.html', function(err, html) {
      response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
      response.write(html);
      response.end();
    });
  });
}

exports.welcome = function(request, response) {
  console.log("Rozpoczynam obsługę żądania welcome.");
  fs.readFile('templates/start.html', function(err, html) {
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.write(html);
    response.end();
  });
}

exports.error = function(request, response) {
  console.log("Nie wiem co robić.");
  response.write("404 :(");
  response.end();
}

exports.show = function(request, response) {

  fs.readFile(fileName, "binary", function(err, file) {
    if(err) throw err;
    response.writeHead(200, { "Content-Type" : "image/png"});
    response.write(file, "binary");
    response.end();
  });
}

exports.loadStyles = function (request, response) {
  var pathStyles = "css/main.css";

  fs.readFile(pathStyles,'utf-8', function(err,data) {
      if(err) throw err;
      response.writeHead(200, {"Content-Type": "text/css; charset=utf-8"});
      response.write(data);
      response.end();
  });
}
