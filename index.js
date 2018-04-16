const http = require('http');
const fs = require('fs');
const SC = require('soundcloud');


const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
  if(err){
    throw err;
  }

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(html);
    res.end();
  });

  server.listen(port, hostname, () => {
    console.log('Server started on port ' +port);
  });
});


SC.initialize({
  client_id: 'YOUR_CLIENT_ID',
  redirect_uri: 'http://example.com/callback'
});

SC.get('/user/183/tracks').then(function(tracks){
  alert('Latest track: ' + tracks[0].title);
});
