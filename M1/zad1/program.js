process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {

  var input = process.stdin.read();
  if (input !== null) {
    var instruction = input.toString().trim();

    switch (instruction) {

      case '/exit' : {
        process.stdout.write('Quitting app!\n');
        process.exit();
        break;
      }
      case '/nodeversion' :
        process.stdout.write(process.versions.node + '\n\n');
        break;
      case '/language' : {
        if(process.env.lang ===  null  || process.env.lang ===  undefined) {
          console.log('Nie ma takiego obiektu\n');
        }
        else {
          process.stdout.write(process.env.lang);
        }
        break;
      }

      default :
        process.stdout.write('Wrong instruction!\n');
    }
  }
});
