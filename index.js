
// dependencies

var express = require('express');

// set-up

var app = express();
app.set('port', (process.env.PORT || 5000));

// routing

app.get('/', function(request, response) {
  response.end(`
    <html>
      <head>
      </head>
      <body>hello world</body>
    </html>
  `)
});

// run the app

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
