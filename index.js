
// dependencies

var express = require('express');

// set-up

var app = express();
app.set('port', (process.env.PORT || 5000));

// routing

app.get('/', function(request, response) {
  response.end(`
    <!DOCTYPE html>		
    <html lang='en-US'>		
    <head>		
      <meta charset='UTF-8'>		
      <title>todo</title>		
      <meta name='author' content='Nicholas Hanson-Holtry'>		
    </head>
    <body>
    hello world
    </body>		
    </html>
  `)
});

// run the app

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
