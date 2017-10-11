var fs = require('fs');
var colors = require('colors');

fs.readdir('./', 'utf-8', function(err, files){
  if(err) throw err;

  fs.writeFile('./Lista_plikow.txt', files, function (err) {
    if(err) throw err;
    console.log("Stworzono plik".green);
  });
});
